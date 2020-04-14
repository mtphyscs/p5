let xPos = [];
let yPos = [];
let speeds = [];
let gravity = 0.3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(80);
  
  noStroke();
  fill(180,240,220, 80);
  for(let i = 0; i < xPos.length; i++){
  	ellipse(xPos[i], yPos[i], 30);
    
    yPos[i] = yPos[i] + speeds[i]; // move down
    
    // add gravity to speed
    speeds[i] = speeds[i] + gravity; 
    
    // if they go off screen, reset y and speed
    if ( yPos[i] > 415 ){
      yPos[i] = -15;
      speeds[i] = 1;
    }
  }
  
}

function mouseDragged(){
  xPos.push(mouseX);
  yPos.push(mouseY);
  speeds.push(1);
}
