const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;



function setup(){
    var canvas = createCanvas(1000,550);
    engine = Engine.create();
    world = engine.world;

    gr1 = new Ground(650,540,1300,15);
    gr2 = new Ground(640,400,200,30);
    gr3 = new Ground(400,450,200,30);
    gr4 = new Ground(860,350,200,30);
    ball1 = new Ball(100,300,30);

    box1 = new Box(590,300);
    box2 = new Box2(640,300);
    box3 = new Box3(690,300);
    box4 = new Box(610,250);
    box5 = new Box2(660,250);
    box6 = new Box3(635,200);
    box7 = new Box2(350,400);
    box8 = new Box3(400,400);
    box9 = new Box(450,400);
    box10 = new Box2(375,350);
    box11 = new Box3(425,350);
    box12 = new Box(400,300);
    box13 = new Box3(800,300);
    box14= new Box2(850,300);
    box15 = new Box(900,300);
    box16 = new Box3(825,250);
    box17 = new Box2(875,250); 
    box18 = new Box(850,200);
    sling = new SlingShot(ball1.body,{x:100, y:300});
}

function draw(){
    background(0);
    Engine.update(engine);
 
    gr1.display();
    gr2.display();
    gr3.display();
    gr4.display();

    ball1.display();  

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
    textSize(20);
    fill("yellow");
    text("PRESS SPACE TO REATTACH THE BALL",200,100);
    sling.display();
   // mouseDragged();
    //mouseReleased();
}

function mouseDragged(){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
  if(keyCode===32){
    
      sling.attach(ball1.body);
  }
}