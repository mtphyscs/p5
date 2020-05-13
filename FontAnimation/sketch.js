// The message to be displayed
var sourceText = "m t p h y s c s";
var sourceText = sourceText.toUpperCase();

var r = 200;

function setup() {
  createCanvas(320, 320);
  textAlign(CENTER);
  smooth();
}

function draw() {
  background(175);
  translate(width, height);
  noFill();
  stroke(5);
  textSize(20);

  var arclength = 10;

  for (var i = 0; i < sourceText.length; i++) {
    var currentChar = sourceText.charAt(i);
    var w = textWidth(currentChar);

    // Each box is centered so we move half the width
    arclength += w / 20;
    // Angle in radians is the arclength divided by the radius
    // Starting on the left side of the circle by adding PI
    var theta = PI + (2 * arclength) / r;

    push();
    // Polar to cartesian coordinate conversion
    rotate(sin(frameCount * 0.01));
    translate(r * cos(theta), r * sin(theta));
    // Rotate the box
    rotate(theta + PI / 2); // rotation is offset by 90 degrees
    // Display the character
    fill(random(100, 200), random(200, 250), random(100, 250));
    text(currentChar, 0, 0);
    pop();
    // Move halfway again
    arclength += w / 2;
  }
}
