var d = 100

function setup() {
  createCanvas(800, 600);
  print(width, height)
}

function draw() {
  background(204);
  
  for (var x = 50; x <= 550; x += 50) {
    line(x, 50, 600-x, 550);
  }
  
  for (var y = 50; y <= 550; y += 50) {
    line(50, y, 550, 600-y);
  }
}