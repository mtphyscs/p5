var rotation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(200);

  translate(width / 2, height / 2);
  let steps = 230;
  let angleSteps = 360 / steps;

  rotation += 0.1;
  rotate(rotation);

  let innerradius = 200;
  let outerradius = 40 + mouseY;
  let skew = mouseX;

  for (let angle = 0; angle < 360; angle += angleSteps) {
    let xpos = cos(angle * skew) * innerradius;
    let ypos = sin(angle * skew) * innerradius;
    let xpos2 = cos(angle) * outerradius;
    let ypos2 = sin(angle) * outerradius;

    stroke(10);
    strokeWeight(0.5);
    line(xpos, ypos, xpos2, ypos2);
  }
}
