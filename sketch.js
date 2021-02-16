var cat,catImg2,catImg1,catImg4,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg4;
var jungle,jungleImg;
 
function preload() {
    //load the images here
    mouseImg1 = loadImage("images/jerryOne.png");
    mouseImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg4 =  loadAnimation("images/jerryFour.png")
    catImg = loadImage("images/tomOne.png");
    catImg2 = loadAnimation("images/tomTwo.png");
    catImg3 = loadAnimation("images/tomThree.png");
    jungleImg = loadImage("images/garden.png");
    catImg4 = loadImage("images/tomFour.png");
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    jungle = createSprite(400,400);
    jungle.addImage(jungleImg);

    cat = createSprite(500,550,50,50);
    cat.addImage(catImg);
    cat.scale =  0.1;
    mouse = createSprite(60,550,100,100);
    mouse.addImage(mouseImg1); 
    mouse.scale = 0.1;

    }                                

function draw() {

    background("white");

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/width)
    {
       cat.addAnimation("catLastImage",catImg4);
        cat.changeAnimation("catLastImage");
        cat.velocityX = 0;
        mouse.addAnimation("mouseLastImage",mouseImg4);
        mouse.changeAnimation("mouseLastImage");
    }

    keyPressed();
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouse_walk",mouseImg2);
        mouse.changeAnimation("mouse_walk");
    }
    text(mouseX + ','+ mouseY,10,45);
}