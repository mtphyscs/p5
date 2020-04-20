var n = 0;
var c = 4;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB, 100);
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    stroke(i, j, 100);
    point(i, j);
  }
}
  background(0);
}

function draw() {
  var a = n * 13;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;


  fill( n % 256, 255, 255);
  noStroke();
  ellipse(x, y, 4, 4);

  n++;
}
