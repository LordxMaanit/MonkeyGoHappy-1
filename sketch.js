
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score ;
var gorund ;
var survivalTime = 0 ;
var foodGroup , obstacleGroup ; 


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(80,315,20,20) ; 
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1 ;
  
  ground = createSprite(400,350,900,10);
  ground.velocityx = -4 ;
  ground.x = ground.width/2; 
  console.log(ground.x);
  
 obstacleGroup = createGroup();
  foodGroup = createGroup();

  
}


function draw() {
background("white");
  
 if (keyDown("space")){
   monkey.velocityY = -12
 }
  
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);

  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,500,50);
  
  stroke ("black");
  textSize(20);
  fill ("black");
  
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime, 100,50);

  
  drawSprites();
  bananas();
  obstacles();
}

function bananas(){
    if (frameCount % 80 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(150,230));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    food.lifetime = 200;
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    foodGroup.add(food);  
  }
}

function obstacles(){
    if (frameCount % 300 === 0) {
    var obstacle = createSprite(380,330,40,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);  
  }
}





