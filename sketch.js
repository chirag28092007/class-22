const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,obj


 
 
 
 
 
 
 
 
 
 
 
 function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  obj=Bodies.rectangle(400,200,50,50);
  World.add(world,obj)
}

function draw() {
  background(0,0,0);  
 Engine.update(engine);
 rect(obj.position.x,obj.position.y,50,50)
}