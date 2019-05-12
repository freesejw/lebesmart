

const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");
var bgColor ="lightblue";
 var xBasis=20, yBasis=540, wBasis=120, hBasis=40, dBasis=40, xtextdis=20, ytextdis=25;
 var yErhoehung=50; 
 var xPlus=0;
 var yPlus=60;
 var myVar;
 var speed = 0.4;


var rects = [{x: xBasis, y: yBasis, w: wBasis, h: hBasis,col: bgColor},
             {x: (xBasis + wBasis+ dBasis), y: yBasis, w: wBasis, h: hBasis,col: bgColor},
             {x: (xBasis + 2 *( wBasis+ dBasis)), y: yBasis, w: wBasis, h: hBasis,col: bgColor}];             
            

var texts =[{na: "Go on", x: xBasis + xtextdis -10, y: yBasis + ytextdis},
           {na: "Schneller", x: (xBasis + xtextdis +  wBasis + dBasis),y: yBasis + ytextdis} ,
           {na: "Langsamer", x: (xBasis + 10+ 2 * (wBasis+ dBasis)),y: yBasis + ytextdis }];

// create the unit
const box = 30;

// load images

const ground = new Image();
ground.src = "ground.png";

const foodImg = new Image();
foodImg.src = "food.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();
 
dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

//basisErstellen();


let snake = [];

snake[0] = {    x : 9 * box,    y : 10 * box};

// create the food

let food = {
x : Math.floor(Math.random()*10+1) * box,
y : Math.floor(Math.random()*12+3) * box
};

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT") {
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
  //  console.log("   1   " +(snakeX) +  "  d  " +d);  
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas

function draw()
{
   
    ctx.drawImage(ground,xPlus,yPlus,480,420);
    drawSnake();
     ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position Ist immer an der Spitze; also Array[0];
    let snakeX = snake[0].x;     let snakeY = snake[0].y;

    
    // which direction
   
 
 //   

    if( d == "LEFT" ) {snakeX-=box;      
    snakeX=(1-snakeX<box)*snakeX;}
    
    if( d == "RIGHT") snakeX += box;
    
    if (snakeX> 15 * box){ 
        snakeX = 15*box;
       d="";
    }

    if( d == "UP") snakeY -= box;
    if (snakeY < 3*box){ snakeY = 2*box; }
   
    if( d == "DOWN") snakeY += box;
    if (snakeY > 15*box ){snakeY = 15*box;}

   
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y)
    {
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*16+1) * box,
            y : Math.floor(Math.random()*13) * box
               }
        // wenn schlange trifft wird sie um eine bocx länger
    }
        else 
         {
           snake.pop();           
        }
    
    // add new Head
    
    let newHead = { x : snakeX, y : snakeY }
    
    // game over
    
    //if(snakeX <30 || snakeX > (16 * box)-15 || snakeY < 2*box || snakeY > 15*box || collision(newHead,snake)){
       
      //  
      //  dead.play();
   
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "black";
    ctx.font = "20px Changa one";
    ctx.fillText(score,1*box,17*box);
}

function drawSnake(){
    for( var i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }

}

cvs.addEventListener('click', function(e)
     {
       
        var rect = angetippt(rects, e.offsetX, e.offsetY);        
        if (rect) 
        {
            auswahlButton();           
        } 

    }, false);

function buttonErstellen()
{
       for (var i = 0, len = rects.length; i < len; i++) {
        ctx.rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h); 
        ctx.stroke();  
        ctx.fillStyle=rects[i].col;  
        ctx.fillRect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
        
      }
}

function buttonText()
{ 
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";

    for (var i = 0, len = texts.length; i < len; i++) 
    {
       ctx.fillText(texts[i].na,texts[i].x, texts[i].y);
        
     }
        
}
function meldung(text, schrift,farbe,xm,ym)
   {
    var lg = 20 + ctx.measureText(text).width 
        ctx.clearRect(xm,ym,lg,-20);
        ctx.fillStyle = farbe;
        ctx.font = schrift;
        ctx.fillText(text, xm ,ym); 
    }

function angetippt(rects, x, y) {
   
    var isCollision = false;
    for (let i = 0, len = rects.length; i < len; i++) {
        var left = rects[i].x, right = rects[i].x+rects[i].w;
        var top = rects[i].y, bottom = rects[i].y+rects[i].h;
        if (right >= x
            && left <= x
            && bottom >= y
            && top <= y) {
                isCollision = rects[i];   
                getipptRechteck=i;        
          }
    }
    return isCollision;
}

function auswahlButton()
    {
        switch (getipptRechteck) 
                {
                    case 0:                                         
                        start();
                        break;                    
                    case 1:
                        plusMinus(0.1);                           
                        break;
                    case 2:
                        plusMinus(-0.1);                           
                        break;                                 
                    default:
                       alert("ups");
                }             
    }

function plusMinus(sw)

{
 speed=speed + sw ;

// console.log(xSpeed + ySpeed);
 var lg = 20 + ctx.measureText("Schnelligkeit des Balls  plus minus  = " +  speed + " milli Sek").width 
 ctx.clearRect(xBasis,yBasis -20, lg, -20); 
 meldung("Schnelligkeit  = " +  speed  ,"18px Arial","black",xBasis ,yBasis - 20);
}
// call draw function every 100 ms

function basisErstellen()
{
    buttonErstellen();
    buttonText(); 
   // ctx.drawImage(ground,xPlus,yPlus,455,420)
    meldung("Verbessere spielerisch deine Motorik","20px Arial","black",65, 35);  
}

   start();
  
  
  
    function start(){
        clearInterval(myVar);
        draw();
        basisErstellen();

        myVar = setInterval(draw,speed*1000); 

    }    
      
   
    //let game = setInterval(draw,400); 













