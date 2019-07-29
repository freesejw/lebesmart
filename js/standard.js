const schriftArt = "Arial";

function random(max)
          {
            return Math.floor((Math.random() *max));
          }


function angetippt(rects, x, y) {
    var zw;
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
 function roundedRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.lineWidth = 1;
    ctx.stroke(); 
    ctx.fill();
  }  
  
  function isPrime(nr) {
    var factors = findFactors(nr); // Liste aller Teiler
    if (factors.length === 2) { // Wenn genau 2 Teiler
      return true; // nr ist Primzahl
    } else {
      return false; // nr ist keine Primzahl
    }
  }
  
  function filledCircle(x,y,r,start,end) {
      // draw the colored region
      ctx.beginPath();
      ctx.arc(x, y, r, 0, end * Math.PI, true);
      ctx.fillStyle = "#E2FFC6";   
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#66CC01";
      ctx.stroke();
      ctx.lineWidth=0;
  }
  function meldung(text,schriftDicke,schriftGroesse,schriftArt,farbe,xm,ym)
   {
     
       var sD=schriftDicke;
       var sG=schriftGroesse;
        var lg = 10 + ctx.measureText(text).width 
       ctx.clearRect(xm, ym-schriftGroesse+2,lg,25);
        ctx.fillStyle = farbe;        
        ctx.font = sD + ' ' + (sG + "px "+ schriftArt);              
        ctx.fillText(text, xm ,ym); 
    }
    function plusMinus(ausgang,delta,unten,oben)
{
        // Mehr oder weniger Zeit zum Suchen
        let anz=ausgang; 
        if ((anz + delta)< oben && delta>0)
        {anz=anz + delta; }
        if ((anz + delta)> unten && delta<=0)
        {anz=anz + delta; }
        
        return anz;
}         
function roundedButton()
{
       for (var i = 0, len = rects.length; i < len; i++) {       
       ctx.fillStyle=rects[i].col1;
       roundedRect(rects[i].x, rects[i].y, rects[i].w, rects[i].h,10);
      // ctx.fillStyle=rects[i].col2 , 
       //roundedRect(rects[i].x+5, rects[i].y+5, rects[i].w-10, rects[i].h-10,10);       
      }
}

function buttonText(a)
{ 
   // var a =9635;
    
    ctx.fillStyle = "white";
    ctx.font = "18px Arial";
    for (var i = 0, len = texts.length; i < len; i++) 
    {
       
       ctx.fillText(texts[i].na,texts[i].x, texts[i].y);       

     }
     
}
function akustischeMeldung(a)
    {
        audio = new Audio(a);
        audio.play();
    }
    
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }
  function zeigBild(bild,x,y,w,h)
  {
      var img = new Image();
      img.onload = function ()
       {
          ctx.drawImage(img, x, y, w,h);
       }
      img.src = bild;
  }
  
function stopUhrErstellen () {
    return  { days: 0, hrs: 0, mins: 0, secs: 0, msecs: 0 };
}
  
function stopUhrTick (stoppuhr) 
{
    stoppuhr.msecs++;
    if (stoppuhr.msecs === 100) {
        stoppuhr.secs ++;
        stoppuhr.msecs = 0;
    }
    if (stoppuhr.secs === 60) {
        stoppuhr.mins++;
        stoppuhr.secs = 0;
    }
    if (stoppuhr.mins === 60) {
        stoppuhr.hrs++;
        stoppuhr.mins = 0;
    }
    if (stoppuhr.hrs === 24) {
        stoppuhr.days++;
        stoppuhr.hrs = 0;
    }
    console.log( "days " + stoppuhr.days + " hrs  " + stoppuhr.hrs + "minut  " + stoppuhr.mins + "sec   " + stoppuhr.secs + "</td><td>" + stoppuhr.msecs);
}

function stopUhrStarten (tick, interval) {
  setInterval(tick, interval);
}
     