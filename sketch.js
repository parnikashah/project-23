var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	 
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 200, 10,10,package_options);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	var package_options={
		isStatic:true
	}

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1=new Box(400,660,200,20);
	box2=new Box(300,620,20,100);
	box3=new Box(500,620,20,100);
	//box1=createSprite(280,640,20,100);
	//box2=createSprite(460,640,20,100);
	//box3=createSprite(370,690,160,20);


	var ground_options={
		isStatic:true

	}
	groundSprite=createSprite(width/2, height-7, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(400 , 200 , 5 ,package_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 700, 800, 30 , ground_options );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.display();
  box2.display();
  box3.display();

  keyPressed();
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	}
}
