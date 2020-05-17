function drawfern(lim) {
  var x = 0;
  var y = 0;

  for (let i = 0; i < lim; i++) {
    let tmpx, tmpy;
    let rd = Math.random();

    if (rd <= 0.01) {
      tmpx = 0;
      tmpy = 0.16 * y;
    } else if (rd <= 0.08) {
      tmpx = 0.2 * x - 0.26 * y;
      tmpy = 0.23 * x + 0.22 * y + 1.6;
    } else if (rd <= 0.15) {
      tmpx = -0.15 * x + 0.28 * y;
      tmpy = 0.26 * x + 0.24 * y + 0.44;
    } else {
      tmpx = 0.85 * x + 0.04 * y;
      tmpy = -0.04 * x + 0.85 * y + 1.6;
    }

    x = tmpx;
    y = tmpy;

    //console.log("x: ", x, "y: ", y)

    let dx = map(x, -2, 1, 0, windowWidth);
    let dy = map(y, 0, 4, windowHeight, 0);

    //console.log("dx: ", dx, "dy: ", dy)
    let r = map(dy, 0, 255, 0, windowHeight / 10);
    let g = 50;
    let b = 20;

    stroke(r, g, b);
    strokeWeight(2);
    point(dx, dy);
  }
}

function setup() {
  createCanvas(400, 400);
  background(0, 90, 130);
}

function draw() {
  drawfern(1000);
}
