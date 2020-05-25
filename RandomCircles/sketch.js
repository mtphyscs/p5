function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(0, 0, 255);
  strokeWeight(random(1, 15));
  noFill();
  let size = 100;
  for (let c = 0; c < 15; c++) {
    for (let r = 0; r < 15; r++) {
      let x = size * c;
      let y = size * r;
      stroke(random(0, 255), 0, 0);
      circle(x, y, size);
      stroke(0, random(0, 255), 0);
      circle(x + size / 3, y + size / 2, size);
    }
  }
}
