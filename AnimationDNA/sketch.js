var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup() {
  createCanvas(500, 500);
  noStroke();

  phase = 0;
  speed = 0.02;
  maxCircleSize = 20;
  numRows = 12;
  numCols = 20;
  numStrands = 2;

  colorA = color(20, 17, 174);
  colorB = color(226, 12, 1);
}

function draw() {
  background(200);
  phase = frameCount * speed;

  for (var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

    for (var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, 50, width - 50);

      for (var row = 0; row < numRows; row += 1) {
        var y = height / 2 + row * 10 + sin(strandPhase + colOffset) * 50;
        var sizeOffset =
          (cos(strandPhase - row / numRows + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;

        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}
