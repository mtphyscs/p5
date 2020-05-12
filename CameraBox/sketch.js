let angle = 0;
let cam;

function setup() {
  createCanvas(400, 400, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(320, 240);
  cam.hide();
}

function draw() {
  background(0);
  push();
  rotateY(angle);
  rotateX(angle);
  texture(cam);
  box(150);
  translate(mouseX, mouseY);
  noStroke();
  pop();

  angle += 0.01;
}
