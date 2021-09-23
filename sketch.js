var PLAY=1;
var END=0;                  //Creating GameStates 
var gameState=1;
var gameState = "menu";
var life = 3;

var HomeMenubackground,HomeMenubackgroundImage;
var boy,boyImage,girl,girlImage;
var AnimatedJack;
var Jack,JackImage,Jack_running,Jack_Jump,Jack_JumpImage;          //Declaring Variables
var AnimatedAlice;
var Alice,AliceImage,Alice_running;
var background1,background1Image, background2,background2Image,background3,background2Image,
background4,background4Image,background5,background5Image,background6,background6Image;   
var ground,ground_img;  
var invisibleGround;
var cloudsGroup, cloudImage;
var clickingSound;
var energyDrink , energyDrinkGroup,energyDrinkImg;  
var stone, stoneImg, stoneGroup;
var obstacleGroup;
var spikes,spikesImg;
var Zombie;
var Zombie_running;
var zombie2,zombie2_Running;
var life1, life2, life3;
var score;
var fireball,fireball_Img,fireballGroup;
var platformGroup;
var invisibleWall;
var invisibleWall2;
var EndMenu,EndMenu_Img;
var restart,restart_Img;
var hitsound;
var energyDrinkSound;
var EndSound;

function preload(){ // loading images,animations & sound
 
HomeMenubackgroundImage= loadImage("Images/GameMenu.png");
boyImage= loadImage("Images/Boy.png");
girlImage= loadImage("Images/Girl1.png");
AliceImage= loadImage("Images/Girl2.png");
JackImage= loadImage("Images/Boy1.png");
background1Image=loadImage("Background/background1.png");
background2Image=loadImage("Background/background2.png");
background3Image=loadImage("Background/background3.png");
background4Image=loadImage("Background/background4.png");
background5Image=loadImage("Background/background5.png");
background6Image=loadImage("Background/background6.png");
ground_img=loadImage("Background/Platform.png");
Alice_running= loadAnimation("Images/Running1.png","Images/Running2.png","Images/Running3.png",
"Images/Running4.png","Images/Running5.png","Images/Running6.png");
Jack_running= loadAnimation("Images/BoyRunning1.png","Images/BoyRunning2.png","Images/BoyRunning3.png",
"Images/BoyRunning4.png","Images/BoyRunning5.png","Images/BoyRunning6.png");
Jack_JumpImage=loadAnimation("Images/Jump1.png","Images/Jump2.png","Images/Jump3.png");
cloudImage = loadImage("Obstacle/cloud.png");
clickingSound=loadSound("Sounds/mouse click sound.mp3");
energyDrinkSound=loadSound("Sounds/Life+.mp3");
hitsound=loadSound("Sounds/Hit.mp3");
energyDrinkImg = loadImage("Images/Energy Drink.png");
lifeImg = loadImage("Obstacle/Heart1.png");
stoneImg=loadImage("Obstacle/Obstacle5.png");
spikesImg=loadImage("Obstacle/Obstacle.6.png");
Zombie_running= loadAnimation("Images/Zombie1.png","Images/Zombie2.png","Images/Zombie3.png",
"Images/Zombie4.png","Images/Zombie5.png","Images/Zombie6.png","Images/Zombie7.png");
zombie2_Running= loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png",
"Images/5.png","Images/6.png");
fireball_Img=loadAnimation("Obstacle/fire1.png","Obstacle/fire2.png","Obstacle/fire3.png","Obstacle/fire4.png",)
EndMenu_Img=loadImage("Images/EndMenu.png");
restart_Img=loadImage("Images/restart.png");
EndSound=loadSound("Sounds/End.mp3");
}


