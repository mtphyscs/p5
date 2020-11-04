let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
 saveFrames("tirsicom", "png", 5, 25);
}

function draw() {
  background(96);
  
  pointLight(0,200,0,0,-390,0);
  pointLight(0,20,50,0,0,-390);
  pointLight(0,50,25,0,0,390);
  rotateY(angle);
   plane(150, 150);
  noStroke();
  ambientMaterial(250,250,250);
   angle += 0.05;

 
  
}