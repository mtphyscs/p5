let particles = [];
let squiggliness = 1 / 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 200);
  noStroke();

  background(10);
  updateParticles();
}

function draw() {
  for (let p of particles) {
    p.draw();
    p.move();
  }
}

function updateParticles() {
  particles = [];
  let r = 1;
  let n = 600;
  for (let i = 0; i < n; i++) {
    let theta = map(i, 0, n, -PI, PI);
    let x_ = width / 2 + r * cos(theta);
    let y_ = height / 2 + r * sin(theta);
    let s_ = 1;
    let c_ = color(random(10, 100), random(90, 160), random(160, 200), 100);
    particles.push(new Particle(x_, y_, s_, c_));
  }
}

function Particle(x_, y_, s_, c_) {
  this.x = x_;
  this.y = y_;
  this.size = s_;
  this.c = c_;

  this.alpha = 100;
  this.dist = 1;

  this.move = function () {
    let theta = atan2(this.y - height / 2, this.x - width / 2);
    theta += noise(this.x * squiggliness, this.y * squiggliness);
    let v = p5.Vector.fromAngle(theta, this.dist);
    this.x += v.x;
    this.y += v.y;
    this.alpha *= 0.999;
  };

  this.draw = function () {
    this.c.setAlpha(this.alpha);
    fill(this.c);
    circle(this.x, this.y, this.size);
    this.c.setAlpha(100);
  };
}
