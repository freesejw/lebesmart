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
function roundedButton(a)
{
       for (var i = 0; i< a; i++) {       
       ctx.fillStyle=rects[i].col1;
       console.log(ctx.fillStyle + "  i  " + i );
      
       roundedRect(rects[i].x, rects[i].y, rects[i].w, rects[i].h,10);
      // ctx.fill();
       ctx.fillStyle=rects[i].col2; 
       roundedRect(rects[i].x+5, rects[i].y+5, rects[i].w-10, rects[i].h-10,10);
       ctx.fill();       
      }
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
    ctx.stroke();
  }

function buttonText(a)
{ 
   
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
  
  function stoppenZeit(callback) {

    // definiere im eigentlichen Programm:

    //var timer = new stoppenZeit(drawTime);
    // zum anzeigen der laudenden Zeit
    //  function drawTime(zsecs, secs, minu) {
    //    console.log(" zsecs " + zsecs + "  secs " + secs + "  min  " + minu);}
    var timer;
    var zsecs = 0, secs = 0, minu = 0, hrs = 0;
    function myTimer() {
        zsecs++;
        if (zsecs === 10) {
            zsecs = 0;
            secs++;
        }
        if (secs === 60) {
            minu++;
            secs = 0;
        }
        callback(zsecs, secs, minu);
    }
    this.start = function () {
        zsecs = 0, secs = 0, minu = 0, hrs = 0;
        timer = setInterval(myTimer, 100);
    }
    this.stop = function () {
        clearInterval(timer);
    }
}
function uhrAnzeige(x,y,z1,z2,z3){

    // ist das Layout für die Uhr. u
    // x: x Position
    // y: y Position
    //z1,z2,z3 : Sek , Minuten, Stunden
    let xUhr=x;
    let yUhr=y; 
    if (z1<10){z1="0" + z1};
    if (z2<10){z2="0" + z2};
        ctx.fillStyle = "black";
        ctx.fillRect(xUhr,yUhr + 0,110,40);
        ctx.clearRect(xUhr+5,yUhr + 5,30,30);
        ctx.clearRect(xUhr+40,yUhr + 5,30,30);
        ctx.clearRect(xUhr+75,yUhr + 5,30,30);
        
        //ctx.font= "16px" + " " + schriftArt; 
        ctx.font= "bolder 20px Arial"; 
        ctx.fillStyle="red"; 
        ctx.fillText(z1,xUhr+8,yUhr + 27);
        ctx.fillText(z2,xUhr+43,yUhr + 27);
        ctx.fillText(z3,xUhr+78,yUhr + 27);

        ctx.fillStyle="#5a617b";
        ctx.font= " 16px Arial";
        ctx.fillText("Min",xUhr+5,yUhr - 7);
        ctx.fillText("Sek",xUhr+40,yUhr - 7);
        ctx.fillText("Dez",xUhr+75,yUhr - 7);

        ctx.strokeRect(xUhr-10,yUhr-30,130,80)
}  

function startTimer(x, y, w, h, zeit) {
    var vstart = Date.now();
    var ctx = document.getElementById("canvas").getContext("2d");
    function doIt() {
        // die vergangene Zeit;
        var gone = Date.now() - vstart;
      
        // die verbleibende Zeit
        var remaining = zeit - gone;
        // die Breite des Balkens
        var ist = remaining / zeit * w;
        // Progressbar zeichnen
        ctx.fillStyle = "#7f7fff";
        ctx.strokeStyle = "black";
        ctx.strokeWidth = 1;
        ctx.clearRect(x-3, y-3, w+6, h + 6);
        ctx.fillRect(x, y, ist, h);
        ctx.font= "normal 18px Arial"; 
        ctx.fillStyle="#7f7fff"; 
        ctx.fillText("   Merken   Merken   Merken   Merken   Merken",x,y+15);
        ctx.strokeRect(x, y, w, h);
        // wenn die verbleibende Zeit groesser als 0 ist:
        // erneuten Aufruf der Funktion doIt veranlassen
        if (remaining > 0) requestAnimationFrame(doIt);
        else {ctx.clearRect(x-3, y-3, w+6, h+6);}
    }
    doIt();
}
