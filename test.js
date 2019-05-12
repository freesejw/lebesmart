var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var auge = new Image();
var bg = new Image();

auge.src = "auge.png";
bg.src = "Images/Hintergrund.png";

var gravity = 1;
var bX = 10;
var bY = 159;

function hinterGrund(){
    ctx.drawImage(bg,0,0);
}

function draw(){
    
    ctx.drawImage(auge,bX,bY);     
    bY += gravity;    
    requestAnimationFrame(draw);
    
}

function total(){
    hinterGrund();    
    draw();
}
    

total();





