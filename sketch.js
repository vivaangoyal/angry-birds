const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground1;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground1 = new Ground(500,780,1000,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
   
}