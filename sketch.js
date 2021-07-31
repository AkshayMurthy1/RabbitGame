var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var apples,i;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
apples = createGroup();
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  rabbit.x=mouseX

  if(frameCount%30===0){
    apple = createSprite(random(20,380),10,20,20);
    apple.addImage(appleImg);
    apple.scale=.07
    apple.velocityY=5
    apples.add(apple)
    leaf = createSprite(random(20,380),10,20,20);
    leaf.addImage(leafImg);
    leaf.scale=.07
  }
  for (i=0;i<apples.length;i++){
    if(apples.get(i).isTouching(rabbit)){
      apples.get(i).destroy();
    }
  }
}