var n = 150;
var t, dt;
var myscale;
var keyHue = 0.0;

var saveStill = false;
function setup() {
  var side = windowWidth < windowHeight ? windowWidth : windowHeight;
  createCanvas(side, side);
  background(255);
  colorMode(HSB, 100, 1.0, 1.0);
  background(0, 0, 1.0);
  var foo = 20.0;
  myscale = width < height ? width / foo : height / foo;
  t = 0.0;
  dt = 0.02;
}

function draw() {
  t += dt;
  for (var i = 0; i < n; i++) {
    var theta = 2.39996 * i;
    var r = myscale * sqrt(i);
    noStroke();
    var s = i / float(n);
    fill(360 - 60 * s, 1.0 - 2.0 * s, 0.5 + s);

    var d = myscale * (5 + 0.5 * sin(t + r));
    if (saveStill) {
      d = myscale * 5;
    }

    ellipse(0.5 * width + r * sin(theta), 0.5 * height + r * cos(theta), d, d);
  }

  if (saveStill) {
    saveCanvas("vogelTunnel", "png");
    noLoop();
  }
}
