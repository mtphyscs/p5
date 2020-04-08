var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 133, 24);
  stroke(200, 0, 40);
  strokeWeight(40);
  fill(1, 1, 200);
  ellipse(x, 200, 100, 100);

  if (x > width) {
    speed = -3;
  }
  x = x + speed;
}
