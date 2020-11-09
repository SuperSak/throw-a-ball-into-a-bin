var paper, ground, bin1, bin2, bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{

}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
	ground=new Ground(width/2,height-35,width,10)
	paper = new Paper(100,100,10);
	bin1=new Bin(600,height-45,200,20)
	bin2=new Bin(490,height-85,20,100)
	bin3=new Bin(710,height-85,20,100)
	//Create the Bodies Here.

	//paper.display()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50,255,30);
  bin1.display()
  bin2.display()
  bin3.display()
  ground.display()
  paper.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15,y:-15})
	}
}