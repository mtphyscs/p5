c = 0;

setup = (_) => {
  createCanvas(450, 450);
  strokeWeight(15);
  fill(10, 15);
  stroke(245);
};

draw = (_) => {
  translate(225, 225);
  for (i = 0; i < 10; i++) {
    rotate(cos(c * 0.001) * 10);
    scale(0.8);

    ellipse(0, 0, 900, 900 + sin(c * 0.006) * 120);
  }
  c++;
};
