function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();
  f = 0;
  R = 100;
}

function draw() {
  clear();
  f++;
  rotateX(cos(f / R));
  rotateZ(f / 10);
  for (i = 0; i < TAU; i += PI / 18) {
    for (j = 0; j < PI; j += PI / 36) {
      push();
      translate(
        sin(j) * cos(i) * R,
        sin(j) * sin(i) * R,
        cos(j) * R + cos(radians(f)) * R + R
      );
      sphere(noise(sin(i - j), radians(f)) * 10);
      pop();
    }
  }
}
