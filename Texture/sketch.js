let max;
let step;
let n = 40; // number of blobs
let radius = 0; // diameter of the circle
let inter = 0.5; // difference between the sizes of two blobs
let maxNoise = 500;

let noiseProg = (x) => x;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 1);
  angleMode(DEGREES);
  noFill();
  //noLoop();
  max = 1;
  step = 0.01;
  strokeWeight(2);
}

function draw() {
  background(0);
  let t = frameCount / 100;
  max = noise(t / 2);

  for (let i = n; i >= 0; i--) {
    let alpha = 1 - noiseProg(i / n);
    if (i % 2 === 0) {
      fill(1);
    } else {
      fill(0);
    }
    let size = radius + i * inter;
    let k = max * sqrt(i / n);
    let noisiness = maxNoise * noiseProg(i / n);
    blob(size, width / 2, height / 2, k, t + i * step, noisiness);
  }
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
  let angleStep = 360 / 50;
  for (let theta = 0; theta <= 360 + angleStep * 2; theta += angleStep) {
    let r1, r2;

    r1 = cos(theta) + 1;
    r2 = sin(theta) + 1;
    let r = size + noise(k * r1, k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}
