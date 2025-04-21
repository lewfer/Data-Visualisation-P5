function preload() {
  countries = loadJSON("https://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?date=2000&format=json&page=1")
}

function setup() {
  createCanvas(1200,600);

  print(countries)
  print(countries[0])
  print(countries[1])
  print(countries[1][0])
  
  print(countries[1][0].country)
  print(countries[1][0].country.value)
  print(countries[1][0].value)
}

function draw() {
}