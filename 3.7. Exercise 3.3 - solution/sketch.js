// Define the position and dimensions of the palette
var xPalette = 700;
var wPalette = 100;
var hPalette = 50;

// Define the current drawing attributes
var currentPenColour;
var currentPenWeight;

// This standard P5 function is called when the program starts
function setup() {
  createCanvas(800, 600);
  
  // Set our starting pen colour and weight
  currentPenColour = color(0, 0, 0, 255);
  currentPenWeight = 5;
}


// This standard P5 is called once per frame
function draw() {
  // Set up colour palette
  addPaletteColour(color(0, 0, 0), 50);
  addPaletteColour(color(255, 0, 0), 100);
  addPaletteColour(color(0, 255, 0), 150);
  addPaletteColour(color(0, 0, 255), 200);

  // Set up pen sizes
  addPen(1, 300);
  addPen(5, 350);
  addPen(10, 400);

  // Draw when mouse is pressed
  if (mouseIsPressed) {
    strokeWeight(currentPenWeight)
    if (mouseButton == RIGHT) {
      stroke(255) // erase
    } else {
      stroke(currentPenColour) // draw
    }
    line(mouseX, mouseY, pmouseX, pmouseY); // draw line from mouse position to previous mouse position
  }
}

// This standard P5 function is called when a key is pressed
function keyPressed() {
  if (keyCode == UP_ARROW) {
    print("UP")
  } else if (keyCode == DOWN_ARROW) {
    print("DOWN")
  } else if (key == '+') {
    currentPenWeight++; // make pen bigger
    print(currentPenWeight);
  } else if (key == '-') {
    if (currentPenWeight > 1) {
      currentPenWeight--; // make pen smaller
      print(currentPenWeight);
    }
  }
}

// This standard P5 function is called when the screen is touched
function touchStarted() {
  // Draw a line, triangle or quad if 2, 3 or 4 points pressed
  strokeWeight(currentPenWeight)
  if (touches.length == 2)
    line(touches[0].x, touches[0].y, touches[1].x, touches[1].y);
  else if (touches.length == 3)
    triangle(touches[0].x, touches[0].y, touches[1].x, touches[1].y, touches[2].x, touches[2].y);
  else if (touches.length == 4)
    quad(touches[0].x, touches[0].y, touches[1].x, touches[1].y, touches[2].x, touches[2].y, touches[3].x, touches[3].y);
}


// 
function addPaletteColour(colour, y) {
  // If we are in the box
  if ((mouseX > xPalette) && (mouseX < xPalette + wPalette) && (mouseY > y) && (mouseY < y + hPalette)) {
    // If mouse pressed in box, change the current pen colour
    if (mouseIsPressed && mouseButton == LEFT) {
      currentPenColour = colour;
    }

    // No stroke
    strokeWeight(0)
  } else {
    // Thick stroke 
    strokeWeight(5)
  }

  // Draw the coloured box
  fill(colour);
  stroke(255)
  rect(xPalette, y, wPalette, hPalette);
}

function addPen(thickness, y) {
  // If we are in the box
  if ((mouseX > xPalette) && (mouseX < xPalette + wPalette) && (mouseY > y) && (mouseY < y + hPalette)) {
    // If mouse pressed in box, change the current pen thickness
    if (mouseIsPressed && mouseButton == LEFT) {
      currentPenWeight = thickness;
    }

    // No stroke
    strokeWeight(0)
  } else {
    // Thick stroke 
    strokeWeight(5)
  }

  // Draw the pen
  fill(255);
  noStroke();
  rect(xPalette, y, wPalette, hPalette); // background for pen
  strokeWeight(thickness);
  stroke(0); //black
  line(xPalette, y + hPalette / 2, xPalette + wPalette, y + hPalette / 2); // the pen
}
