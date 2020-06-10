let osc, env;
let attack = 0;
let attackLevel = 0;
let decay = 0;
let decayLevel = 0;
let sustain = 0;
let release = 0;
let a, al, d, dl, s, r;
let reset = 0;
let within, done;
let duration = 0;
let time;
let startX = 0;
let startY = 0;
let offsetX = 0;
let offsetY = 0;
let lineX = 0;

function setup() {
  createCanvas(500, 400);
  env = new p5.Env();
  
  osc = new p5.Oscillator();
  osc.start();
  osc.amp(env);
}

function draw() {
  background(220);
  
  time = millis() / 10000;
  doOnce(keyIsPressed);
  let count = time - reset;
    fill(225, 10, 189);
  beginShape();
  vertex(startX, startY);
  vertex((attack*100) + offsetX, al);
  vertex((attack*100) + (decay*100) + offsetX, dl);
  vertex((attack*100) + (decay*100)+ 2 + offsetX, dl);
  vertex((attack*100) + (decay*100)+ 2 + (release*100) + offsetX, offsetY + offsetX);
  endShape();
  fill(0, 50, 255);
	line(lineX, startX, lineX, startY);
	fill(0);
  let susRatio = attackLevel*sustain;
  textSize(16);
  text("Press any key to produce envelope", 100, 90);
   text("attack time: " + Math.round(attack*1000)/1000, 150, 315);
  text("attack level: " + Math.round(attackLevel*100)/100, 280, 315);
  text("decay time: " + Math.round(decay*100)/100, 150, 335);
	text("decay level: " + Math.round(susRatio*100)/100, 280, 335);
  text("sustain ratio: " + Math.round(sustain*100)/100, 150, 355);
  text("release time: " + Math.round(release*100)/100, 150, 375);
  text("total duration: " + Math.round(duration*100)/100 + " seconds", 150, 395);
	//text("seconds", 285, 395);
  if(count*10 > duration) {
   resetValue(); 
  } else if(count*10 <= duration) {
	lineX += 2;	
	}

}

function makeEnvelope() {
 attack = random(1); 
  decay = random(1); 
  release = random(1); 
  sustain = random(1); 
  attackLevel = random(1,2);
	decayLevel = attackLevel*sustain;
  startX = 100;
  startY = 300;
  offsetX = 100;
  offsetY = 200;
	lineX = 100;
	al = map(attackLevel, 1, 2, 200, 100);
	dl = map(decayLevel, 0, 2, 300, 100);   
  env.setADSR(attack, decay, sustain, release);
  env.setRange(attackLevel, 0);
  env.play();
  duration = attack + decay + 0.02 + release;
  reset = time;
}

function resetValue() {
  attack = 0; 
  decay = 0; 
  release = 0;
  sustain = 0; 
  attackLevel = 0;  
	decayLevel = 0;
  startX = 0;
  startY = 0;
  offsetX = 0;
  offsetY = 0;
	al = 0;
	dl = 0;
	lineX = 0;
	duration = 0;
}

function doOnce(bool) {
  if(bool) {
   within = true; 
  } else {
   within = false;
    done = false;    
  }
  if(within && !done) {
   done = true; 
    makeEnvelope();
  } 
}