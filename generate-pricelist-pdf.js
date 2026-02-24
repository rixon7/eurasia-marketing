const XLSX = require('xlsx');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// --- Read & parse Excel ---
const wb = XLSX.readFile('/Users/Rixon/Downloads/2026 Price list.xlsx');
const ws = wb.Sheets['Retail products'];
const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

const sections = [];
let currentSection = null;

for (const row of raw) {
  const col2 = String(row[2] || '').trim();
  const col3 = String(row[3] || '').trim();
  const col4 = String(row[4] || '').trim();
  const col7 = String(row[7] || '').trim();

  const hasPrice = col7 && /^\d+(\.\d+)?$/.test(col7);

  if (hasPrice) {
    // It's a product
    if (!currentSection) {
      currentSection = { title: 'General', products: [] };
      sections.push(currentSection);
    }
    const lines = col3.split('\n');
    const name = lines[0].trim();
    const description = lines.slice(1).join(' ').trim();
    currentSection.products.push({ name, description, size: col4, price: `£${Math.ceil(parseFloat(col7))}` });
  } else if (col2 && !col3 && col7 !== '2026 RRP') {
    // Section or category heading
    currentSection = { title: col2.replace(/^\s+/, ''), products: [] };
    sections.push(currentSection);
  }
}

// --- PDF setup ---
const doc = new PDFDocument({ margin: 40, size: 'A4' });
const outPath = '/Users/Rixon/Downloads/2026 Retail Price List.pdf';
doc.pipe(fs.createWriteStream(outPath));

const MARGIN = 40;
const W = doc.page.width - MARGIN * 2;
const COL_SIZE  = 85;
const COL_PRICE = 65;
const COL_NAME  = W - COL_SIZE - COL_PRICE;

// Colours
const NAVY  = '#0c2d4a';
const BLUE  = '#2196f3';
const SKY   = '#d0e8f8';
const MUTED = '#5a7d9a';
const WHITE = '#ffffff';
const ALT   = '#f5faff';
const TEXT  = '#1a3a52';
const DESC  = '#7a9ab8';

let alt = false;

function drawColumnHeaders() {
  const y = doc.y;
  doc.rect(MARGIN, y, W, 18).fill(NAVY);
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(WHITE);
  doc.text('Product', MARGIN + 8, y + 5, { width: COL_NAME - 8, lineBreak: false });
  doc.text('Size', MARGIN + COL_NAME, y + 5, { width: COL_SIZE, align: 'center', lineBreak: false });
  doc.text('RRP', MARGIN + COL_NAME + COL_SIZE, y + 5, { width: COL_PRICE, align: 'center', lineBreak: false });
  doc.y = y + 18;
  alt = false;
}

function drawHeader() {
  doc.rect(MARGIN, 40, W, 52).fill('#e8f1fc');
  doc.fontSize(16).font('Helvetica-Bold').fillColor(NAVY)
     .text('mesoestetic', MARGIN + 8, 52, { continued: true })
     .font('Helvetica').fillColor(MUTED).fontSize(14)
     .text('  —  Retail Price List 2026');
  doc.fontSize(8.5).font('Helvetica').fillColor(MUTED)
     .text('All prices are RRP. Contact us for clinic/trade pricing.', MARGIN + 8, 76);
  doc.rect(MARGIN, 92, W, 3).fill(BLUE);
  doc.y = 102;
}

function addPageFooter() {
  const fy = doc.page.height - 38;
  doc.rect(MARGIN, fy, W, 1).fill(SKY);
  doc.fontSize(7.5).font('Helvetica').fillColor(MUTED)
     .text('Skin Health Practice  |  65-73 Staines Road, Hounslow TW3 3HW  |  020 3886 3311  |  Prices subject to change without notice.', MARGIN, fy + 5, { width: W, align: 'center' });
}

// --- First page header ---
drawHeader();
drawColumnHeaders();

// --- Sections ---
const PAGE_BOTTOM = doc.page.height - 50;
let freshPage = true; // just drew column headers, no need for another page break yet

for (const section of sections) {
  if (!section.products.length) continue;

  // Need room for section header + at least one product row
  const neededH = 19 + 17;
  if (!freshPage && doc.y + neededH > PAGE_BOTTOM) {
    addPageFooter();
    doc.addPage();
    drawColumnHeaders();
    freshPage = true;
  }

  // Section header
  const sy = doc.y;
  doc.rect(MARGIN, sy, W, 19).fill(SKY);
  doc.rect(MARGIN, sy, 3, 19).fill(BLUE);
  doc.fontSize(8).font('Helvetica-Bold').fillColor('#0c4a6e')
     .text(section.title.toUpperCase(), MARGIN + 10, sy + 6, { width: W - 14, lineBreak: false });
  doc.y = sy + 19;
  freshPage = false;

  // Products
  for (const p of section.products) {
    const hasDesc = p.description.length > 0;
    const rowH = hasDesc ? 28 : 17;

    if (doc.y + rowH > PAGE_BOTTOM) {
      addPageFooter();
      doc.addPage();
      drawColumnHeaders();
      freshPage = false;
    }

    const py = doc.y;
    if (alt) doc.rect(MARGIN, py, W, rowH).fill(ALT);

    // Product name
    doc.fontSize(9).font('Helvetica-Bold').fillColor(TEXT)
       .text(p.name, MARGIN + 10, py + 5, { width: COL_NAME - 14, lineBreak: false });

    // Description (kit contents)
    if (hasDesc) {
      doc.fontSize(7.5).font('Helvetica').fillColor(DESC)
         .text(p.description, MARGIN + 10, py + 16, { width: COL_NAME - 14, lineBreak: false, ellipsis: true });
    }

    // Size
    doc.fontSize(8.5).font('Helvetica').fillColor(MUTED)
       .text(p.size, MARGIN + COL_NAME, py + 5, { width: COL_SIZE, align: 'center', lineBreak: false });

    // Price
    doc.fontSize(9).font('Helvetica-Bold').fillColor(NAVY)
       .text(p.price, MARGIN + COL_NAME + COL_SIZE, py + 5, { width: COL_PRICE, align: 'center', lineBreak: false });

    // Row border
    doc.moveTo(MARGIN, py + rowH).lineTo(MARGIN + W, py + rowH)
       .strokeColor('#d0e8f8').lineWidth(0.4).stroke();

    doc.y = py + rowH;
    alt = !alt;
  }

  doc.y += 5;
}

addPageFooter();
doc.end();

const totalProducts = sections.reduce((acc, s) => acc + s.products.length, 0);
console.log(`✅ Saved: ${outPath}`);
console.log(`   Sections: ${sections.filter(s => s.products.length).length} | Products: ${totalProducts}`);
