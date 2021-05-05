var font1, rand;
const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var listLength;
function preload(){
  font1 = loadFont('data/UNIVERS-LIGHT-NORMAL.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(72);
  noStroke();
  textFont(font1);
  textAlign(CENTER);
  listLength=letters.length;
  //frameRate(4);
}

function draw() {
  rand = int(random(0, listLength-1)); //random(0,25)
  textSize(random(12, 60));
  background(210, 80); //add more alpha to fade it quicker
  text(letters[rand], random(width), random(height));
}
