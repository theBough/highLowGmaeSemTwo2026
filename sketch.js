// Global Variables
let  myInput;
let myButton;

function setup() {
  createCanvas(400, 400);
  myInput = createInput("Guess a Number");
  myInput.position(20,150)
  myButton = createButton('guess number');
  myButton.position(20, 175)
}

function draw() {
  background("#003049");
  fill("red");
  rect(20,20,360,100);
  fill("#FDF0D5");
  textSize(24);
  text("High Low Game",100,50);
  textSize(14);
  text("I have thought of a number between 1-100",20,140);
}
