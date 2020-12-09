function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(500,100,40,20);
  wall = createSprite(1200,200,thickness,height);
  
}

function draw() {
  background(0); 
  bullet.velocityX = 10;
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }
  /*if (hasCollided(bullet,wall)) {
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if (damage<5) {
      bullet.shapeColor = "green"
    }

    else {
      bullet.shapeColor = "red"
    }
  }*/
  drawSprites();
}

/*function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x = bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false
}*/
function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
