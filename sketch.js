function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(100,200,50,90);
  fixedRect.shapeColor="red";

  movingRect=createSprite(200,200,40,110);
  movingRect.shapeColor="red";
  
}

function draw() {
  background("white");  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2&&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
    
  }

  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  drawSprites();
}