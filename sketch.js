const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload() {
    backgroundImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Box(50,200,20,20);
    World.add(world,polygon);
    slingshot1 = new SlingShot(polygon.body,{x:100,y:200});
    ground1 = new Ground(390,250,150,10);
    block1 = new Box(330,215,30,40);
    block2 = new Box(360,215,30,40);
    block3 = new Box(390,215,30,40);
    block4 = new Box(420,215,30,40);
    block5 = new Box(450,215,30,40);

    block6 = new Box(360,175,30,40);
    block7 = new Box(390,175,30,40);
    block8 = new Box(420,175,30,40);

    block9 = new Box(390,145,30,40);
}

function draw(){
   background("grey");
    ground1.display();

    polygon.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    
    block6.display();
    block7.display();
    block8.display();

    block9.display();
    Engine.update(engine);
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed()
{
    if(keyCode===32)
    {
        slingshot1.attach(polygon.body);
    }
}
