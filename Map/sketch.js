var r = 0;
var b = 255;


function setup() { // happens once at the beginning
  createCanvas(400,300);
  
}

function draw() { // happens over and over
  r = map(mouseX,0,400,0,255)
  background(r,80,200);
  fill('rgba(100%,0%,100%,0.5)');
  circle(mouseX, mouseY, 20);
  stroke('rgba(0,255,0,0.25)');


}