function setup(){// TO create objects and canvas
  //  createCanvas(1200,600); // Creating Canvas
  createCanvas(windowWidth, windowHeight);

  HomeMenubackground=createSprite(520,300);
  HomeMenubackground.addImage("Images/GameMenu.png",HomeMenubackgroundImage);
  HomeMenubackground.scale=0.56;
  HomeMenubackground.visible=false;

  EndMenu=createSprite(575,315);
  EndMenu.addImage("Images/EndMenu.png",EndMenu_Img);
  EndMenu.scale=0.60;
  EndMenu.visible=false;

  ground=createSprite(100,255,1300,800);
  ground.addImage("Background/Platform.png",ground_img);
  ground.velocityX=-6;
  ground.scale=0.7;
  ground.visible=false;

  boy= createSprite(410,415);
  boy.addImage("Images/Boy.png",boyImage);
  boy.scale=0.3;
  boy.visible=false;
    
  girl= createSprite(650,415);
  girl. addImage("Images/Girl1.png",girlImage);
  girl.scale=0.6;
  girl.visible=false;
  
  Jack= createSprite(100,500);
  Jack.addAnimation("running",Jack_running);
  Jack.addAnimation("Jack_Jump",Jack_JumpImage);
  Jack.scale=0.1;
  Jack.debug =false;
  Jack.visible=false;

  Alice= createSprite(100,432);
 // Alice.addImage("Images/Girl2.png",AliceImage);
  Alice.addAnimation("running",Alice_running);
  Alice.scale=0.1;
  Alice.debug=false;
  Alice.visible=false;
  
  invisibleGround=createSprite(500,560,5000,500);
  invisibleGround.scale=0.24;
  invisibleGround.visible=false;

  invisibleWall=createSprite(10,400,10,900);
  invisibleWall.visible=false;

  invisibleWall2=createSprite(1100,400,10,900);
  invisibleWall2.visible=false;

  restart=createSprite(750,500);
  restart.addImage("Images/restart.png",restart_Img);
  restart.scale=0.5
  restart.visible=false;

  life1 = createSprite(50,75,10,10);
  life1.addImage("Obstacle/Heart1.png", lifeImg);
  life1.scale = 0.5;

  life2 = createSprite(100,75,50,50);
  life2.addImage("Obstacle/Heart1.png", lifeImg);
  life2.scale = 0.5;

  life3 = createSprite(150,75,50,50);
  life3.addImage("Obstacle/Heart1.png", lifeImg);
  life3.scale = 0.5;

  score=0;  
  obstacleGroup = new Group();
  cloudsGroup = new Group();// TO create group of clouds
  energyDrinkGroup = new Group();
  platformGroup=  new Group();

}
function draw(){//TO display the object and for adding conditions

    

     edges = createEdgeSprites();
   
    if(gameState==="menu"){//STARTING Home MENU
       background("white");
        HomeMenubackground.visible=true;
        EndMenu.visible=false;
        boy.visible=true;
        girl.visible=true;
        life1.visible = false;
        life2.visible = false;
        life3.visible = false;
       // restart.visible=true;
        Jack.x = 50;
        Jack.y= 500;
        Alice.x = 50;
        Alice.y= 500;
        
    if(mousePressedOver(boy)){
            gameState=PLAY;//TO CONNECT WITH PLAY FUNCTION
            clickingSound.play();//TO play the mouse clicking sound when mouse pressed over
            Jack.visible=true;//TO Make it visible when the mouse is pressed over the boy
            HomeMenubackground.visible=false;
            ground.visible=false;
            boy.visible=false;
            girl.visible=false;
            Jack.x = 50;
    
        }
        
        if(mousePressedOver(girl)){
            gameState=PLAY;//TO CONNECT WITH PLAY FUNCTION
            clickingSound.play();
            Alice.visible=true;
            Alice.x = 50;
            HomeMenubackground.visible=false;
            ground.visible=false;
            girl.visible=false;
            boy.visible=false;

        }
    }
    

     if(gameState===PLAY){

        score = score + Math.round(getFrameRate()/60);
        obstacleGroup.velocityX = -(6 + 3*score/100);
        Jack.collide(invisibleGround);
        Alice.collide(invisibleGround);
        Alice.collide(platformGroup);
        Jack.collide(invisibleWall);
        background(background1Image);// Inittial background Image
        invisibleGround.visible=false;
        invisibleWall.visible=false;
        invisibleWall2.visible=false;
        EndMenu.visible=false;

        
        spawnClouds();
     //         spawnEnergyDrink();
        spawnStones();
        spawnSpikes();
        spawnZombies();
        spawnEnergyDrink();
        spawnZombies();
        spawnZombies2();
        spawnFireBall();

        if(ground.x<380) {
            ground.x=ground.width/3; 
          }

        Jack.collide(platformGroup);
        Jack.collide(invisibleWall2);

        Alice.collide(invisibleWall2);
        Alice.collide(invisibleWall);
      
    if(score>=0 && score<300){
        background(background1Image);
        obstacleGroup.velocityX= -10;
    }
    else if (score>=80 && score<600){
        background(background2Image);
        obstacleGroup.velocityX= -15;
    }
    else if (score >= 160 && score < 900) {
        background(background3Image);
        obstacleGroup.velocityX= -20;
    }
    else if (score >= 240 && score <1200) {
        background(background4Image);
        obstacleGroup.velocityX= -25;
    }
    else if (score >= 320 && score < 1500) {
        background(background5Image);
        obstacleGroup.velocityX= -30;
    }
    else if (score >= 400 && score <1800)  {
        background(background6Image);
        obstacleGroup.velocityX= -35;
    }
    else if (score >= 480 && score <2100) {
        background(background1Image);
        obstacleGroup.velocityX= -40;
    }
    else if (score >= 0 ) {
        background(background1Image);
    }

    if(keyDown("space") && Jack.y >= 350) {
        Jack.velocityY = -12;
     
      }
      Jack.velocityY = Jack.velocityY + 0.8
  
    if(keyDown("right")){
        Jack.x = Jack.x + 10;
    }
    if(keyDown("left")){
        Jack.x = Jack.x - 10;
    }

    if(keyDown("space") && Alice.y >= 350) {
        Alice.velocityY = -12;
     
      }

    Alice.velocityY = Alice.velocityY + 0.8
        
    if(keyDown("right")){
        Alice.x = Alice.x + 10;
    }
    if(keyDown("left")){
        Alice.x = Alice.x - 9;
    }

    if(obstacleGroup.isTouching(Alice)){
        life = life - 1;
        obstacleGroup.destroyEach();
        hitsound.play();
        Jack.x = 50;
        Alice.x = 50;
      
    }
    if(energyDrinkGroup.isTouching(Jack)){
        energyDrinkGroup.destroyEach(); 
        energyDrinkSound.play();     
        
        score+=40  
        if(life<=4){

life++
        }       
    }
    if(energyDrinkGroup.isTouching(Alice)){
        energyDrinkGroup.destroyEach(); 
        energyDrinkSound.play();     
        
        score+=40  
        if(life<=4){

life++
        }       
    }


    if(obstacleGroup.isTouching(Jack)){
        life = life - 1;
        obstacleGroup.destroyEach();
        hitsound.play();
        Jack.x = 50;
        Alice.x = 50;
      
life++
    }


if(life === 3){
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
}

if(life === 2){
    life1.visible = true;
    life2.visible = true;
    life3.visible = false;
}

if(life === 1){
    life1.visible = true;
    life2.visible = false;
    life3.visible = false;
}

if(life === 0){
    gameState= END;
    EndSound.play();
    life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    Jack.visible=false;
    Alice.visible=false;

}

}
    if(gameState===END){
        background("white");

        cloudsGroup.visible=false;
        obstacleGroup.visible=false;
        platformGroup.visible=false;
        energyDrinkGroup.visible=false;
        energyDrinkGroup.destroyEach();
        cloudsGroup.destroyEach();
        obstacleGroup.destroyEach();
        platformGroup.destroyEach();
        Jack.visible=false;
        Alice.visible=false;
        EndMenu.visible=true;
        restart.visible=true;
        life1.visible = false;
        life2.visible = false;
        life3.visible = false;
        Alice.x = 50;
        



        if(mousePressedOver(restart)){
            gameState="menu";// SO it will automatically coonect to game state menu
            clickingSound.play();
            restart.visible=false;
            score=0;
            Jack.x = 50;
            Alice.x = 50;
            life=3;
        }

     }
    drawSprites();

    fill("white");
    textSize(30);
    textFont("Cooper");
    stroke("black");
    strokeWeight(5);
    text("Score: "+ score, 900,50,200,100);// TO add score text and have added score which we have 
    //created upwards has been called here 
    if(life===0){
        
        textSize(50);
        text(""+ score,518,300);
    }
    
}
function spawnClouds() {
   
    if (frameCount % 200=== 0) {//After every 100 frame rates the cloud will be spawned
      var cloud = createSprite(width+20,height-300,40,10);
      cloud.y = Math.round(random(100,50));// TO spawn random clouds between this two values.
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -2; 
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }


  function spawnZombies(){

    if(frameCount %  340 === 0) {
      
    Zombie=createSprite(1900,random(425,425));
    Zombie.addAnimation("running",Zombie_running);
    Zombie.velocityX = -15;
    Zombie.scale=0.3;
    Zombie.debug =false;
    Zombie.setCollider("rectangle", 0, 0, 150, 400);
    obstacleGroup.add(Zombie);

    if(Zombie.isTouching(Jack)){
        life =life-1;
        hitsound.play();
        Jack.x = 50;
        Alice.x = 50;
        obstacleGroup.destroyEach();
      
 
     }
     if(Zombie.isTouching(Alice)){
        life =life-1;
        hitsound.play();
        Jack.x = 50;
        Alice.x = 50;
        obstacleGroup.destroyEach();
      
 
     }

    }
  }
  function spawnZombies2(){

    if(frameCount %  450 === 0) {
      
    zombie2=createSprite(1900,random(425,425));
    zombie2.addAnimation("running",zombie2_Running);
    zombie2.velocityX = -15;
    zombie2.scale=0.3;
    zombie2.debug =false;
    zombie2.setCollider("rectangle", 0, 0, 150, 400);
    obstacleGroup.add(zombie2);

    if(zombie2.isTouching(Jack)){
        life =life-1;
        hitsound.play();
        Jack.x = 50;
        Alice.x = 50;
        obstacleGroup.destroyEach();
 
     }
     if(zombie2.isTouching(Alice)){
        life =life-1;
        hitsound.play();
        Jack.x = 50;
        Alice.x = 50;
        obstacleGroup.destroyEach();
 
     }

    }
  }
  function spawnFireBall(){

    if(frameCount %  500 === 0) {
      
    fireball=createSprite(1900,random(425,425));
    fireball.addAnimation("running",fireball_Img);
    fireball.velocityX = -25;
    fireball.scale=0.2;
    fireball.debug=false;
    obstacleGroup.add(fireball);

    if(fireball.isTouching(Jack)){
       life =life-1;
       hitsound.play();
       Jack.x = 50;
       Alice.x = 50;
       obstacleGroup.destroyEach();
     

    }
    if(fireball.isTouching(Alice)){
        life =life-1;
        hitsound.play();
        Jack.x = 50;
        Alice.x = 50;
        obstacleGroup.destroyEach();
      
 
     }
}
  }

function spawnSpikes(){

    if(frameCount % 280 === 0){
        spikes =createSprite(1900,random(465,465));
        spikes.addImage("Obstacle6.png",spikesImg);
        spikes.velocityX = -1;
        spikes.scale = 0.2;
        spikes.debug=false;

        obstacleGroup.add(spikes);       
        
        if(spikes.isTouching(Jack)){
            life =life-1;
            obstacleGroup.destroyEach();
            hitsound.play();
            Jack.x = 50;
            Alice.x = 50;
          
     
         }
         if(spikes.isTouching(Alice)){
            life =life-1;
            obstacleGroup.destroyEach();
            hitsound.play();
            Jack.x = 50;
            Alice.x = 50;
          
     
         }
    }

}

function spawnStones(){

    if(frameCount %  800=== 0){
        stone= createSprite(1150, random(350,450), 180, 20);
        stone.velocityX = -2;
        stone.debug = false;
        stone.addImage("Obstacle5.png",stoneImg);
        stone.scale = 0.5;
        stone.visible=true;
        stone.setCollider("rectangle",5, 5, 300, 200);
        platformGroup.add(stone);     


       
    }

}
function spawnEnergyDrink(){

    if(frameCount % 900 === 0){
        energyDrink= createSprite(1250, random(345,455), 180, 20);
        energyDrink.addImage("energy", energyDrinkImg);
        energyDrink.scale = 0.16;
        energyDrink.velocityX = -5;
        energyDrink.debug =false;
        energyDrink.setCollider("rectangle", 0, 0, 200, 400);

        energyDrinkGroup.add(energyDrink);


    }
}
