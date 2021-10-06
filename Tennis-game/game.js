var canvas;
var canvasContext;
var ballX=50;
var ballY=50;
var ballSpeedX = 10;
var ballSpeedY = 6;

var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 6;


var paddle1Y = 400;
var paddle2Y = 400;
const PADDLE_THICKNESS= 10;
const PADDLE_HEIGHT= 100;

var showingWinScreen = false;

function handMouseClick(evt){
  if(showingWinScreen){
     player1Score = 0;
     player2Score = 0;
    // ballSpeedX += 10;
     ballSpeedY += 3;
     showingWinScreen = false;
  }
}

window.onload = function(){

    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
 
    var framePerSecond = 30;
 
    setInterval(function() {
         drawEverything();
         moveEverything();
     },(1000/framePerSecond)); 
     
    canvas.addEventListener("mousedown",handMouseClick); 
     
     canvas.addEventListener("mousemove",function(evt){
       var mousePos = calculateMousePos(evt);
       paddle1Y = mousePos.y -  (PADDLE_HEIGHT/2); 
      });


    
}


function ballReset(){

  if(player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE){
    showingWinScreen = true;
  
  }
  ballSpeedX =  - ballSpeedX ;
  ballX = (canvas.width)/2;
  ballY = (canvas.height)/2;
}

function computerMovement(){
 var paddle2Ycenter = paddle2Y + (PADDLE_HEIGHT);
 
  if(paddle2Ycenter < ballY - 35){
    paddle2Y += 6;
  }
  else if(paddle2Ycenter > ballY + 35){
    paddle2Y -= 6;
  }
}


function moveEverything(){
 if(showingWinScreen){
    return;
 }
  computerMovement();

   ballX +=  ballSpeedX ;
   ballY += ballSpeedY ;
   
   //Move and Bounce ball Horizontally
   if( ballX < 0 ){ 
        if(ballY > paddle1Y && ballY < (paddle1Y + PADDLE_HEIGHT)){
              ballSpeedX = -ballSpeedX;
              
              var deltaY = ballY - (paddle1Y +PADDLE_HEIGHT/2);
              ballSpeedY = deltaY * 0.35; 
        }
        else{
            player2Score++;  // Must be before ballReset()
            ballReset();
            
        }
   }
   if( ballX > canvas.width ){ 
        if(ballY > paddle2Y && ballY < (paddle2Y + PADDLE_HEIGHT)){
              ballSpeedX = -ballSpeedX;
              
              var deltaY = ballY - (paddle2Y +PADDLE_HEIGHT/2);
              ballSpeedY = deltaY * 0.35; 
        }
        else{
            player1Score++; // Must be before ballReset()
            ballReset();
           
        }
   }
   
   //Move and Bounce Ball Vertically
   if( ballY < 0 ){ 
       ballSpeedY =  - ballSpeedY ;
   }
   if( ballY > canvas.height ){ 
       ballSpeedY =  - ballSpeedY ;
   }
     
}


function drawNet(){
       for(var i=0;i<canvas.height;i+=40){
        colorRect((canvas.width/2) - 1,i,2,20,"white");
       }
  
}


function drawEverything(){
    canvasContext.font = "30px Arial";

   // Screen or Canvas with #1b262c color
   colorRect(0,0,canvas.width,canvas.height,"#1b262c");
   
   canvasContext.fillStyle = "white";
   
   if(showingWinScreen){
        if(player1Score >= WINNING_SCORE){
         canvasContext.fillText("You Won!🚩️",300,200);
        } 
        else if(player2Score >= WINNING_SCORE){
        canvasContext.fillText("Computer Won!💻️",300,200);
        
        }
       
       canvasContext.fillText("Click To Continue",300,500);
       return;
    }
    
    drawNet();
    
   //this is left paddler
   colorRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,"white"); 
   //this is right Computer paddler
   colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,"white"); 
   //ball of the game
   colorCircle(ballX,ballY,10,"white"); 
   
   canvasContext.fillText(player1Score,100,100);
   canvasContext.fillText(player2Score,canvas.width-100,100);
}


function colorRect(leftX,topY,width,height,drawColor){
 
   canvasContext.fillStyle = drawColor;
   canvasContext.fillRect(leftX,topY,width,height);
}


function colorCircle(centerX,centerY,radius,drawColor){

   canvasContext.beginPath();
   canvasContext.arc(centerX,centerY,radius,0,2 * Math.PI ,drawColor);
   canvasContext.fill(); 

}

//Mouse position relative to canvas

function calculateMousePos(evt){

     var rect = canvas.getBoundingClientRect();
     var root = document.documentElement;
     var mouseX = evt.clientX - rect.left -root.scrollLeft;
     var mouseY = evt.clientY - rect.top -root.scrollTop;  
      return{
         x: mouseX,
         y: mouseY
      } ;
}

















