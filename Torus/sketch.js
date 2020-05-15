let angle = 10;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  pointLight(0, 100, 255, -200, 0, 0);
  pointLight(255, 100, 200, 200, 0, 0);
  pointLight(20, 250, 0, 0, 200, 0);
  pointLight(200, 0, 0, 0, -200, 0);
  background(20);
  rotateY(angle);
  rotateX(angle);
  torus();
  translate(mouseX, mouseY);
  specularMaterial(25);
  noStroke();

  angle += 0.03;
}
