var warrior;

function preload()
{
  bg = loadImage("bg3.jpg");
  virusImg = loadImage("Virus.png");
  warriorImg = loadImage("Warrior.png");
}

function setup() {
  createCanvas(1200,600);
  warrior = createSprite(600, 300, 50, 50);
  warrior.addImage("warrior", warriorImg);
  warrior.scale = 0.4;
  virusGroup = new Group();
  peopleGroup = new Group();
}

function draw() {
  background(bg);  
  //virus()
 
  virus()
  people()
  if(virusGroup.isTouching(peopleGroup))
  {
    // peopleGroup.destroy();
  }

  if(keyDown(UP_ARROW))
  {
     warrior.y = warrior.y -2;
  }

  if(keyDown(DOWN_ARROW))
  {
    warrior.y = warrior.y +2;
  }

  if(keyDown(RIGHT_ARROW))
  {
    warrior.x = warrior.x +2;
  }

  if(keyDown(LEFT_ARROW))
  {
    warrior.x = warrior.x -2;
  }


  if(virusGroup.isTouching(peopleGroup))
  {
    peopleGroup.setVelocityXEach(0);
  }
  
  drawSprites();
}


function virus()
{
  if(frameCount % 170 === 0)
  {
    var virus = createSprite(1200, random(100, 500),20, 20);
    virus.addImage("virus", virusImg);
    virus.velocityX = -2;
    virus.lifetime = 600;
    virus.scale = random (0.3, 0.6);
    virusGroup.add(virus);
  }
}

function people()
{
  if(frameCount % 170 === 0)
  {
  var people = createSprite(0, random(100, 500), 20, 20);
  people.velocityX = 2;
  people.lifetime = 600;
  peopleGroup.add(people);
  }
}