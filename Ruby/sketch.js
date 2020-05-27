let r;

function setup() {
  createCanvas(w=windowWidth, h=windowHeight);
  blendMode(HARD_LIGHT);
  frameRate(10);
  noFill();
  strokeCap(SQUARE);
  background(0);
  r = min(w, h) * 0.1;
}

function draw() {
  stroke(random(255), random(255), random(255));
  strokeWeight(random(r/2));
  translate(w/2, h/2);
  let R = random(r * 15);
  arc(0, 0, R, R, random(TAU), random(TAU));
}

function mousePressed() {
  background(0);
}