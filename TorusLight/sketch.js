let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  pointLight(0, 0, 255, -200, 0, 0);
  pointLight(255, 0, 0, 200, 0, 0);
  background(175);
  rectMode(CENTER);
  rotateY(angle);
  rotateX(angle);
  torus(100, 20);
  translate(mouseX, mouseY);
  specularMaterial(25);
  noStroke();

  angle += 0.03;
}
