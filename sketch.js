var bullet1,bullet2,bullet3,bullet4;
var wall1,wall2,wall3,wall4;
var speed,weight,thickness;





function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(223,321);
  thickness=random(22,83);
  
  wall1=createSprite(1000,50,thickness,40);
  wall2=createSprite(1000,150,thickness,40);
  wall3=createSprite(1000,250,thickness,40);
  wall4=createSprite(1000,350,thickness,40);
  bullet1=createSprite(50,50,10,10);
  bullet2=createSprite(50,150,10,10);
  bullet3=createSprite(50,250,10,10);
  bullet4=createSprite(50,350,10,10);

  bullet1.shapeColor="white";
  bullet2.shapeColor="white";
  bullet3.shapeColor="white";
  bullet4.shapeColor="white";

  wall1.shapeColor=color(80,80,80);
  wall2.shapeColor=color(80,80,80);
  wall3.shapeColor=color(80,80,80);
  wall4.shapeColor=color(80,80,80);

}

function draw() {
  background("black"); 
  

  bullet1.velocityX = speed;
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;
  bullet4.velocityX=speed;
  //car1.debug=true;
  //wall1.debug=true;

  if(hasCollided(bullet1,wall1)){
     bullet1.velocityX=0;
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

     if(damage>10){
        wall1.shapeColor=color(255,0,0);
     }

     if(damage<10){
        wall1.shapeColor=color(0,255,0);
     }
  }
  if(hasCollided2(bullet2,wall2)){
   bullet2.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
      wall2.shapeColor=color(255,0,0);
   }

   if(damage<10){
      wall2.shapeColor=color(0,255,0);
   }
}
if(hasCollided3(bullet3,wall3)){
   bullet3.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
      wall3.shapeColor=color(255,0,0);
   }

   if(damage<10){
      wall3.shapeColor=color(0,255,0);
   }
}
if(hasCollided4(bullet4,wall4)){
   bullet4.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
      wall4.shapeColor=color(255,0,0);
   }

   if(damage<10){
      wall4.shapeColor=color(0,255,0);
   }
}

  
  drawSprites();
}
function hasCollided(bullet1,wall1){
   bullet1RightEdge=bullet1.x+bullet1.width;
   wall1LeftEdge=wall1.x;
   if(bullet1RightEdge>=wall1LeftEdge)
   {
      return true;
   }
   return false;
}
function hasCollided2(bullet2,wall2){
   bullet2RightEdge=bullet2.x+bullet2.width;
   wall2LeftEdge=wall2.x;
   if(bullet2RightEdge>=wall2LeftEdge)
   {
      return true;
   }
   return false;
}
function hasCollided3(bullet3,wall3){
   bullet3RightEdge=bullet3.x+bullet3.width;
   wall3LeftEdge=wall3.x;
   if(bullet3RightEdge>=wall3LeftEdge)
   {
      return true;
   }
   return false;
}
function hasCollided4(bullet4,wall4){
   bullet4RightEdge=bullet4.x+bullet4.width;
   wall4LeftEdge=wall4.x;
   if(bullet4RightEdge>=wall4LeftEdge)
   {
      return true;
   }
   return false;
}