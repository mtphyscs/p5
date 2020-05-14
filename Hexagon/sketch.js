function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

    const dim = Math.min(width, height);


    background(170);

    noFill();
    stroke(0);
    strokeJoin(MITER);

    const time = millis() / 1000;

    const rings = 10;
    const sides = 6;
    const maxRadius = dim * 0.4;
    for (let i = 0; i < rings; i++) {

        const t = (i + 1) / rings;

        // Scale it by max radius
        const radius = t * maxRadius;

        // Min and max line thickness
        const maxThickness = maxRadius / rings * 1;
        const minThickness = maxRadius / rings * 0.001;


        const pingPong = sin(t * 9.0 + time) * 0.3 + 0.5;

        const thickness = lerp(minThickness, maxThickness, pingPong);


        strokeWeight(thickness);
        polygon(width / 2, height / 2, radius, sides, PI / 2);
    }
}

function polygon(x, y, radius, sides = 3, angle = 0) {
    beginShape();
    for (let i = 0; i < sides; i++) {
        const a = angle + TWO_PI * (i / sides);
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
  