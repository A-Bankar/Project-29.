const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var userEngine,userWorld;

var ground1;
var ground2;

var box1;
var box2;
var box3;
var box4;


function preload(){
    //loading the image for the polygon
    polygonImg = loadImage("polygon.png");
}

function setup() {
    createCanvas(1400,600);

    userEngine = Engine.create();
	userWorld = userEngine.world;

    //creating the polygon 
    fill("red");
    polygon = Bodies.circle(50,200,50);
    World.add(userWorld,polygon);
    
   

    //grounds
    ground1 = new Ground(500,450,340,20);
    ground2 = new Ground(920,300,280,20);

    //layer 1
	box1 = new Box(360,410,40,50);
    box2 = new Box(400,410,40,50);
	box3 = new Box(440,410,40,50);
	box4 = new Box(480,410,40,50);
	box5 = new Box(520,410,40,50);
	box6 = new Box(560,410,40,50);
	box7 = new Box(600,410,40,50);
	box8 = new Box(640,410,40,50);

    //ground 1
    //layer 2
    box9 = new Box(400,360,40,50);
	box10 = new Box(440,360,40,50);
	box11 = new Box(480,360,40,50);
	box12 = new Box(520,360,40,50);
	box13 = new Box(560,360,40,50);
	box14 = new Box(600,360,40,50);

    //layer 3
    box15 = new Box(440,310,40,50);
	box16 = new Box(480,310,40,50);
	box17 = new Box(520,310,40,50);
	box18 = new Box(560,310,40,50);

    //layer 4
	box19 = new Box(480,260,40,50);
	box20 = new Box(520,260,40,50);

    //ground 2
    //layer 1
    box21 = new Box(820,260,40,50);
    box22 = new Box(860,260,40,50);
    box23 = new Box(900,260,40,50);
    box24 = new Box(940,260,40,50);
    box25 = new Box(980,260,40,50);
    box26 = new Box(1020,260,40,50);

    //layer 2
    box27 = new Box(860,210,40,50);
    box28 = new Box(900,210,40,50);
    box29 = new Box(940,210,40,50);
    box30 = new Box(980,210,40,50);

    //layer 3
    box31 = new Box(900,160,40,50);
    box32 = new Box(940,160,40,50);

    //creation of catapult with constraint. Body of bird will be attached to the constraint.
    catapult = new Catapult(this.polygon, { x: 120, y: 305  });

    

    Engine.run(userEngine);
}
 
function draw() {
    background(69,69,69);
    rectMode(CENTER);

    ground1.display();
    ground2.display();

    box1.display();
    box2.display();    
    box3.display();    
    box4.display();    
    box5.display();    
    box6.display();    
    box7.display();    
    box8.display();    

    box9.display();    
    box10.display();    
    box11.display();    
    box12.display();    
    box13.display();    
    box14.display();  
    
    box15.display();    
    box16.display();    
    box17.display();    
    box18.display();    

    box19.display();    
    box20.display();    

    box21.display();    
    box22.display();  
    box23.display();    
    box24.display();    
    box25.display();    
    box26.display();    
  
    box27.display();    
    box28.display();    
    box29.display();    
    box30.display();    

    box31.display();    
    box32.display();    


    //display of catapult with constraint. Body of bird will be attached to the constraint.
    catapult.display();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y);
     
}

//function triggered when a mouse is clicked and dragged
function mouseDragged() {
    if (catapult.constraint.bodyA != null && mouseX < width / 3) {
      //function for bird to move with repsect to mouse
      Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
    }
  }
  
  //function triggered when a clicked mouse is released
  function mouseReleased() {
    //function call to detach(release) a body for(this.sling.bodyA) om constraint (t
    catapult.detach();
  }
  
  //function triggered when a key on keyboard is pressed
  function keyPressed() {
    if (keyCode == 32) {
      //function call to attach a body to CONSTRAINT (this.sling.bodyA)
      catapult.attach(this.polygon);
    }
  }
  