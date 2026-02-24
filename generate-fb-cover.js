const { createCanvas } = require('canvas');
const fs = require('fs');

// Facebook cover photo — 820x312
const W = 820;
const H = 312;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// --- Background ---
ctx.fillStyle = '#060f1a';
ctx.fillRect(0, 0, W, H);

// --- Radial glow left ---
const glowL = ctx.createRadialGradient(0, H / 2, 0, 0, H / 2, 400);
glowL.addColorStop(0, 'rgba(33,150,243,0.2)');
glowL.addColorStop(1, 'transparent');
ctx.fillStyle = glowL;
ctx.fillRect(0, 0, W, H);

// --- Radial glow right ---
const glowR = ctx.createRadialGradient(W, H, 0, W, H, 380);
glowR.addColorStop(0, 'rgba(56,189,248,0.15)');
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

// --- Bottom accent line ---
ctx.fillStyle = topLine;
ctx.fillRect(0, H - 4, W, 4);

// --- Globe icon (left side) ---
const gx = 130, gy = H / 2 - 10, r = 60;

ctx.beginPath();
ctx.arc(gx, gy, r, 0, Math.PI * 2);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 2.5;
ctx.stroke();

ctx.beginPath();
ctx.ellipse(gx, gy, r, r * 0.35, 0, 0, Math.PI * 2);
ctx.strokeStyle = '#38bdf8';
ctx.lineWidth = 1.5;
ctx.stroke();

ctx.beginPath();
ctx.ellipse(gx, gy, r * 0.35, r, 0, 0, Math.PI * 2);
ctx.strokeStyle = '#38bdf8';
ctx.lineWidth = 1.5;
ctx.stroke();

// Arrow
ctx.beginPath();
ctx.moveTo(gx, gy);
ctx.lineTo(gx + 42, gy - 42);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 2.5;
ctx.lineCap = 'round';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(gx + 27, gy - 45);
ctx.lineTo(gx + 45, gy - 42);
ctx.lineTo(gx + 42, gy - 25);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 2.5;
ctx.lineJoin = 'round';
ctx.stroke();

// --- Company name (centre) ---
ctx.font = 'bold 52px sans-serif';
ctx.fillStyle = '#e4edf6';
ctx.textAlign = 'left';
ctx.fillText('EURASIA', 220, H / 2 + 5);

// Dot accent
ctx.beginPath();
ctx.arc(436, H / 2 - 8, 5, 0, Math.PI * 2);
ctx.fillStyle = '#2196f3';
ctx.fill();

// Tagline
ctx.font = '14px sans-serif';
ctx.fillStyle = '#7a9ab8';
ctx.fillText('MARKETING', 222, H / 2 + 28);

// Gradient line under name
const ul = ctx.createLinearGradient(220, 0, 500, 0);
ul.addColorStop(0, '#2196f3');
ul.addColorStop(1, '#38bdf8');
ctx.fillStyle = ul;
ctx.fillRect(220, H / 2 + 35, 240, 2);

// --- Right side — tagline/services ---
ctx.font = 'bold 15px sans-serif';
ctx.fillStyle = '#38bdf8';
ctx.textAlign = 'left';
ctx.fillText('Digital Marketing  ·  SEO  ·  Web Design', 500, H / 2 - 28);

ctx.font = '13px sans-serif';
ctx.fillStyle = '#5a7d9a';
ctx.fillText('Social Media  ·  Google Ads  ·  Branding', 500, H / 2 - 8);

// Divider
ctx.moveTo(490, H / 2 - 45);
ctx.lineTo(490, H / 2 + 50);
ctx.strokeStyle = 'rgba(33,150,243,0.25)';
ctx.lineWidth = 1;
ctx.stroke();

// Website
ctx.font = 'bold 13px sans-serif';
ctx.fillStyle = '#2196f3';
ctx.fillText('eurasiamarketing.com', 500, H / 2 + 20);

// Phone
ctx.font = '12px sans-serif';
ctx.fillStyle = '#7a9ab8';
ctx.fillText('020 3886 3311', 500, H / 2 + 40);

// --- Save ---
const out = fs.createWriteStream('/Users/Rixon/Desktop/eurasia-facebook-cover.png');
canvas.createPNGStream().pipe(out);
out.on('finish', () => console.log('✅ Saved to Desktop: eurasia-facebook-cover.png'));
