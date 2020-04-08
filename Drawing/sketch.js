function setup() {
    createCanvas(400,300);
  }
  
  function draw() {
    background(20,100,0);
    fill('rgba(100%,0%,100%,0.5)');
    circle(370, 30, 20);
    circle(30, 30, 20);
    circle(370,280, 20);
    circle(30,280, 20);
    stroke('rgba(0,255,0,0.25)');
    line(360, 30, 40, 30);
    line(360, 280, 40, 280);
    line(30, 40, 30, 270);
    line(370, 40, 370, 270);
    noStroke();
    fill('rgba(0,5,0, 0.25)');
    rectMode(CENTER);
    rect(200,150,150,150);
  }