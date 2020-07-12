let margin = 40;
let density = 1 / 1000;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 1);
  rectMode(CENTER);
  frameRate(0.5);
}

function draw() {
  background(0.45, 0.19, 41);
  fill(0);
  noStroke();

  let s = width - 2 * margin;

  push();
  translate(margin, margin);
  for (let incr = s; incr >= 1; incr /= 2) {
    let z = incr / 500;
    for (let x = 0; x <= s; x += incr) {
      for (let y = 0; y <= s; y += incr) {
        let noize = noise(x * density, y * density, z + frameCount);
        let digit = floor(noize * 250);
        if (digit % 2 === 0) {
          square(x, y, 1);
        }
      }
    }
  }
  pop();
}
