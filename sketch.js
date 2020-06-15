var bullet, wall;
var speed, weight, thickness;
var damage;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor = "white";

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;

}

function draw() {
  background(0,0,0); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = "green";
    }

    else if(damage<10){
      wall.shapeColor = "red";
    }

  }
  
  drawSprites();
}


