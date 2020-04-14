let x = 0;
let y = 0;
let w = 20;
let h = 20;

let mtphyscs = 'mtphyscs';
let index = 0;
let letter = mtphyscs[index];

function setup() {
  createCanvas(400, 400);
  background(140);
  angleMode(DEGREES);
}

function draw() {

  let rand = random(1);
  textSize(24);
  textAlign(CENTER, CENTER);
  translate(x, y);
  
	textSize(random(10,30));
  
  if (rand < 0.25) {
    rotate(0);
  } else if (rand >= 0.25 && rand < 0.5) {
    rotate(90);
  } else if (rand >= 0.5 && rand < 0.75) {
    rotate(180);
  } else if (rand >= 0.75) {
    rotate(270);
  }
  text(letter, 0, 0);


  // always be adding w to x
  x += w;




  // reset x if it is bigger than the screen width
  // also jump down a line
  if (x > width) {
    x = 0;
    y += h;
		
    index++;
    if (index > mtphyscs.length - 1) {
      index = 0;
    }

    letter = mtphyscs[index];
  }

  // if y goes greater than the height, reset everything
  if (y > height) {
    background(220);
    x = 0;
    y = 0;


  }
}