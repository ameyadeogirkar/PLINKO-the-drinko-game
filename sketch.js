const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 150;

function setup() {
  createCanvas(450,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(225,590,width,20);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
    {    
       plinkos.push(new Plinko(j,55));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {    
       plinkos.push(new Plinko(j,155));
    }

    for (var j = 75; j <=width; j=j+50) 
    {    
       plinkos.push(new Plinko(j,255));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {    
       plinkos.push(new Plinko(j,355));
    }

}

function draw() {
  background(random(0,250),mouseX,mouseY);


  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();    
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,8));
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  fill(0)
  textSize(16)
  text("MOVE THE COURSOR FOR CHANGE IN BACKGROUND",10,100)
}