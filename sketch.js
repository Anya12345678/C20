var movingRect; 
var fixedRect; 

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(100, 60, 70, 40); 
  movingRect.shapeColor = "green"; 
  movingRect.debug = true; 

  fixedRect = createSprite(500, 200, 80, 80)
  fixedRect.shapeColor = "red";
  fixedRect.debug = true; 

}

function draw() {
  background("black");  

  movingRect.y = mouseY; 
  movingRect.x = mouseX;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  } else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "green";
  }

  console.log(movingRect.x - fixedRect.x)

  drawSprites();
}