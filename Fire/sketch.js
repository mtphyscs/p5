let kMax;
let step;
let n = 100; // number of blobs
let radius = 0; // diameter of the circle
let inter = 0.05; // difference between the sizes of two blobs
let maxNoise = 500;

let noiseProg = (x) => x;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 1);
  angleMode(DEGREES);
  noFill();
  //noLoop();
  kMax = random(0.6, 1.0);
  step = 0.01;
  noStroke();
}

function draw() {
  background(40);
  let t = frameCount / 100;
  for (let i = n; i > 0; i--) {
    let alpha = 1 - noiseProg(i / n);
    fill((alpha / 5 + 0.95) % 1, 1, 1, alpha);
    let size = radius + i * inter;
    let k = kMax * sqrt(i / n);
    let noisiness = maxNoise * noiseProg(i / n);
    blob(size, width / 2, height / 2, k, t - i * step, noisiness);
  }
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
  let angleStep = 600 / 10;
  for (let theta = 0; theta <= 600 + 2 * angleStep; theta += angleStep) {
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
