function setup() {
  createCanvas(400, 400);
  background(220)
  
  // Set up function which gets called when the microbit sends some data
  readMicrobit(gotMicrobitData);
}

function draw() {
}

// When the microbit sends some data, draw a circle
function gotMicrobitData(microbitData) {
  console.log(microbitData)
  let d = microbitData.split(",")
  
  // Clear the data if the A button is pressed
  if (d[0]=="A") 
      background(220)
  
  let xMicrobit = parseInt(d[1],10)
  let yMicrobit = parseInt(d[2],10)
  
  let x = map(xMicrobit, -1023, 1023, 0, 400);
  let y = map(yMicrobit, -1023, 1023, 0, 400);
  
  circle(x,y,10)
  
}


