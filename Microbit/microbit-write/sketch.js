function setup() {
  createCanvas(400, 400);
  background(220)
  
  connectMicrobit();
  
  
  for (x=0; x<5; x++) {
    for (y=0; y<5; y++) {
      rect(x*width/5, y*height/5, (x+1)*width/5, (y+1)*height/5)
    }
  }
  
}

function draw() {
}


function mouseClicked() {
  x = int(mouseX/(width/5))
  y = int(mouseY/(height/5))
  writeMicrobit(x+","+y)
  console.log(x+","+y)
}
