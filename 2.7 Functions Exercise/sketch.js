function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stickPerson(100,100)
  stickPerson(160,150)
  stickPerson(240,150)
}

function stickPerson(x, y) {
  circle(x, y, 20)
  strokeWeight(10)
  line(x,y,x,y+30)
  line(x-20,y+20,x+20,y+20)
  line(x,y+30,x+20,y+50)
  line(x,y+30,x-20,y+50)
}