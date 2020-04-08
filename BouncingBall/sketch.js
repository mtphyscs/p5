function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
     if( mouseX > 300) {
    fill(00,10,140);
    stroke(130,10,10);
    }
     if( mouseY > 300) {
    fill(100,10,10);
    strokeWeight(1);
    background(0,40,0);
    }
    ellipse(300, 200, 100, 100);
   
  }