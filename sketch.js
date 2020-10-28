
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var paper1 ;
	var ground ;
	var s1 ;
	var s2 ;
	var s3 ;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	paper1 = new paperclass(200,350,10);

	ground = new Ground(400, 680, 800, 20);

    s1 = new Dustbin(550, 620, 20, 100);
    s2 = new Dustbin(635, 660, 150, 20);
    s3 = new Dustbin(720, 620, 20, 100);
  
}


function draw() {

	Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground.display();
  s1.display();
  s2.display();
  s3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:13, y: -13})
	}
}


