function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  colorMode(RGB);
  angleMode(DEGREES);
  background(33);
  blendMode(ADD);

  stroke(87, 139, 186, 20);
  strokeWeight(1);
}

function draw() {
  let w = width;
  let h = height;
  for (let i = 0; i < 6; i++) {
    for (let x = 0; x < w; x++) {
      let n = frameCount * 0.01;
      let y = 100 + i * 30 + noise(n, x * 0.005, i) * 200;
      point(x, y);
    }
  }
}
