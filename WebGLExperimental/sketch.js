function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(170);
  rotateY(frameCount * 0.01);

  for (let j = 0; j < 50; j++) {
    push();
    for (let i = 0; i < 30; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 10,
        sin(frameCount * 0.001 + j) * 10,
        i * 0.1
      );
      rotateZ(frameCount * 0.009);
      push();
      fill(random(100, 200), 0, random(10, 100));
      sphere(20, 7, 10);

      pop();
    }
    pop();
  }
}
