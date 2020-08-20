var size;
var d;
let lapse = 0; // mouse timer

function setup() {
  size = 100 * sqrt(1 / 5);
  createCanvas(600, 600);
  d = 3;
  rectMode(CENTER);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  background(0);

  for (var r = 0; r < 360; r += 0.5) {
    push();
    stroke(
      256 - (cos(r) + 1) * 127,
      256 - ((sin(r) * cos(r)) / 2 + 1) * 127,
      256 - (sin(r) + 1) * 127,
      52
    );
    translate(width / 2, height / 2);
    translate(sin(r + d) * 350, cos(r) * 250);
    rotate((r + d) * 4.5);
    square(0, 0, size * cos((r - d) / 2));
    square(2, 2, size * cos((r - d) / 2));
    pop();
  }
  d += 0.5;
}
function mousePressed() {
  // prevents mouse press from registering twice
  if (millis() - lapse > 500) {
    save("pix.jpg");
    lapse = millis();
  }
}
