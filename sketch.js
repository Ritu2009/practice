var box; 
var boxImage;

function preload(){ //load
boxImage= loadImage("booklogo.jpg");

}

function setup(){ //create
  createCanvas(600,200);

  createBoxes(); //call a function
}

function draw(){
  background("purple");
  
  //rect(x-axis, yaxis, breadth, length)
drawSprites();
}

function createBoxes(){
  for(var c=0; c<9; c++){
    box= createSprite(60+(54*c), 100, 50,50);
    box.addImage(boxImage);
    box.scale=0.1
  }
}