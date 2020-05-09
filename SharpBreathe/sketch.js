let angle = 0;
let w = 30;
let ma = 30;
let maxD;

function setup() {
  createCanvas(600, 600, WEBGL);
  ortho(-40, 400, 400, -40, 500, 1000);
  ma = atan(40 / sqrt(2000));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0);
  orbitControl();

  rotateX(ma);
  rotateY(QUARTER_PI);

  for (let z = 0; z < height; z += w) {
    for (let x = 10; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 0, 200);
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w - 2, h, w - 2);

      pop();
    }
  }
  angle -= 0.1;
}
