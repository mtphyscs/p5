let palette = [
  "#1263ba",
  "#592E25",
  "#008010",
  "#ffdb5b",
  "#008080",
  "#ffffff",
  "#000000",
];
let minS = 1;

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(0);
  stroke(0);
  strokeWeight(1);
  rectRec(0, 0, width, height);
}

function rectRec(x, y, w) {
  let c = int(random(2, 4));
  let sw = w / c;
  let rnd = random(1);
  let p = map(w, minS, width, 0, 1);
  let corner = 5;

  if (rnd < p) {
    for (let i = 0; i < c; i++) {
      for (let j = 0; j < c; j++) {
        if (sw > minS) {
          rectRec(x + i * sw, y + j * sw, sw);
        } else {
          fill(random(palette));
          rect(x + i * sw, y + j * sw, sw, sw, corner);
        }
      }
    }
  } else {
    let off = 20;
    let ww = w - off;
    fill(random(palette));
    rect(x, y, w, w, corner);
    if (ww > minS) {
      rectRec(x + off / 2, y + off / 2, ww, ww);
    }
  }
}
