var pixelSize;
var pixels;
var myHue;
var widthSD;
var heightSD;
var nSquares;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 100);
  noLoop();
  strokeWeight(1);
  background(198);

  pixelSize = 10;
  myHue = 40;
  widthSD = 80;
  heightSD = 80;
  nSquares = 20;
}

function draw() {
  setInterval(drop, 800);
}

function drop() {
  myHue = (myHue + 5) % 100;
  fill(myHue, 150, 100);
  for (var i = 0; i < nSquares; i++) {
    setInterval(oneSquare, 100);
  }
}

function oneSquare() {
  var x = floor(randomGaussian(width / 2, widthSD));
  var y = floor(randomGaussian(height / 2, heightSD));
  var x1 = x - (x % pixelSize);
  var y1 = y - (y % pixelSize);
  circle(x1, y1, 1.3 * pixelSize);
}
