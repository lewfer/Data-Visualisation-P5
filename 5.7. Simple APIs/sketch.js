function preload() {
  data = loadJSON("https://api.exchangerate-api.com/v4/latest/GBP")
}

function setup() {
  print(data)
}

function draw() {
}