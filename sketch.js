var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  car=createSprite(100,130,50,50);
  car.shapeColor=blue;
  car.velocityX=6;
  car.debug=true;
  wall=createSprite(800,130,50,500);
  wall.shapeColor=blue;
  wall.debug=true;
  wall.velocityX=-6;
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(car, wall)===true) {


    car.shapeColor = "red";
    wall.shapeColor = "red";
    bounceOff(car,wall);
  }
  
  
 
  drawSprites();
}

