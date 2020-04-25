var car,wall,speed,weight,deformation1,deformation2,deformation3;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor=color(255);
  car.weight = random(400,1500);
  car.speed = random(20,100);
  car.velocityX = car.speed;
  car.debug = false;
  car.deformation1 = 0.5*car.weight*car.speed*car.speed/22500;

  wall = createSprite(1330,200,60,400);
  wall.shapeColor=color(80,80,80);
  wall.debug = false;
}

function draw() {

  background(0);

 if (car.x - wall.x < wall.width + car.width/2
    && wall.x - car.x < wall.width + car.width/2)
 {

      car.velocityX = 0 ;

  if (car.deformation1 > 180){
    car.shapeColor =color(255,0,0);
  }

  if (car.deformation1 > 100 && car.deformation1 < 180){
    car.shapeColor =color(230,230,0);
  }

  if (car.deformation1 < 100){
    car.shapeColor =color(0,255,0);
  }
    }

  drawSprites();
}
