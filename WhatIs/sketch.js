var sourceText =
  "mtphyscs is an abstract idea that was created to make tangible what comes to the mind from the higher planes of existence. mtphyscs is a theory with no basis in reality that deals with concepts such as being, knowing, substance, existence, time and space, cause and effect, and possibility.";
var sourceText = sourceText.toUpperCase();
var words = sourceText.split(" ");

function setup() {
  createCanvas(450, 450);
  background(0);

  let gridSize = 30;
  let spacing = windowWidth / gridSize;

  translate(0, height);

  for (i = gridSize / 2; i > 0; i--) {
    push();
    translate(i * spacing, 0);
    scale(2 / i);
    rotate(-PI / 2);
    signage_top(1);
    pop();
  }

  translate(width, -height);
  for (i = gridSize / 1; i > 0; i--) {
    push();
    translate(-i * spacing, 0);
    scale(2 / i);
    rotate(PI / 2);
    signage_top(1);
    pop();
  }
}

function signage_top(grid) {
  for (var i = 0; i < grid; i++) {
    var currentOffset = 0;
    var row = i * 70;

    for (var j = 0; j < words.length; j++) {
      //text preference
      var ts = random(30, 50);
      textSize(ts);
      textAlign(LEFT, TOP);

      //signage bg
      var r = random(220, 255);
      var g = random(220, 255);
      var b = random(220, 255);

      //var wordWidth = textWidth(randomItem);
      var randomItem = words[Math.floor(Math.random() * words.length)];
      //document.body.innerHTML = randomItem;
      var wordWidth = textWidth(randomItem);
      fill(random(0, 1) * r, random(0, 1) * g, random(0, 1) * b);
      stroke(0);
      strokeWeight(2);
      rect(currentOffset * 1.2, row, wordWidth * 1.2, ts * 1.4);

      //signage words
      stroke(255, 100);
      strokeWeight(random(4));
      fill(0);
      text(randomItem, currentOffset * 1.2 + wordWidth * 0.09, row + ts * 0.1);

      currentOffset += wordWidth + 5;
    }
  }
}
