var ellipseX;
var ellipseY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 250, 250);
  noStroke();
}

function draw() {
  ellipseX = random(0, width);
  ellipseY = random(0, height);

  if (ellipseX > width / 2 && ellipseY < height / 2) {
    fill(215, 35, 30);
    ellipse(ellipseX, ellipseY, random(10, 15));
    noStroke();
  }

  if (ellipseX < width / 2 && ellipseY > height / 2) {
    fill(45, 150, 180);
    ellipse(ellipseX, ellipseY, random(10, 15));
    noStroke();
  }

  if (ellipseX < width / 2 && ellipseY < height / 2) {
    fill(45, 150, 0);
    ellipse(ellipseX, ellipseY, random(10, 15));
    noStroke();
  }

  if (
    ellipseX > width / 2 &&
    ellipseX < width &&
    ellipseY > height / 2 &&
    ellipseY < height
  ) {
    fill(250, 180, 0);
    ellipse(ellipseX, ellipseY, random(10, 15));
    noStroke();
  }

  if (
    ellipseX < width / 4 ||
    ellipseX > (3 * width) / 4 ||
    ellipseY < height / 4 ||
    ellipseY > (3 * height) / 4
  ) {
    fill(0, 0, 0);
    ellipse(ellipseX, ellipseY, random(0, 25));
  }
}
