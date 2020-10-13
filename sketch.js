
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var treeSprite;

function preload()
{
	
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	/*treeSprite = createSprite(550,475,20,200);
	treeSprite.addImage(treeImage);
	treeSprite.scale=0.35; */

	tree = new Tree(550,500,300,450);

	
	
	groundSprite=createSprite(width/2, 690, width,20);
	groundSprite.shapeColor=color("brown")

	ground = Bodies.rectangle(width/2, 690, width, 50 , {isStatic:true} );
	World.add(world, ground);

	boy = createSprite(125,610,20,50);
	boy.addImage(boyImage);
	boy.scale=0.11;

	stone = new Stone(65,540,10,10);

	mango1 = new Mango(450,425,20,20);
	mango2 = new Mango(525,350,20,20);
	mango3 = new Mango(500,450,20,20);
	mango4 = new Mango(600,375,20,20);
	mango5 = new Mango(630,450,20,20);
	mango6 = new Mango(550,425,20,20);

	chain = new Chain(stone.body,{x:75, y:555});




	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  stone.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  chain.display();

  
  
  drawSprites();
 
}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	}
	
	function mouseReleased(){
		chain.fly();
	}
	



