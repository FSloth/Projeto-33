const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
var soltar;

var divisionHeight=300;
var score = 0;
var count = 0;

var GameStatus = "jogar";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   //for (var k = 0; k <=width; k = k + 80) {
     //divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   //}
    for (var j = 70; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 20; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 70; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 20; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
    ball=new Ball(mouseX, 700, 10, 10);  

    soltar =new Line(ball.body,{x:400,y:600})

}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");

   textSize(27)
   text("Controle a particula para que ela possa passar pelos obstáculos!!", 10, 700)

  if(GameStatus == "end"){
      textSize(100);
      text("You-Win", 150, 250);
    }
  
  textSize(35)
  //text(" 500 ", 5, 550);
  //text(" 500 ", 80, 550);
  //text(" 500 ", 160, 550);
  //text(" 500 ", 240, 550);
  //text(" 100 ", 320, 550);
  //text(" 100 ", 400, 550);
  //text(" 100 ", 480, 550);
  //text(" 200 ", 560, 550);
  //text(" 200 ", 640, 550);
  //text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();


  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }

    if(ball!=null)
    {
       ball.display();

       if (ball.body.position.y < 50){
        if (ball.body.position.y < 10){
          score = score + 100000000;
          if (score >= 5197777777) GameStatus = "end"
        }
    }
  }

   //for (var k = 0; k < divisions.length; k++) 
   //{
     //divisions[k].display();
   //}
}


function mousePressed()
{
  //if(GameStatus!=="end"){
  count++;
 }
//}

function mouseDragged(){
  if (GameStatus!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY})
      
  }
}



function mouseReleased(){
  soltar.fly();
  GameStatus = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     soltar.attach(ball.body);
  }
}
