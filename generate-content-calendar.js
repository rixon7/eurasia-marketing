const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();

const NAVY   = 'FF0C2D4A';
const BLUE   = 'FF2196F3';
const SKY    = 'FFD0E8F8';
const LIGHT  = 'FFE8F1FC';
const WHITE  = 'FFFFFFFF';
const MUTED  = 'FF5A7D9A';
const TEXT   = 'FF1A3A52';
const GREEN  = 'FFD4EDDA';
const YELLOW = 'FFFFF3CD';
const PURPLE = 'FFE8D5F5';
const ORANGE = 'FFFDE8D0';
const PINK   = 'FFFDD0D8';

const pillarColors = {
  'Education & Tips':      { bg: 'FFD0E8F8', font: 'FF0C4A6E' },
  'Local Focus':           { bg: 'FFD4EDDA', font: 'FF155724' },
  'Services & Expertise':  { bg: 'FFFDE8D0', font: 'FF7A3D00' },
  'Social Proof':          { bg: 'FFE8D5F5', font: 'FF4A0E6B' },
  'Brand & Culture':       { bg: 'FFFDD0D8', font: 'FF7A0E2A' },
};

const months = [
  {
    name: 'March 2026',
    posts: [
      { week: 'Week 1',  date: '2 Mar',  pillar: 'Education & Tips',     title: '5 SEO Mistakes Small Businesses Make (And How to Fix Them)', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 1',  date: '5 Mar',  pillar: 'Local Focus',          title: 'Why Hounslow Businesses Need a Strong Online Presence in 2026', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 2',  date: '9 Mar',  pillar: 'Services & Expertise', title: 'What\'s Included in Our Social Media Management Package', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 2',  date: '12 Mar', pillar: 'Education & Tips',     title: 'How to Set Up and Optimise Your Google Business Profile', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 3',  date: '16 Mar', pillar: 'Social Proof',         title: 'How We Helped a Local Business Triple Their Enquiries in 6 Months', type: 'Case Study', status: 'To Do' },
      { week: 'Week 3',  date: '19 Mar', pillar: 'Local Focus',          title: 'The Best Digital Marketing Strategies for Brentford Businesses', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 4',  date: '23 Mar', pillar: 'Education & Tips',     title: 'SEO vs Google Ads: Which is Right for Your Business?', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 4',  date: '26 Mar', pillar: 'Brand & Culture',      title: 'Meet the Team Behind Eurasia Marketing', type: 'Blog Post', status: 'To Do' },
    ],
  },
  {
    name: 'April 2026',
    posts: [
      { week: 'Week 1',  date: '1 Apr',  pillar: 'Education & Tips',     title: 'What is a Content Calendar and Why Does Your Business Need One?', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 1',  date: '4 Apr',  pillar: 'Local Focus',          title: 'How Feltham Businesses Can Get More Customers Online', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 2',  date: '8 Apr',  pillar: 'Services & Expertise', title: 'How We Build Websites That Convert Visitors Into Customers', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 2',  date: '11 Apr', pillar: 'Education & Tips',     title: '10 Social Media Tips for Small Businesses in 2026', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 3',  date: '15 Apr', pillar: 'Social Proof',         title: 'Client Spotlight: From Zero Online Presence to Page One of Google', type: 'Case Study', status: 'To Do' },
      { week: 'Week 3',  date: '18 Apr', pillar: 'Education & Tips',     title: 'How Long Does SEO Take to Work? A Realistic Guide', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 4',  date: '22 Apr', pillar: 'Local Focus',          title: 'Digital Marketing for Hayes & Heston Businesses: Where to Start', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 4',  date: '25 Apr', pillar: 'Services & Expertise', title: 'Google Ads vs Facebook Ads: Which Platform Should You Invest In?', type: 'Blog Post', status: 'To Do' },
    ],
  },
  {
    name: 'May 2026',
    posts: [
      { week: 'Week 1',  date: '4 May',  pillar: 'Education & Tips',     title: 'The Beginner\'s Guide to Email Marketing for Small Businesses', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 1',  date: '7 May',  pillar: 'Local Focus',          title: 'Why Hampton & Sunbury Businesses Are Investing in Digital Marketing', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 2',  date: '11 May', pillar: 'Brand & Culture',      title: 'Our Approach: How We Create Marketing Strategies That Actually Work', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 2',  date: '14 May', pillar: 'Education & Tips',     title: 'How to Get More Google Reviews (And Why They Matter)', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 3',  date: '18 May', pillar: 'Services & Expertise', title: 'What Does a Digital Marketing Agency Actually Do?', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 3',  date: '21 May', pillar: 'Social Proof',         title: '5 Businesses We\'ve Helped Grow Online — Real Results', type: 'Case Study', status: 'To Do' },
      { week: 'Week 4',  date: '25 May', pillar: 'Education & Tips',     title: 'What is a Content Pillar and How to Build One for Your Business', type: 'Blog Post', status: 'To Do' },
      { week: 'Week 4',  date: '28 May', pillar: 'Local Focus',          title: 'Isleworth & Brentford: The Local Businesses Winning Online in 2026', type: 'Blog Post', status: 'To Do' },
    ],
  },
];

