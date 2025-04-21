function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(220);
  fiveCircles(70)
  fiveCircles(180)
}


function fiveCircles(y) {
  let d = 100

  // Draw 5 circles
  for (let x = 60; x <= 500; x += 110) {
    circle(x, y, d);
  }
}

