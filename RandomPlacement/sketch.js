let pallete;
let points1 = [];
let points2 = [];

function setup() {
  createCanvas(600, 600);
  noLoop();
  rectMode(CENTER);
  pallete = ["#090180", "#000F10", "#4F08FF", "#276108", "#800080"];
}

function draw() {
  points1.length = 0;
  points2.length = 0;
  addPoints();

  background(255);

  for (let i = 0; i < points1.length; i++) {
    let p = points1[i];
    let col = random(pallete);
    let s = p.z * 0.1;

    noFill();
    stroke(0);
    rect(p.x, p.y, p.z, p.z);
    fill(0);
    ellipse(p.x, p.y, s, s);
  }

  for (let i = 0; i < points2.length; i++) {
    let p = points2[i];
    let col = random(pallete);

    noStroke();
    fill(0, 140);
    rect(p.x + 5, p.y + 5, p.z, p.z);

    noStroke();
    fill(col);
    rect(p.x, p.y, p.z, p.z);
  }

  noiseSeed(int(random(10000)));
}

function addPoints() {
  let c = 40;
  let w = (width * 2) / c;
  let t = random(100);

  for (let i = 0; i < c; i++) {
    for (let j = 0; j < c; j++) {
      let x = i * w - width * 0.5;
      let y = j * w - height * 0.5;
      let ns = 0.06;
      let max = 140;
      let offsetX = map(noise(i * ns, j * ns, t), 0, 1, -max, max);
      let offsetY = map(noise(i * ns, j * ns), 0, 1, -max, max);
      let ww = w * 0.85;

      points1.push(createVector(x + w / 2, y + w / 2, ww));
      points2.push(createVector(x + w / 2 + offsetX, y + w / 2 + offsetY, ww));
    }
  }
}

function keyPressed() {
  redraw();
}
