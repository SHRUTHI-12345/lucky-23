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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
var options={
	isStatic : true
}

ground = Bodies.rectangle(width/2,650,width,10,options);
World.add(world,starBody);


// give var options as isStatic: true
// create ground as rectangle body with positions (width/2,650,width,10,options)
// add the ground to the world 


 	boxPosition=width/2-100
 	boxY=610;
	 
	 
// create sprite boxleftSprite with positions (boxPosition,boxY,20,100)
boxleftSprite = Bodies.rectangle(boxPosition,boxY,20,100);
boxleftSprite.shapeColor=color(255,0,0);

// create boxLeftBody as rectangle body with positions (boxPosition+20, boxY, 20,100 , options)
// add the boxLeftBody to the world 
boxleftBody = Bodies.rectangle(boxPosition+20,boxY,20,100,options);
World.add(world,boxLeftBody);


// create sprite boxBase with positions (boxPosition+100, boxY+40, 200,20)
boxBase = Bodies.rectangle(boxPosition+100,boxY+40,200,20,);
 	boxBase.shapeColor=color(255,0,0);

// create boxBottomBody as rectangle body with positions (boxPosition+100, boxY+45-20, 200,20, options)
// add the boxBottomBody to the world 	
boxBottonBody = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,options);	 
World.add(world,boxBottomBody);

// create sprite boxleftSprite with positions (boxPosition+200 , boxY, 20,100)
boxleftSprite = Bodies.rectangle(boxPosition+200,boxY,20,100);
boxleftSprite.shapeColor=color(255,0,0);

// create boxRightBody as rectangle body with positions (boxPosition+200-20 , boxY, 20,100 , options)
// add the boxRightBody to the world 	 
boxRightBody = Bodies.rectangle(boxPosition+200-20,boxY,20,100,options);
World.add(world,boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  
  // set for y position also as above line

  
  drawSprites();
  
  
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
    // write it as line ; just make one change add 20 --> helicopterSprite.x=helicopterSprite.x-20; 
    // write x position as 20 and y as 0 in line ---> translation={x:20,y:0}
    // write the line Matter.Body.translate(packageBody,translation)
  }
  else if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody,false);
    
  }
}





























































