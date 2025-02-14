
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


    stone = new Stone(600,200,20);
	mango1=new mango(1100,100,30);
	mango2 = new mango(1200,200,30);
	mango3 = new mango(1000,100,30);
	mango4 = new mango(900,230,30);
	mango5 = new mango(1000,180,30);
  mango6 = new mango(1110,240,30);



	slingshot = new Slingshot(stone.body,{x:245,y:410});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);



  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
   }
   function mouseReleased(){
	   slingshot.fly();
   }
   function keyPressed(){
	   if(keyCode === 32){
		   Matter.Body.setPosition(stone.body,{x:220,y:420});
		   slingshot.attach(stone.body);
	   }
   }
   function detectollision(lstone,lmango){
	   var mangoBodyPosition = lmango.body.position;
	   var stoneBodyPosition = lstone.body.position;

     var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   
	   if(distance<=lmango.r+lstone.r){
		   Matter.Body.setStatic(lmango.body,false);
		 
	   }
   }
