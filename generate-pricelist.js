const XLSX = require('xlsx');
const ExcelJS = require('exceljs');

// --- Read source file ---
const wb = XLSX.readFile('/Users/Rixon/Downloads/2026 Price list.xlsx');
const ws = wb.Sheets['Retail products'];
const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

// --- Parse rows into structured data ---
// Source columns: C=code, D=name, E=size, F=clinic price, H=RRP
const sections = [];
let currentSection = null;

for (const row of raw) {
  const code = String(row[2] || '').trim();
  const name = String(row[3] || '').trim();
  const size = String(row[4] || '').trim();
  const rrp  = String(row[7] || '').trim();

  // Section header rows have name but no code/size/price
  const isHeader = name && !size && !rrp && !code.startsWith('T-') && !code.startsWith('TRICOLOGY') && !code.startsWith('AGE') && !code.startsWith('DEP') && !code.startsWith('SENS') && !code.startsWith('ACNE') && !code.startsWith('ACTIVE') && !code.startsWith('KOSM') && !code.startsWith('DERM');
  const isProduct = rrp && name;

  if (isHeader && name.trim()) {
    currentSection = { title: name.trim(), products: [] };
    sections.push(currentSection);
  } else if (isProduct && currentSection) {
    currentSection.products.push({ name, size, price: rrp });
  }
}

// --- Build styled workbook ---
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Retail Price List', {
  pageSetup: { paperSize: 9, orientation: 'portrait', fitToPage: true, fitToWidth: 1 },
  views: [{ showGridLines: false }],
});

// Column widths
sheet.columns = [
  { key: 'name',  width: 45 },
  { key: 'size',  width: 18 },
  { key: 'price', width: 16 },
];

// --- Title row ---
sheet.mergeCells('A1:C1');
const titleCell = sheet.getCell('A1');
titleCell.value = 'mesoestetic — Retail Price List 2026';
titleCell.font = { name: 'Calibri', size: 16, bold: true, color: { argb: 'FF0C2D4A' } };
titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8F1FC' } };
sheet.getRow(1).height = 36;

// --- Subtitle row ---
sheet.mergeCells('A2:C2');
const subCell = sheet.getCell('A2');
subCell.value = 'All prices are RRP (inc. VAT where applicable)';
subCell.font = { name: 'Calibri', size: 10, italic: true, color: { argb: 'FF5A7D9A' } };
subCell.alignment = { horizontal: 'center', vertical: 'middle' };
subCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8F1FC' } };
sheet.getRow(2).height = 20;

// Spacer
sheet.addRow([]);
sheet.getRow(3).height = 6;

// --- Column headers ---
const headerRow = sheet.addRow(['Product', 'Size', 'Price']);
headerRow.height = 24;
['A', 'B', 'C'].forEach(col => {
  const cell = headerRow.getCell(col);
  cell.font = { name: 'Calibri', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0C2D4A' } };
  cell.alignment = { horizontal: col === 'A' ? 'left' : 'center', vertical: 'middle' };
  cell.border = { bottom: { style: 'thin', color: { argb: 'FF2196F3' } } };
});
headerRow.getCell('A').alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };

// --- Sections & products ---
let rowIdx = 5;
let isAltProduct = false;

for (const section of sections) {
  if (!section.products.length) continue;

  // Section header
  const sRow = sheet.addRow([section.title.replace(/^\s+/, '')]);
  sRow.height = 22;
  sheet.mergeCells(`A${rowIdx}:C${rowIdx}`);
  const sCell = sRow.getCell('A');
  sCell.value = section.title.replace(/^\s+/, '').replace(/\s+SOLUTIONS.*|SOLUTIONS.*/i, ' Solutions').toUpperCase();
  sCell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: 'FF0C4A6E' } };
  sCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD0E8F8' } };
  sCell.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
  sCell.border = {
    left: { style: 'medium', color: { argb: 'FF2196F3' } },
    bottom: { style: 'thin', color: { argb: 'FFBBD6EE' } },
  };
  rowIdx++;
  isAltProduct = false;

  // Products
  for (const p of section.products) {
    const pRow = sheet.addRow([p.name, p.size, p.price]);
    pRow.height = 20;
    const bg = isAltProduct ? 'FFF5FAFF' : 'FFFFFFFF';

    ['A', 'B', 'C'].forEach(col => {
      const cell = pRow.getCell(col);
      cell.font = { name: 'Calibri', size: 10, color: { argb: 'FF1A3A52' } };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
      cell.border = { bottom: { style: 'hair', color: { argb: 'FFD0E8F8' } } };
    });

    pRow.getCell('A').alignment = { horizontal: 'left', vertical: 'middle', indent: 2 };
    pRow.getCell('B').alignment = { horizontal: 'center', vertical: 'middle' };

    const priceCell = pRow.getCell('C');
    priceCell.alignment = { horizontal: 'center', vertical: 'middle' };
    priceCell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: 'FF0C2D4A' } };

    isAltProduct = !isAltProduct;
    rowIdx++;
  }

  // Gap between sections
  const gap = sheet.addRow([]);
  gap.height = 6;
  rowIdx++;
}

// --- Footer ---
sheet.mergeCells(`A${rowIdx}:C${rowIdx}`);
const footerCell = sheet.getCell(`A${rowIdx}`);
footerCell.value = 'Prices subject to change. Contact us for clinic/trade pricing.';
footerCell.font = { name: 'Calibri', size: 9, italic: true, color: { argb: 'FF7A9AB8' } };
footerCell.alignment = { horizontal: 'center' };

// --- Save ---
const outPath = '/Users/Rixon/Downloads/2026 Retail Price List.xlsx';
workbook.xlsx.writeFile(outPath).then(() => {
  console.log('✅ Saved:', outPath);
});
