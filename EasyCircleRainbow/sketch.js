let S = 0;
let hue = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    frameRate(8);
    background(100);
}

function draw() {
    let X = width / 2;
    let Y = height / 2;

    noFill();
    stroke(hue, 100, 100);
    strokeWeight(30);
    circle(X, Y, S);

    hue += 2;
    S += 10;
}