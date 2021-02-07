const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var ground, ball;

function setup() {
  
  var canvas = createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options = {isStatic: true};
  var ball_options = {restitution: 1.0};

  ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
  ball = Bodies.circle(200, 100, 20, ball_options);

  World.add(world,ground);
  World.add(world,ball);

  console.log(ground_options);

}

function draw() {

  background("cyan");
  
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

}