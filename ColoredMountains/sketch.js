let pallete = [
  "#4D0F83",
  "#B1C0B1",
  "#271DD3",
  "#08B623",
  "#3C494F",
  "#D51311",
  "#05020C",
];
let sep = 3;
let rs;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 300, 100, 100, 100);
  rs = random(100);
}

function draw() {
  background(200);
  randomSeed(rs);

  drawingContext.shadowColor = color(0, 0, 0);
  drawingContext.shadowBlur = 30;
  drawingContext.shadowOffsetY = 120;
  drawingContext.shadowOffsetX = 30;

  for (let y = -height / 2; y < height; y += height / 10) {
    let c1 = random(pallete);
    let c2 = random(pallete);
    let c3 = random(pallete);
    while (c1 == c2 || c2 == c3 || c3 == c1) {
      c1 = random(pallete);
      c2 = random(pallete);
      c3 = random(pallete);
    }
    let gradient = drawingContext.createLinearGradient(0, 0, width, 0);

    gradient.addColorStop(0.0, c1);
    gradient.addColorStop(random(0.3, 0.7), c2);
    gradient.addColorStop(1.0, c3);

    drawingContext.fillStyle = gradient;
    noStroke();
    beginShape();
    for (let x = -100; x <= width + 100; x += 30) {
      let yy =
        y +
        map(
          noise(rs + y, x / 200, frameCount / 300),
          0,
          1,
          -height / sep,
          height / sep
        );
      vertex(x, yy);
    }
    vertex(width + 300, height);
    vertex(0 - 100, height);
    endShape();
  }
}
