const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var box1, box2, ground;

function setup() {
  
  var canvas = createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = new BOX(175, 300, 50, 50);
  box2 = new BOX(200, 100, 50, 100);

  ground = new GROUND(200, 390, 400, 20);

}

function draw() {

  background(0);
  
  Engine.update(engine);

  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);

  box1.display();
  box2.display();

  ground.display();

}