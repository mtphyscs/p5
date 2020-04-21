let nCircles = 15;
let nLines = 30;
let thickness = 20;

let colors;
let circleDistrib;
let lineDistrib;

let y0 = 0;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 100);
  strokeWeight(thickness);
  strokeCap(SQUARE);
  noFill();
  //noLoop();

  initColors();
  initCircleDistrib();
  initLineDistrib();
}

function draw() {
  //background(colors[0]);

  // Background lines

  for (let i = 0; i < nLines; i += 2) {
    // going down
    let x = (i + 1 / 2) * thickness;
    let y = -height;
    let j = 0;
    while (y < height) {
      let y1 = y + height / 20;
      stroke(colors[lineDistrib[i][j]]);
      line(
        x,
        y + y0 + noise(i, (j - 1) % 20) * 20 - 10,
        x,
        y1 + y0 + noise(i, j % 20) * 20 - 10
      );
      y = y1;
      j++;
    }
  }

  for (let i = 1; i < nLines; i += 2) {
    // going up
    let x = (i + 1 / 2) * thickness;
    let y = 2 * height;
    let j = 0;
    while (y > 0) {
      let y1 = y - height / 20;
      stroke(colors[lineDistrib[i][j]]);
      line(
        x,
        y - y0 + noise(i, (j - 1) % 20) * 20 - 10,
        x,
        y1 - y0 + noise(i, j % 20) * 20 - 10
      );
      y = y1;
      j++;
    }
  }

  y0 = (y0 + 1.5) % height;

  // Arcs

  let t = frameCount / 200;

  for (let i = 1; i <= nCircles; i++) {
    let sg = i % 2 === 0 ? 1 : -1;
    let r = (2 * i - 1) * thickness;
    if (i > 1) {
      r -= 0.5; // avoids having thin white films between circles
    }
    for (let j = 0; j < 3 * i; j++) {
      stroke(colors[circleDistrib[i][j]]);
      arc(
        width / 2,
        height / 2,
        r,
        r,
        sg * t + TWO_PI * ((j - 1) / (3 * i)),
        sg * t + TWO_PI * (j / (3 * i)) + (noise(i, j) * HALF_PI) / i
      );
    }
  }
}

function initColors() {
  colors = [];
  for (let i = 0; i < 6; i++) {
    colors.push(color((100 * i) / 6, 90, 80));
  }
  colors = ["#FFE13D", "#FE4630", "#D33033", "#68358A", "#1C509E", "#00953C"];
}

function initCircleDistrib() {
  circleDistrib = [];
  for (let i = 0; i <= nCircles; i++) {
    let distrib = [];
    for (let j = 0; j < 3 * i; j++) {
      let choice = floor(random(colors.length));
      while (
        (j > 0 && choice === distrib[j - 1]) ||
        (j === 3 * i - 1 && choice === distrib[0])
      ) {
        choice = floor(random(colors.length));
      }
      distrib.push(choice);
    }
    circleDistrib.push(distrib);
  }
}

function initLineDistrib() {
  lineDistrib = [];
  for (let i = 0; i <= nLines; i++) {
    let distrib = [];
    for (let j = 0; j < 20; j++) {
      let choice = floor(random(colors.length));
      while (
        (j > 0 && choice === distrib[j - 1]) ||
        (i > 0 && choice === lineDistrib[i - 1][j]) ||
        (j === 19 && choice === distrib[0])
      ) {
        choice = floor(random(colors.length));
      }
      distrib.push(choice);
    }
    for (let j = 0; j < 20; j++) {
      distrib.push(distrib[j]);
    }
    lineDistrib.push(distrib);
  }
}
