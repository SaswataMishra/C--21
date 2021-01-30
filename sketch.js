
var fixedrect,movingrect
var gameobject1, gameobject2, gameobject3, gameobject4




function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor= "green"
movingrect = createSprite(400, 200, 80, 30)
movingrect.shapeColor= "green"

gameobject1 = createSprite(100, 100, 50, 50)
gameobject1.shapeColor= "yellow"
gameobject2 = createSprite(200, 100, 50, 50)
gameobject2.shapeColor= "blue"
gameobject3 = createSprite(300, 100, 50, 50)
gameobject3.shapeColor= "orange"
gameobject4 = createSprite(400, 100, 50, 50)
gameobject4.shapeColor= "brown"

}

function draw() {
  background(255,255,255);  
movingrect.x= World.mouseX
movingrect.y= World.mouseY

if(isTouching(movingrect, gameobject1)){
  movingrect.shapeColor= "red"
  gameobject1.shapeColor= "red"
}
else{
  movingrect.shapeColor= "green"
  gameobject1.shapeColor= "green"
}
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){
  return true;
  }
  else{
  return false;  
  }
}