// ── Helper ──────────────────────────────────────────────────────────────────
function styleHeader(cell, text, bgColor, fontColor = WHITE, size = 11) {
  cell.value = text;
  cell.font = { name: 'Calibri', size, bold: true, color: { argb: fontColor } };
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };
  cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  cell.border = { bottom: { style: 'thin', color: { argb: 'FFBBCCDD' } } };
}

// ── Overview sheet ───────────────────────────────────────────────────────────
const overview = workbook.addWorksheet('Overview', { views: [{ showGridLines: false }] });
overview.columns = [
  { key: 'pillar', width: 24 },
  { key: 'color',  width: 18 },
  { key: 'pct',    width: 14 },
  { key: 'desc',   width: 50 },
];

// Title
overview.mergeCells('A1:D1');
const t = overview.getCell('A1');
t.value = 'Eurasia Marketing — Content Calendar 2026';
t.font = { name: 'Calibri', size: 16, bold: true, color: { argb: NAVY } };
t.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT } };
t.alignment = { horizontal: 'center', vertical: 'middle' };
overview.getRow(1).height = 36;

// Subtitle
overview.mergeCells('A2:D2');
const s = overview.getCell('A2');
s.value = 'March – May 2026  |  24 pieces of content  |  eurasiamarketing.com';
s.font = { name: 'Calibri', size: 10, italic: true, color: { argb: MUTED } };
s.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT } };
s.alignment = { horizontal: 'center', vertical: 'middle' };
overview.getRow(2).height = 20;

overview.addRow([]);

// Column headers
const oh = overview.addRow(['Content Pillar', 'Theme Colour', 'Recommended %', 'Description']);
oh.height = 22;
['A','B','C','D'].forEach(c => styleHeader(oh.getCell(c), oh.getCell(c).value, NAVY));

const pillarRows = [
  { pillar: 'Education & Tips',     pct: '40%', desc: 'Teach your audience — tips, how-tos, guides, explainers' },
  { pillar: 'Local Focus',          pct: '20%', desc: 'Target local areas — Hounslow, Feltham, Brentford, Hayes, etc.' },
  { pillar: 'Services & Expertise', pct: '20%', desc: 'Showcase your services, process, and expertise' },
  { pillar: 'Social Proof',         pct: '10%', desc: 'Case studies, testimonials, and client results' },
  { pillar: 'Brand & Culture',      pct: '10%', desc: 'Team, values, behind the scenes, company news' },
];

pillarRows.forEach(p => {
  const row = overview.addRow([p.pillar, '', p.pct, p.desc]);
  row.height = 22;
  const col = pillarColors[p.pillar];
  ['A','B','C','D'].forEach(c => {
    const cell = row.getCell(c);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: col.bg } };
    cell.font = { name: 'Calibri', size: 10, color: { argb: col.font } };
    cell.alignment = { vertical: 'middle', wrapText: true };
    cell.border = { bottom: { style: 'hair', color: { argb: 'FFCCDDEE' } } };
  });
  row.getCell('A').font = { name: 'Calibri', size: 10, bold: true, color: { argb: col.font } };
  row.getCell('C').alignment = { horizontal: 'center', vertical: 'middle' };
});

