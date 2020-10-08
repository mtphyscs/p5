const letters = ["M", "T", "P", "H", "Y", "S", "C", "S"]

function setup() {
  createCanvas(200, 200);
  frameRate(10);
}

function draw() {
  background(0);
  for (let y = 0; y <= height; y += 25 ){
    for (let x = 0; x <= width; x += 25){
      push();
      translate(x,y);
      fill(random(0,250));
      text(random(letters), 0, 0);
      pop();
      textFont('Helvetica', 10);
    }
  }
  
}
