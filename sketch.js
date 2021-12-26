const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,ground;

var groundObj,leftSide,rightSide;
//Crea la variable ball

var radius = 40;

function setup() {
	//aumentar tamaño a 1600 y 700
	createCanvas(100, 100);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Crea las opciones para objeto ball
	
	//Crea el cuerpo circular
	
	//Agregar cuerpo circular al mundo
	
	//Cuerpo de los suelos 
	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);
  //Llama a la función display para los suelos
  
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		//Agregar fuerza para la bola de papel 
		
    
  	}
}

