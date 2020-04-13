let h = (Math.sqrt(3) / 2) * 100;
let shapes;
let hex;

function colorFromPalette(n) {
  const palette = ["#87CEFA", "#B0C4DE", "#FFD700", "#EE82EE", "#FF4500"];
  return palette[n % palette.length];
}

function draw() {
  background(colorFromPalette(2));

  drawTriangle();
  drawHex();

  push();
  imageMode(CENTER);

  translate(200, 200);
  scale(0.5);

  translate(h * -2, -300);
  tessellate(3);
  translate(-h, 150);
  tessellate(4);
  translate(-h, 150);
  tessellate(5);
  translate(h, 150);
  tessellate(4);
  translate(h, 150);
  tessellate(3);

  pop();
}

function setup() {
  createCanvas(400, 400);

  h = (Math.sqrt(3) / 2) * 100;

  shapes = createGraphics(100, Math.ceil(h));
  shapes.noStroke();
  shapes.angleMode(DEGREES);

  hex = createGraphics(200, 200);
  hex.angleMode(DEGREES);
}

function drawTriangle() {
  const ctx = shapes.drawingContext;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(50, 0);
  ctx.lineTo(100, h);
  ctx.lineTo(0, h);
  ctx.clip();
  shapes.clear();
  shapes.rotate(frameCount);
  shapes.fill(colorFromPalette(0));
  shapes.rect(20, 20, 50, 50);
  shapes.fill(colorFromPalette(2));
  shapes.triangle(0, 10, 80, 90, 0, 100);
  shapes.fill(colorFromPalette(1));
  shapes.triangle(20, 0, 50, 30, 30, 60);
  shapes.fill(colorFromPalette(4));
  shapes.ellipse(100, 50, 80);
  shapes.fill(colorFromPalette(1));
  shapes.ellipse(-50, -50, 50);
  shapes.fill(colorFromPalette(5));
  shapes.ellipse(-40, -46, 20);
  shapes.fill(colorFromPalette(0));
  shapes.triangle(-60, 0, -30, -40, -30, 0);
  shapes.fill(colorFromPalette(3));
  shapes.rect(-45, 0, 40, 300);
  shapes.rotate(17);
  shapes.fill(colorFromPalette(4));
  shapes.rect(30, 40, 10, 40);
  shapes.rotate(37);
  shapes.fill(colorFromPalette(6));
  shapes.rect(30, 40, 20, 40);
  shapes.rotate(180);
  shapes.fill(colorFromPalette(0));
  shapes.triangle(10, 20, 80, 90, 0, 100);
  shapes.translate(20, 0);
  shapes.rotate(20);
  shapes.fill(colorFromPalette(3));
  shapes.rect(0, 0, 20, 200);
  ctx.restore();
}

function drawHex() {
  hex.push();
  hex.clear();
  hex.translate(100, 100);
  hex.push();
  hex.scale(1 / pixelDensity());
  hex.rotate(30);
  for (let i = 0; i < 3; i++) {
    hex.drawingContext.drawImage(shapes.elt, -50 * pixelDensity(), 0);
    hex.scale(-1, 1);
    hex.rotate(60);
    hex.drawingContext.drawImage(shapes.elt, -50 * pixelDensity(), 0);
    hex.rotate(60);
    hex.scale(-1, 1);
  }
  hex.pop();
  hex.pop();
}

function tessellate(n) {
  push();
  for (let i = 0; i < n; i++) {
    push();
    scale(1 / pixelDensity());
    drawingContext.drawImage(
      hex.elt,
      -100 * pixelDensity(),
      -100 * pixelDensity()
    );
    pop();
    translate(h * 2, 0);
  }
  pop();
}
