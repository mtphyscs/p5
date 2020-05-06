const PHI = (1 + Math.sqrt(5)) / 2; //golden ratio
let balls = [];
let gra;

function setup() {
  createCanvas(600, 600);
  gra = createGraphics(width, height);
  gra.noStroke();
  for (let i = 0; i < 300000; i++) {
    let x = random(width);
    let y = random(height);
    let s = noise(x * 0.01, y * 0.01) * 2;
    gra.fill(70);
    gra.rect(x, y, s, s);
  }
}

function draw() {
  background(100);
  for (let i = balls.length - 1; i >= 0; i--) {
    const b = balls[i];
    b.move();
    b.display();
    if (b.isDead()) balls.splice(i, 1);
  }
  balls.push(new Ball(10, frameCount * PHI * TWO_PI, "#008010"));
  image(gra, 0, 0);
}

///////////////////////

class Ball {
  constructor(diam_, _angle, _col) {
    this.center = createVector(width / 2, height / 2);
    this.dir = createVector(cos(_angle), sin(_angle));
    this.pos = this.center.copy().add(this.dir.mult(1));
    this.diam = diam_;
    this.col = _col;
  }

  move() {
    this.pos.add(this.dir);
    const d = dist(this.pos.x, this.pos.y, this.center.x, this.center.y);
    const s = min(width, height);

    if (d > s * 0.4) this.diam = map(d, s * 0.4, s * 0.45, s * 0.04, 0, true);
    else if (d > s * 0.3)
      this.diam = map(d, s * 0.3, s * 0.4, s * 0.023, s * 0.042, true);
    else this.diam = map(d, 0, s * 0.1, 0, s * 0.021, true);
  }

  display() {
    noStroke();
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.diam, this.diam);
  }

  isDead() {
    if (
      dist(this.pos.x, this.pos.y, this.center.x, this.center.y) >
      min(width, height)
    )
      return true;
    else return false;
  }
}
