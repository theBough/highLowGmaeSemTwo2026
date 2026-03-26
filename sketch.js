// Global Variables
let  myInput;
let myButton;
let randomNumber;
let myImage;
let feedback = "";//This will hold "too high" or "too Low"

//------- below are setup and draw functions----------------
//------- They ALWAYS have to be there --------------------
function setup() {
  createCanvas(400, 400);
  myInput = createInput("Guess a Number");
  myInput.position(20,150)
  myButton = createButton('guess number');
  myButton.position(20, 175)
  myButton.mousePressed(submitGuess)
  randomNumber = Math.ceil(Math.random()*100);
  console.log(randomNumber);
  myImage = loadImage("bBarker.png")
}
function draw() {
  background("#003049");
  //cursor(ARROW)
  fill("red");
  rect(20,20,360,100);
  fill("#FDF0D5");
  textSize(24);
  text("High Low Game",100,50);
  image(myImage,200,150,120,150)
  textSize(14);
  text("I have thought of a number between 1-100",20,140);
  textSize(12)
  text(feedback,20,225)
  
}
//--------------- The Functions below are ones that I made------
function submitGuess(){
  //Go and get what is inside the input box, and save it into
  //a variable called their guess.
  let theirGuess = myInput.value();
  
  if(theirGuess == randomNumber){
    feedback = "YOU GOT !!!!!"
    ////MAYBE CHANGE PICTURE HERE.
    return 0;//the function would end here. 
  }
  
  let isClose = Math.abs(randomNumber -  theirGuess)
  console.log(isClose)
  //the scope of this variable is LOCAL to this function.
  if(isClose < 6 ){
    feedback += " >>You are close.🤏\n"
  }  
  
  if(theirGuess > randomNumber){
    //true block of the if block
    feedback +=  theirGuess + " >> Too High \n"
  }else if(theirGuess < randomNumber){
    feedback += theirGuess + " >> Too Low \n"
  }
}
