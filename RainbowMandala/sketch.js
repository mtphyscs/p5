let nCircles = 50;
let nWaves = 12;
let inter = 10;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 100);
  noFill();
}

function draw() {
  background(8);

  let size = inter;
  for (let i = 1; i <= nCircles; i++) {
    strokeWeight(inter / 9);
    stroke(2);
    circle(width / 2, height / 2, size);

    strokeWeight(inter / 3);
    let delta = 1 / (3 * pow(i, 1 / 4));

    let theta = cos(frameCount / 25 - i / 4) / 4;
    for (let j = 0; j < nWaves; j++) {
      stroke((theta / TWO_PI) * 100, 100, 100);
      arc(width / 2, height / 2, size, size, theta - delta, theta + delta);
      theta += TWO_PI / nWaves;
    }

    size += inter;
  }
}