// ── Monthly sheets ────────────────────────────────────────────────────────────
months.forEach(month => {
  const sheet = workbook.addWorksheet(month.name, { views: [{ showGridLines: false }] });
  sheet.columns = [
    { key: 'week',   width: 10 },
    { key: 'date',   width: 10 },
    { key: 'pillar', width: 22 },
    { key: 'title',  width: 55 },
    { key: 'type',   width: 14 },
    { key: 'status', width: 12 },
    { key: 'notes',  width: 30 },
  ];

  // Month title
  sheet.mergeCells('A1:G1');
  const mt = sheet.getCell('A1');
  mt.value = `Eurasia Marketing — ${month.name} Content Calendar`;
  mt.font = { name: 'Calibri', size: 14, bold: true, color: { argb: NAVY } };
  mt.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT } };
  mt.alignment = { horizontal: 'center', vertical: 'middle' };
  sheet.getRow(1).height = 30;

  // Blue accent line
  sheet.mergeCells('A2:G2');
  sheet.getCell('A2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BLUE } };
  sheet.getRow(2).height = 3;

  // Column headers
  const hRow = sheet.addRow(['Week', 'Date', 'Content Pillar', 'Title / Topic', 'Type', 'Status', 'Notes']);
  hRow.height = 22;
  ['A','B','C','D','E','F','G'].forEach(c => styleHeader(hRow.getCell(c), hRow.getCell(c).value, NAVY));

  let lastWeek = '';
  month.posts.forEach((post, i) => {
    const row = sheet.addRow([
      post.week !== lastWeek ? post.week : '',
      post.date,
      post.pillar,
      post.title,
      post.type,
      post.status,
      '',
    ]);
    row.height = 22;
    lastWeek = post.week;

    const col = pillarColors[post.pillar];
    const isAlt = i % 2 === 1;

    row.getCell('A').font = { name: 'Calibri', size: 9, bold: true, color: { argb: MUTED } };
    row.getCell('A').alignment = { vertical: 'middle' };

    row.getCell('B').font = { name: 'Calibri', size: 9, color: { argb: TEXT } };
    row.getCell('B').alignment = { horizontal: 'center', vertical: 'middle' };

    row.getCell('C').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: col.bg } };
    row.getCell('C').font = { name: 'Calibri', size: 9, bold: true, color: { argb: col.font } };
    row.getCell('C').alignment = { vertical: 'middle' };

    row.getCell('D').font = { name: 'Calibri', size: 10, color: { argb: TEXT } };
    row.getCell('D').alignment = { vertical: 'middle', wrapText: true };
    if (isAlt) row.getCell('D').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FBFF' } };

    row.getCell('E').font = { name: 'Calibri', size: 9, color: { argb: MUTED } };
    row.getCell('E').alignment = { horizontal: 'center', vertical: 'middle' };

    // Status badge
    const statusCell = row.getCell('F');
    statusCell.value = post.status;
    statusCell.font = { name: 'Calibri', size: 9, bold: true, color: { argb: 'FF155724' } };
    statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD4EDDA' } };
    statusCell.alignment = { horizontal: 'center', vertical: 'middle' };

    row.getCell('G').font = { name: 'Calibri', size: 9, color: { argb: MUTED } };
    row.getCell('G').alignment = { vertical: 'middle' };

    // Bottom border
    ['A','B','C','D','E','F','G'].forEach(c => {
      row.getCell(c).border = { bottom: { style: 'hair', color: { argb: 'FFCCDDEEE' } } };
    });
  });
});

// ── Save ─────────────────────────────────────────────────────────────────────
const outPath = '/Users/Rixon/Desktop/Eurasia Marketing — Content Calendar 2026.xlsx';
workbook.xlsx.writeFile(outPath).then(() => {
  console.log('✅ Saved:', outPath);
});
