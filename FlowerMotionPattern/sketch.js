
var nFramesInLoop = 20;
var bEnableExport = true;
var nElapsedFrames;
var bRecording;
var frameCounter = 0;
/////

/// CODE VARIABLES:
let n = 0;
let d = 0;

function setup() {
  createCanvas(600, 600);

  ///SETUP CODE:
  angleMode(DEGREES);
}

function draw() {
  ///LOOP CODE:

  background(10, 100, 50, 50);
  push();
  translate(width / 2, height / 2);
  stroke(20, 94, 35);
  noFill();
  beginShape();
  strokeWeight(2);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 80 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  pop();

  // MIDDLE FLOWER
  push();
  translate(width / 2, height / 2);
  stroke(200, 10, 35);
  noFill();
  beginShape();
  strokeWeight(10);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  pop();

  // MIDDLE SMALL FLOWER
  push();
  translate(width / 2, height / 2);
  stroke(255, 255, 255);
  noFill();
  beginShape();
  strokeWeight(8);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 200 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  pop();

  // LEFT TOP
  push();
  translate(width / 4.35, height / 4);
  stroke(26, 148, 49);
  noFill();
  beginShape();
  strokeWeight(8);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 100 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  pop();

  // RIGHT TOP
  push();
  translate(width / 1.3, height / 4);
  stroke(26, 148, 49);
  noFill();
  beginShape();
  strokeWeight(8);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 100 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  pop();

  //  LEFT BOTTOM
  push();
  translate(width / 1.3, height / 1.3);
  stroke(26, 148, 49);
  noFill();
  beginShape();
  strokeWeight(8);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 100 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  pop();

  //  RIGHT BOTTOM
  push();
  translate(width / 4.35, height / 1.3);
  stroke(26, 148, 49);
  noFill();
  beginShape();
  strokeWeight(8);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 100 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  pop();

  noFill();
  stroke(225);
  strokeWeight(3);

  n += 0.005;
  d += 0.005;
}


