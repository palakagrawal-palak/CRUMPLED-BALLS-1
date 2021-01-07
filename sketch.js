
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var rect1, rect2, rect3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	

	ground = new Ground(600,height,1200,20);
	paper = new Paper(100,50,50);
	rect1 = new Dustbin(1000,680,200,20);
	rect2 = new Dustbin(900,620,20,100);
	rect3 = new Dustbin(1100,620,20,100);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display();
 paper.display();
 rect1.display();
 rect2.display();
 rect3.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:140,y:-140});
	}
}



