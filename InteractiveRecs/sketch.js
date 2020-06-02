function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	background(50,1);
	stroke(0);
	if (mouseIsPressed) {
		fill(mouseX/2,0,mouseY/2);
		ellipse(mouseX, mouseY, 100, 100);
	}else{
		fill(mouseY,mouseX,50);
		rect(mouseX, mouseY, 100, 100);
	}

	print(mouseX)
}