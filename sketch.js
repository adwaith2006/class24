const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
var log;
var pig;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(200,380,400,20);

    box1 = new Box(200,300,50,50);
    box2=new Box(240,100,50,50);
    pig=new Pig(200,200);
    log=new Log(280,300,50,PI/4);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   pig.display();
   log.display();
}