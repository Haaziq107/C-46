var player,playerImage,backgroundImage,homePage,Start;
var gameState=1;
var start,startImage;
var block,blockImage;
var blockGroup;
var bot,botImage;
var bulletGroup;
var count=0,score=0;
var bot3,bot4,bot5;
var ig1,ig2;

function preload(){
    playerImage=loadImage("bs images/player.png");
    coinsImage=loadImage("bs images/coins.png");
    gemsImage=loadImage("bs images/gems.png");
    homepageImage=loadImage("bs images/homepage.png");
    mapImage=loadImage("bs images/map.png");
    startImage=loadImage("bs images/start.png");
    blockImage=loadImage("bs images/block.png")
    botImage=loadImage("bs images/bot.png")
    bulletImage=loadImage("bs images/bullet.png");
    ufoImage=loadImage("bs images/ufo.jpg");


}
function setup(){
    canvas=createCanvas(1200,800);
    edge=createEdgeSprites();

    start=createSprite(600,400);
    start.addImage(startImage);
    start.scale=0.5;

    player=createSprite(600,700);
    player.addImage(playerImage);
    player.scale=0.7;

    bot=createSprite(600,100);
    bot.addImage(botImage);
    //bot.bounceOff(edge);
    bot.scale=0.5;
    
    
    bot1=createSprite(1100,100);
    bot1.addImage(botImage);
    //bot1.bounceOff(edge);
    bot1.scale=0.5;

    bot2=createSprite(100,100);
    bot2.addImage(botImage);
    //bot2.bounceOff(edge);
    bot2.scale=0.5;

   

    bot3=createSprite(100,100);
    bot3.addImage(ufoImage);
    //bot3.bounceOff(edge);
    bot3.scale=0.5;

    bot4=createSprite(100,100);
    bot4.addImage(ufoImage);
    //bot4.bounceOff(edge);
    bot4.scale=0.5;

    bot5=createSprite(100,100);
    bot5.addImage(ufoImage);
    //bot5.bounceOff(edge);
    bot5.scale=0.5;

    

    ig1=createSprite(0,400,10,800);
    ig1.visible=false;

    ig2=createSprite(1190,400,10,800);
    ig2.visible=false;

    bulletGroup=new Group();
    blockGroup=new Group();

    for(var i=100; i<1200; i=i+200 ){
        block=createSprite(i,400);
        block.addImage(blockImage);
        block.scale=0.5;
        blockGroup.add(block);
        }



}

function draw(){
    background("black")

    if(gameState === 1){
        player.visible=false;
        bot.visible=false;
        bot1.visible=false;
        bot2.visible=false;
        bot3.visible=false;
        bot4.visible=false;
        bot5.visible=false;
        start.visible=true;
        blockGroup.setVisibleEach(false);
        istouching(bot,ig1);
        istouching(bot,ig2);
        istouching(bot2,ig1);
        istouching(bot2,ig2);
        istouching(bot1,ig1);
        istouching(bot1,ig2);
        istouching(bot3,ig1);
        istouching(bot3,ig2);
        istouching(bot4,ig1);
        istouching(bot4,ig2);
        istouching(bot5,ig1);
        istouching(bot5,ig2);
    if(mousePressedOver(start)){
        bot.velocityX=-10;
        bot1.velocityX=-7;
        bot2.velocityX=12;
        gameState=2;
    }
    }
    if(gameState === 2){
        start.visible=false;
        player.visible=true;
        blockGroup.setVisibleEach(true);
        bot.visible=true;
        bot1.visible=true;
        bot2.visible=true;

        //bot3.visible=false;
        //bot4.visible=false;
        //bot5.visible=false;

        

        //bot.bounceOff(edge);
        //bot1.bounceOff(edge);
        //bot2.bounceOff(edge);
        
        istouching(bot,ig1);
        istouching(bot,ig2);
        istouching(bot2,ig1);
        istouching(bot2,ig2);
        istouching(bot1,ig1);
        istouching(bot1,ig2);
        istouching(bot3,ig1);
        istouching(bot3,ig2);
        istouching(bot4,ig1);
        istouching(bot4,ig2);
        istouching(bot5,ig1);
        istouching(bot5,ig2);
        if(keyWentDown("K")){
            Pbullet();
        }
        if(keyDown("LEFT_ARROW")){
            player.x=player.x-10;
        }
        if(keyDown("RIGHT_ARROW")){
            player.x=player.x+10;
        }
        if(player.x<0){
            player.x=1100;
        }
        if(player.x>1200){
            player.x=100;
        }

        for(var i=0;i<bulletGroup.length;i++){
            if(bulletGroup.get(i).isTouching(blockGroup)){
                bulletGroup.get(i).destroy();
            }
        }
        if(bulletGroup.isTouching(bot)){
            bot.destroy();
            count=1;
        }
        if(bulletGroup.isTouching(bot1)){
            bot1.destroy();
            count=1;
        }
        if(bulletGroup.isTouching(bot2)){
            bot2.destroy();
            count=1;
        }
        if(count===1){
            score=score+1;
            count=0;
        }
        console.log(gameState);
        if(score===3){
            bot3.velocityX=-10;
            bot4.velocityX=-7;
            bot5.velocityX=12;
            gameState=3;
        }
    }

    if(gameState===3){
        background("blue");
        bot3.visible=true;
        bot4.visible=true;
        bot5.visible=true;
        

        bot3.bounce(bot4);
        bot3.bounce(bot5);
        bot4.bounce(bot5);

        istouching(bot3,ig1);
        istouching(bot3,ig2);
        istouching(bot4,ig1);
        istouching(bot4,ig2);
        istouching(bot5,ig1);
        istouching(bot5,ig2);

        if(keyWentDown("K")){
            Pbullet();
        }
        if(keyDown("LEFT_ARROW")){
            player.x=player.x-10;
        }
        if(keyDown("RIGHT_ARROW")){
            player.x=player.x+10;
            
        }

        if(player.x<0){
            player.x=1100;
        }
        if(player.x>1200){
            player.x=100;
        }

        if(bulletGroup.isTouching(bot3)){
            bot3.destroy();
            count=1;
        }
        if(bulletGroup.isTouching(bot4)){
            bot4.destroy();
            count=1;
        }
        if(bulletGroup.isTouching(bot5)){
            bot5.destroy();
            count=1;
        }
        for(var i=0;i<bulletGroup.length;i++){
            if(bulletGroup.get(i).isTouching(blockGroup)){
                bulletGroup.get(i).destroy();
            }
        }
    }
    drawSprites();
}

function Pbullet(){
    bullet=createSprite(player.x,player.y);
    bullet.addImage(bulletImage);
    bullet.scale=0.3;
    bullet.velocityY=-8;
    bullet.lifetime=105;
    bulletGroup.add(bullet)
}

function istouching(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2&&ob2.x-ob1.x<ob1.width/2+ob2.width/2){
        ob1.velocityX=ob1.velocityX*(-1)
    }
}