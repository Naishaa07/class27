
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(150,600,30)
	bob2=new Bob(210,600,30)
	bob3=new Bob(270,600,30)
	bob4=new Bob(330,600,30)
	bob5=new Bob(390,600,30)
	roof1=new roof(270,200,400,50)
	rope3=new rope(bob1,roof1,-bob1.diameter*2,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
 // strokeWeight(3)
  //line (bob1.body.position.x, bob1.body.position.y, roof1.body.position.x, roof1.body.position.y)
  drawSprites();
 
}



