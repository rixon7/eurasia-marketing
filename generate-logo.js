const { createCanvas } = require('canvas');
const fs = require('fs');

const SIZE = 250;
const canvas = createCanvas(SIZE, SIZE);
const ctx = canvas.getContext('2d');

// --- Background ---
ctx.fillStyle = '#0c2d4a';
ctx.fillRect(0, 0, SIZE, SIZE);

// --- Subtle radial glow ---
const glow = ctx.createRadialGradient(125, 125, 0, 125, 125, 160);
glow.addColorStop(0, 'rgba(33,150,243,0.15)');
glow.addColorStop(1, 'transparent');
ctx.fillStyle = glow;
ctx.fillRect(0, 0, SIZE, SIZE);

// --- Globe icon (centred, top half) ---
const cx = 125, cy = 95, r = 42;

// Outer circle
ctx.beginPath();
ctx.arc(cx, cy, r, 0, Math.PI * 2);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 2.5;
ctx.stroke();

// Horizontal ellipse
ctx.beginPath();
ctx.ellipse(cx, cy, r, r * 0.35, 0, 0, Math.PI * 2);
ctx.strokeStyle = '#38bdf8';
ctx.lineWidth = 1.5;
ctx.stroke();

// Vertical ellipse
ctx.beginPath();
ctx.ellipse(cx, cy, r * 0.35, r, 0, 0, Math.PI * 2);
ctx.strokeStyle = '#38bdf8';
ctx.lineWidth = 1.5;
ctx.stroke();

// Arrow pointing up-right
ctx.beginPath();
ctx.moveTo(cx, cy);
ctx.lineTo(cx + 28, cy - 28);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 2.5;
ctx.lineCap = 'round';
ctx.stroke();

// Arrowhead
ctx.beginPath();
ctx.moveTo(cx + 18, cy - 30);
ctx.lineTo(cx + 30, cy - 28);
ctx.lineTo(cx + 28, cy - 16);
ctx.strokeStyle = '#2196f3';
ctx.lineWidth = 2.5;
ctx.lineJoin = 'round';
ctx.stroke();

// --- "EURASIA" text ---
ctx.font = 'bold 28px sans-serif';
ctx.fillStyle = '#e4edf6';
ctx.textAlign = 'center';
ctx.fillText('EURASIA', cx, 165);

// --- Gradient underline ---
const ul = ctx.createLinearGradient(70, 0, 180, 0);
ul.addColorStop(0, '#2196f3');
ul.addColorStop(1, '#38bdf8');
ctx.fillStyle = ul;
ctx.fillRect(70, 172, 110, 2);

// --- "MARKETING" tagline ---
ctx.font = '11px sans-serif';
ctx.fillStyle = '#7a9ab8';
ctx.letterSpacing = '3px';
ctx.fillText('MARKETING', cx, 193);

// --- Border ---
ctx.strokeStyle = 'rgba(33,150,243,0.3)';
ctx.lineWidth = 2;
ctx.strokeRect(1, 1, SIZE - 2, SIZE - 2);

// --- Save ---
const out = fs.createWriteStream('/Users/Rixon/Desktop/eurasia-logo-gmb.png');
canvas.createPNGStream().pipe(out);
out.on('finish', () => console.log('✅ Saved to Desktop: eurasia-logo-gmb.png'));
