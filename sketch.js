var bgImg;

var tom,jerry 




function preload() {
    //load the images here
  bgImg=loadImage("images/garden.png")
  tom1=loadAnimation("images/cat1.png")
  tom2=loadAnimation("images/cat2.png","images/cat3.png")
  tom3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(200,800,40,10)
    jerry=createSprite(300,100,30,20)
  
  tom.addAnimation("catsleeping",tom2)
  tom.scale=0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
