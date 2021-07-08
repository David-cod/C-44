//const Engine=Matter.Engine
//const Bodies=Matter.Bodies
//const World=Matter.World
//var engine,world;
var gamestate="start";
var button,buttonImage,bg,bgImage,basket1Image,basket2Image,chestImage,enemyImage,goldImage,playerImage,swordImage,sword2Image;
var ocean;
function preload(){
buttonImage=loadImage("images/play.gif");
bgImage=loadImage("images/Sea Background.jpg");
basket1Image=loadImage("images/Basket.png");
basket2Image=loadImage("images/Basket2.png");
chestImage=loadImage("images/chest.png");
enemyImage=loadImage("images/Enemy.png");
goldImage=loadImage("images/gold.png");
playerImage=loadImage("images/Player.png");
swordImage=loadImage("images/sword.png");
sword2Image=loadImage("images/sword2.png");
}

function setup(){
 createCanvas(displayWidth,displayHeight);
 //world=engine.world;
 button=createSprite(displayWidth/2,displayHeight/2+100);
 button.addImage("button",buttonImage);
 button.scale=0.3;
 button.debug=true;

 ocean=createSprite(displayWidth/2,displayHeight/2);
 ocean.addImage("ocean",bgImage);

 player=createSprite(diplayWidth/2,displayHeight/2+100);
 player.addImage(playerImage);
}

function draw(){
    background(180);
 //   Engine.update(engine);
    drawSprites();

    if(gamestate==="start"){
       ocean.visible=false;
       player.visible=false;
        textSize(70);
        fill("white")
        stroke("black")
        text("Sea Survivor",displayWidth/2-170,displayHeight/2);
        
        if(mousePressedOver(button)){
        gamestate="play";
        }

    }

    if(gamestate==="play"){
        ocean.visible=true;
        ocean.velocityY=5;

        if(ocean.y>displayHeight){
            ocean.y=displayHeight/2;

        }

        player.visible=true;
        
        button.destroy();

    }

   
}