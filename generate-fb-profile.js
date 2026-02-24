const { createCanvas } = require('canvas');
const fs = require('fs');

// Facebook profile photo — 500x500 (displays as circle)
const SIZE = 500;
const canvas = createCanvas(SIZE, SIZE);
const ctx = canvas.getContext('2d');

const CX = SIZE / 2;
const CY = SIZE / 2;

// --- Background ---
ctx.fillStyle = '#0c2d4a';
ctx.fillRect(0, 0, SIZE, SIZE);

// --- Radial glow centre ---
const glow = ctx.createRadialGradient(CX, CY, 0, CX, CY, 280);
glow.addColorStop(0, 'rgba(33,150,243,0.2)');
glow.addColorStop(1, 'transparent');
ctx.fillStyle = glow;
ctx.fillRect(0, 0, SIZE, SIZE);

// --- Outer ring (will show as border when cropped to circle) ---
ctx.beginPath();
ctx.arc(CX, CY, 245, 0, Math.PI * 2);
ctx.strokeStyle = 'rgba(33,150,243,0.4)';
ctx.lineWidth = 4;
ctx.stroke();

// --- Globe icon ---
const r = 105;
const gx = CX, gy = CY - 40;

// Outer circle
ctx.beginPath();
ctx.arc(gx, gy, r, 0, Math.PI * 2);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 4;
ctx.stroke();

// Horizontal ellipse
ctx.beginPath();
ctx.ellipse(gx, gy, r, r * 0.35, 0, 0, Math.PI * 2);
ctx.strokeStyle = '#38bdf8';
ctx.lineWidth = 2.5;
ctx.stroke();

// Vertical ellipse
ctx.beginPath();
ctx.ellipse(gx, gy, r * 0.35, r, 0, 0, Math.PI * 2);
ctx.strokeStyle = '#38bdf8';
ctx.lineWidth = 2.5;
ctx.stroke();

// Arrow up-right
ctx.beginPath();
ctx.moveTo(gx, gy);
ctx.lineTo(gx + 68, gy - 68);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 4;
ctx.lineCap = 'round';
ctx.stroke();

// Arrowhead
ctx.beginPath();
ctx.moveTo(gx + 44, gy - 72);
ctx.lineTo(gx + 72, gy - 68);
ctx.lineTo(gx + 68, gy - 40);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 4;
ctx.lineJoin = 'round';
ctx.stroke();

// --- "EURASIA" text ---
ctx.font = 'bold 62px sans-serif';
ctx.fillStyle = '#e4edf6';
ctx.textAlign = 'center';
ctx.fillText('EURASIA', CX, 360);

// --- Gradient underline ---
const ul = ctx.createLinearGradient(130, 0, 370, 0);
ul.addColorStop(0, '#2196f3');
ul.addColorStop(1, '#38bdf8');
ctx.fillStyle = ul;
ctx.fillRect(130, 372, 240, 3);

// --- "MARKETING" tagline ---
ctx.font = '22px sans-serif';
ctx.fillStyle = '#7a9ab8';
ctx.fillText('MARKETING', CX, 410);

// --- Save ---
const out = fs.createWriteStream('/Users/Rixon/Desktop/eurasia-facebook-profile.png');
canvas.createPNGStream().pipe(out);
out.on('finish', () => console.log('✅ Saved to Desktop: eurasia-facebook-profile.png'));
