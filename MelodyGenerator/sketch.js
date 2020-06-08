synth = new Tone.FMSynth().toMaster();
let generateButton;
let playButton;

let selectScale;

let root = 52;
let scale = [
  [0, 2, 4, 5, 7, 9, 11, 12], // 'Major'
  [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24], // 'Major Pentatonic
  [0, 2, 3, 5, 7, 8, 10, 12], // 'Minor'
  [0, 3, 5, 7, 10, 12, 15, 17, 19, 22, 24], // 'Minor Pentatonic'
  [0, 2, 3, 5, 7, 9, 11, 12], // 'Melodic Minor'
  [0, 2, 3, 5, 7, 8, 11, 12], // 'Natural Minor'
  [0, 2, 3, 5, 7, 9, 10, 12], // 'Dorian'
  [0, 1, 3, 5, 7, 8, 10, 12], //'Phrygian' 
  [0, 2, 4, 6, 7, 9, 11, 12], // 'Lydian'
  [0, 2, 4, 5, 7, 9, 10, 12], // 'Mixolydian'
  [0, 1, 3, 5, 6, 8, 10, 12], // 'Locrian'
];

let scaleNames = [
  "Major",
  "Major Pentatonic",
  "Minor",
  "Minor Pentatonic",
  "Melodic Minor",
  "Natural Minor",
  "Dorian",
  "Phrygian",
  "Lydian",
  "Mixolydian",
  "Locrian"
]

let selectedScale = scale[0];

let numNotes = 8;
let melody = [];

let beat;

let n;
let note;

let noteSlider;
let noteText;

let bpmSlider;
let bpmText;
let bpm = 120;

let pt = [];
let x = 8;
let y = 192;

function preload() {
  selectScale = createSelect();
  selectScale.position(330, 500);
  for (let i = 0; i < scaleNames.length; i++) {
    selectScale.option(scaleNames[i]);
  }
  selectedScale = 0;
}


function setup() {
  createCanvas(600, 500);
  selectScale.changed(chooseScale);
  for (let i = 0; i < numNotes; i++) {
    pt.push(new Note(x, y));
    x += width / (numNotes);
  }
  generateMelody();
  setTimeSig(8);
  generateButton = createButton("Generate Melody");
  generateButton.position(150, height);
  generateButton.mousePressed(generateMelody);

  playButton = createButton("play");
  playButton.position(275, height);
  playButton.mousePressed(playMelody);


  bpmSlider = createSlider(60, 300, 120, 1);
  bpmSlider.position(10, height);
  Tone.Transport.bpm.value = bpm;
  bpmText = createP(' ');
  bpmText.position(20, height + 10);

  noteSlider = createSlider(3, 16, 8, 1);
  noteSlider.position(460, height);
  noteText = createP(' ');
  noteText.position(470, height + 10);
}

function draw() {
  background('#6485a1');

  numNotes = noteSlider.value();

  stroke('#ed70ae');
  strokeWeight(6);
  beginShape();
  for (let i = 0; i < pt.length; i++) {
    noFill();
    vertex(pt[i].pos.x, pt[i].pos.y);
  }
  endShape();

  for (let j = 0; j < pt.length; j++) {
    if (j == beat && Tone.Transport.state == "started") {
      pt[j].size = 32;
    } else {
      pt[j].size = 16;
    }
    if (numNotes < pt.length) {
      pt.splice(pt.length - 1, (pt.length - numNotes));
      melody.splice(melody.length - 1, (melody.length - numNotes))
      for (let k = 0; k < pt.length; k++) {
        pt[k].newMelody(k * (width / numNotes) + pt[k].size, pt[k].pos.y);
      }

      setTimeSig(numNotes);
    } else if (numNotes > pt.length) {
      n = int(random(scale[selectedScale].length));
      note = root + scale[selectedScale][n];
      melody.push(note);
      pt.push(new Note(pt.length * (width / numNotes) + pt[j].size, height - (melodyIndex(melody[pt.length]) * (height / scale[selectedScale].length)) - pt[j].size));

      for (let l = 0; l < pt.length; l++) {
        pt[l].newMelody(l * (width / numNotes) + pt[l].size, pt[l].pos.y);
      }
      setTimeSig(numNotes);
    }

    noStroke();
    pt[j].move();
    pt[j].update();
    pt[j].display();
  }


  bpm = bpmSlider.value();
  Tone.Transport.bpm.rampTo(bpm, 0.001);
  bpmText.html("BPM = " + bpm);

  noteText.html("# of Notes = " + numNotes);
}

function chooseScale() {
  selectedScale = scaleNames.indexOf(selectScale.value());
  // console.log(scale[selectedScale]);
  // if (Tone.Transport.state == "started") {
  //   Tone.Transport.stop();
  //   playButton.html('play');
  // }
  generateMelody();
}

function melodyIndex(note) {
  let melIndex = note - root;
  return scale[selectedScale].indexOf(melIndex);

}

function setTimeSig(ts) {
  Tone.Transport.timeSignature = [ts, 4];
}

function playMelody() {
  if (Tone.Transport.state == "started") {
    Tone.Transport.stop();
    playButton.html('play');
  } else {
    Tone.Transport.scheduleRepeat(setMelody, '4n');
    Tone.Transport.start();
    playButton.html('stop');
  }
}

function setMelody() {
  beat = Tone.Transport.position.split(":")[1];
  let midiNote = Tone.Frequency(melody[beat], 'midi');
  synth.triggerAttackRelease(midiNote, '8n');
}

function generateMelody() {
  if (melody.length == numNotes) {
    melody.splice(0, melody.length);
  }
  // if (Tone.Transport.state == "started") {
  //   Tone.Transport.stop();
  //   playButton.html('play');
  // }
  for (let i = 0; i < numNotes; i++) {
    n = int(random(scale[selectedScale].length));
    note = root + scale[selectedScale][n];
    melody.push(note);
    pt[i].newMelody(i * (width / numNotes) + pt[i].size,
      height - (melodyIndex(melody[i]) * (height / scale[selectedScale].length)) - pt[i].size);
  }
  console.log(melody);
}