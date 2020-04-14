var pathPoints = [];

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  //create the path
  pathPoints = circlePoints();

  for (var j = 0; j < 6; j++) {
    pathPoints = complexifyPath(pathPoints);
  }

  //draw the path
  stroke(252, 192, 44, 35);
  for (var i = 0; i < pathPoints.length - 1; i++) {
    var v1 = pathPoints[i];
    var v2 = pathPoints[i + 1];
    line(v1.x, v1.y, v2.x, v2.y);
  }
}

function complexifyPath(pathPoints) {
  //create a new path array from the old one by adding new points inbetween the old points
  var newPath = [];

  for (var i = 0; i < pathPoints.length - 1; i++) {
    var v1 = pathPoints[i];
    var v2 = pathPoints[i + 1];
    var midPoint = p5.Vector.add(v1, v2).mult(0.5);
    var distance = v1.dist(v2);

    //the new point is halfway between the old points, with some gaussian variation
    var standardDeviation = 0.125 * distance;
    var v = createVector(
      randomGaussian(midPoint.x, standardDeviation),
      randomGaussian(midPoint.y, standardDeviation)
    );
    append(newPath, v1);
    append(newPath, v);
  }

  //don't forget the last point!
  append(newPath, pathPoints[pathPoints.length - 1]);
  return newPath;
}

function circlePoints() {
  //two points somewhere on a circle
  var r = height / 2.4;
  //var theta1 = random(TWO_PI);
  var theta1 = randomGaussian(0, PI / 2);
  var theta2 = theta1 + randomGaussian(0, PI / 3);
  var v1 = createVector(
    width / 2 + r * cos(theta1),
    height / 2 + r * sin(theta1)
  );
  var v2 = createVector(
    width / 2 + r * cos(theta2),
    height / 2 + r * sin(theta2)
  );

  return [v1, v2];
}
