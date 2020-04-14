let x = 0;
let y = 0;

let x2 = 0;
let y2 = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(200);

  push();
  translate(x, y);
  rotate(frameCount);
  ball();
  pop();

  push();
  translate(width - x2, y2);
  rotate(frameCount * 2);
  ball();
  pop();

  x = (x + 1) % width;
  y = (y + 1) % height;

  x2 = (x2 + 2) % width;
  y2 = (y2 + 2) % height;
}

function ball() {
  fill(255, 50, 10);
  ellipse(0, 0, 125);
  fill(0);
  ellipse(-25, -25, 10);
  ellipse(-10, -25, 10);
  ellipse(-17.5, -10, 10);
}
