const { createCanvas } = require('canvas');
const fs = require('fs');

const W = 1080;
const H = 608;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// Scale all coordinates from original 1280x720 design
ctx.scale(1080 / 1280, 608 / 720);

// --- Background: dark navy ---
ctx.fillStyle = '#060f1a';
ctx.fillRect(0, 0, W, H);

// --- Radial glow top-left ---
const glowL = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
glowL.addColorStop(0, 'rgba(33,150,243,0.18)');
glowL.addColorStop(1, 'transparent');
ctx.fillStyle = glowL;
ctx.fillRect(0, 0, W, H);

// --- Radial glow bottom-right ---
const glowR = ctx.createRadialGradient(W, H, 0, W, H, 700);
glowR.addColorStop(0, 'rgba(56,189,248,0.14)');
glowR.addColorStop(1, 'transparent');
ctx.fillStyle = glowR;
ctx.fillRect(0, 0, W, H);

// --- Top accent line ---
const topLine = ctx.createLinearGradient(0, 0, W, 0);
topLine.addColorStop(0, '#2196f3');
topLine.addColorStop(0.5, '#38bdf8');
topLine.addColorStop(1, '#2196f3');
ctx.fillStyle = topLine;
ctx.fillRect(0, 0, W, 4);

// --- Left panel background card ---
ctx.fillStyle = 'rgba(12, 45, 74, 0.6)';
roundRect(ctx, 60, 60, 580, 600, 20);
ctx.fill();

// --- Card left border accent ---
ctx.fillStyle = '#2196f3';
ctx.fillRect(60, 60, 4, 600);

// --- EURASIA MARKETING label (top small) ---
ctx.font = 'bold 15px sans-serif';
ctx.fillStyle = '#38bdf8';
ctx.letterSpacing = '3px';
ctx.fillText('EURASIA MARKETING', 90, 110);

// --- Main headline ---
ctx.font = 'bold 58px sans-serif';
ctx.fillStyle = '#e4edf6';
wrapText(ctx, 'Grow Your\nBusiness Online', 90, 175, 520, 68);

// --- Gradient underline under headline ---
const underline = ctx.createLinearGradient(90, 0, 500, 0);
underline.addColorStop(0, '#2196f3');
underline.addColorStop(1, '#38bdf8');
ctx.fillStyle = underline;
ctx.fillRect(90, 295, 320, 3);

// --- Subheadline ---
ctx.font = '22px sans-serif';
ctx.fillStyle = '#7a9ab8';
wrapText(ctx, "London's trusted digital marketing agency\nhelping businesses reach more customers.", 90, 335, 510, 30);

// --- Services list ---
const services = [
  '🌐  Website Design',
  '🔍  SEO & Google Rankings',
  '📱  Social Media Management',
  '📣  Digital Advertising',
];
ctx.font = '19px sans-serif';
ctx.fillStyle = '#e4edf6';
services.forEach((s, i) => {
  ctx.fillStyle = 'rgba(33,150,243,0.12)';
  roundRect(ctx, 90, 410 + i * 52, 510, 40, 8);
  ctx.fill();
  ctx.fillStyle = '#e4edf6';
  ctx.fillText(s, 110, 438 + i * 52);
});

// --- Right panel ---
// Big accent circle decoration
ctx.beginPath();
ctx.arc(960, 200, 180, 0, Math.PI * 2);
ctx.strokeStyle = 'rgba(33,150,243,0.15)';
ctx.lineWidth = 40;
ctx.stroke();

ctx.beginPath();
ctx.arc(960, 200, 110, 0, Math.PI * 2);
ctx.strokeStyle = 'rgba(56,189,248,0.1)';
ctx.lineWidth = 20;
ctx.stroke();

// Stat boxes
const stats = [
  { num: '10+', label: 'Years\nExperience' },
  { num: '200+', label: 'Projects\nDelivered' },
  { num: '98%', label: 'Client\nSatisfaction' },
];
stats.forEach((s, i) => {
  const x = 680 + (i % 2) * 270;
  const y = 360 + Math.floor(i / 2) * 160;
  const w = 230, h = 130;

  ctx.fillStyle = 'rgba(12,45,74,0.7)';
  roundRect(ctx, x, y, w, h, 14);
  ctx.fill();

  ctx.strokeStyle = 'rgba(33,150,243,0.3)';
  ctx.lineWidth = 1;
  roundRect(ctx, x, y, w, h, 14);
  ctx.stroke();

  ctx.font = 'bold 42px sans-serif';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText(s.num, x + 20, y + 55);

  ctx.font = '15px sans-serif';
  ctx.fillStyle = '#7a9ab8';
  s.label.split('\n').forEach((line, li) => {
    ctx.fillText(line, x + 20, y + 80 + li * 20);
  });
});

// Third stat centered below
const x3 = 680 + 135, y3 = 520;
ctx.fillStyle = 'rgba(12,45,74,0.7)';
roundRect(ctx, x3, y3, 230, 130, 14);
ctx.fill();
ctx.strokeStyle = 'rgba(33,150,243,0.3)';
ctx.lineWidth = 1;
roundRect(ctx, x3, y3, 230, 130, 14);
ctx.stroke();
ctx.font = 'bold 42px sans-serif';
ctx.fillStyle = '#38bdf8';
ctx.fillText(stats[2].num, x3 + 20, y3 + 55);
ctx.font = '15px sans-serif';
ctx.fillStyle = '#7a9ab8';
stats[2].label.split('\n').forEach((line, li) => {
  ctx.fillText(line, x3 + 20, y3 + 80 + li * 20);
});

// --- Bottom bar ---
ctx.fillStyle = 'rgba(10,30,51,0.85)';
ctx.fillRect(0, 645, W, 75);

ctx.fillStyle = '#2196f3';
ctx.fillRect(0, 645, W, 2);

ctx.font = 'bold 17px sans-serif';
ctx.fillStyle = '#e4edf6';
ctx.fillText('📞  020 3886 3311', 80, 690);

ctx.fillStyle = '#7a9ab8';
ctx.fillText('|', 290, 690);

ctx.font = '17px sans-serif';
ctx.fillStyle = '#e4edf6';
ctx.fillText('✉  info@eurasiamarketing.com', 315, 690);

ctx.fillStyle = '#7a9ab8';
ctx.fillText('|', 610, 690);

ctx.fillText('🌐  eurasiamarketing.com', 635, 690);

ctx.fillStyle = '#7a9ab8';
ctx.fillText('|', 900, 690);

ctx.fillText('📍  65-73 Staines Road, Hounslow TW3 3HW', 925, 690);

// --- Save ---
const out = fs.createWriteStream('/Users/Rixon/Desktop/eurasia-advert.png');
canvas.createPNGStream().pipe(out);
out.on('finish', () => console.log('✅ Saved to Desktop: eurasia-advert.png'));

// --- Helpers ---
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxW, lineH) {
  text.split('\n').forEach((line, i) => {
    ctx.fillText(line, x, y + i * lineH);
  });
}
