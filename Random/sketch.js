var col = { r: 0, g: 0, b: 255 };

var spot = {
  x: 100,
  y: 50,
};

function setup() {
  // happens once at the beginning
  createCanvas(400, 300);
  background(100, 80, 230);
}

function draw() {
  // happens over and over
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);

  fill(col.r, col.g, col.b);
  spot.x = random(0, width);
  spot.y = random(0, height);
  circle(spot.x, spot.y, 20);
  noStroke();
  // stroke('rgba(0,255,0,0.25)');
}
