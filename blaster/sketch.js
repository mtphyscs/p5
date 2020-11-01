let giflength = 180;
let canvas;

setup = () => {
    var p5Canvas = createCanvas(600, 600, WEBGL);
    canvas =p5Canvas.p5Canvas;
    
	rectMode(CENTER);
	angleMode(DEGREES);
	SIZE = width / 50;
	loadTiles();
    
 
}
let t = [];
let H = 50;
let D = 70;
let SIZE;
let fc = 50;
draw = () => {
    capturer.start();
	background(random(250,255),0,0);
	rotateX(110);
	rotateZ(fc / 2)

	for (let i = 0; i < t.length; i++) {
		t[i].move();
		t[i].display();
	}
	fc++;

    if(frameCount < giflength){
        capturer.capture(canvas)
    } else if (frameCount === giflength){
        capturer.stop()
        capturer.save()
    }
}

class Tile {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	display() {
		stroke(2);
		let c = map((this.d + fc) % 400, 0, 400, 0, 360);
		fill((this.d + fc) % 250,250,250);
		push();
		let x = -width / 4 + this.x * (SIZE)
		let y = -width / 4 + this.y * (SIZE)

		translate(x, y, this.z);
		rotateX(this.z + fc)
		rotateY(this.z + fc);
		box(SIZE, SIZE, SIZE / 5);

		pop();

	}
	move() {
		this.d = dist(0, 0, -width / 4 + this.x * (SIZE), -width / 4 + this.y * (SIZE));
		this.z += sin(this.d + fc)
	}
}

loadTiles = () => {
	let count = width / 2 / SIZE;
	for (let i = 0; i <= count; i++) {
		for (let j = 0; j <= count; j++) {
			t.push(new Tile(i, j, i));
		}
	}
}


pad = (a, b) =>
	(1e15 + a + "").slice(-b)