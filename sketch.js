var ball,img,paddle;
function preload() {
  ball_bounce = loadImage("ball.png");
  paddle_move = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  
 //creating the sprites; 
  ball = createSprite(5,200,20,20);
  paddle = createSprite(340,200,20,50);
  
  edges = createEdgeSprites(); 
  
  ball.addImage("bounce",ball_bounce);
  paddle.addImage("move",paddle_move);
  ball.velocityX = 9;  
}

function draw() {
  background(205,153,0);        
 
 //sprites' behviour; 
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
 paddle.collide(edges[2]);
 paddle.collide(edges[3]);   

  if(ball.x > 400){
    textStyle(BOLD);
    textSize(17);
   text("Pls refresh the page ^_^",100,200);
  }
  
 //controlls for the paddle; 
if(keyDown(UP_ARROW)) {
  paddle.y = paddle.y-20
}
  
if(keyDown(DOWN_ARROW)) {
  paddle.y = paddle.y + 20;  
  }
 
ball.bounceOff(paddle,randomVelocity);
  
  drawSprites(); 
}

function randomVelocity(){
    ball.velocityY = random(-9,9);
}