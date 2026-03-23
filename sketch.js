// Global Variables
let  myInput;
let myButton;

//------- below are setup and draw functions----------------
//------- They ALWAYS have to be there --------------------
function setup() {
  createCanvas(400, 400);
  myInput = createInput("Guess a Number");
  myInput.position(20,150)
  myButton = createButton('guess number');
  myButton.position(20, 175)
  myButton.mousePressed(submitGuess)
}
function draw() {
  background("#003049");
  //cursor(ARROW)
  fill("red");
  rect(20,20,360,100);
  fill("#FDF0D5");
  textSize(24);
  text("High Low Game",100,50);
  textSize(14);
  text("I have thought of a number between 1-100",20,140);
}
//--------------- The Functions below are ones that I made------
function submitGuess(){
  //Go and get what is inside the input box, and save it into
  //a variable called their guess.
  let theirGuess = myInput.value();
  //console.log is a nice way to 'see under the hood'
  console.log(theirGuess)
  
}
