function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255, 255, 255);
}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let cX = windowWidth / 2;
  let cY = windowWidth / 4;

  fill(255, 100, 33);
  stroke(r, g, b);
  strokeWeight(5);

  line(cX, cY, mouseX, mouseY);
}
