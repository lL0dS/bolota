//Crie um namespace (espaço de nomes) para Mecanismo
const Engine = Matter.Engine; 
//Crie um namespace (espaço de nomes) para Mundo
const World = Matter.World; 
//Crie um namespace (espaço de nomes) para Corpos
const Bodies = Matter.Bodies; 
//Crie um namespace (espaço de nomes) para Corpo
const Body = Matter.Body

var ground, groundMove, groundTOP;

var button;

var angle=35;

function setup() {
  createCanvas(400,400);
  //crie o mecanismo
  //Adicione mundo ao mecanismo
  engine = Engine.create(); 
  world = engine.world;
  
  var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
   
  var ground_options ={
    isStatic: true
  };
  
  //crie o solo
  ground=Bodies.rectangle(200,400,400,20,ground_options);
  //adicione ao mundo
  World.add(world,ground);

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);
  
  ground2=Bodies.rectangle(250,300,100,20,ground_options);
  //adicione ao mundo
  World.add(world,ground2);
  //groundMove = new Ground(200,300,100,20);
  //push();
  //groundTOP = new Ground(200,0,400,20,ground_options);
  //pop();

  button = createImg("up.png");
  button.position(25,40);
  button.size(50,50);
  button.mouseClicked(Yforce);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  Engine.update(engine);
  
  fill("pink");

  ellipse(ball.position.x,ball.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
  rect(ground.position.x, ground.position.y, 400, 20);

//groundMove.show();

  push();
  translate(ground2.position.x, ground2.position.y);
  rotate(angle);
  rect(0,0,400,20);
  angle+=0.2;
  pop();
//groundTOP.show();
}

function Yforce(){
  Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05})
}