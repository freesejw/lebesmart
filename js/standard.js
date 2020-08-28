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
       var lg = 20 + ctx.measureText(text).width 
       ctx.clearRect(xm, ym-schriftGroesse+2,lg,25);
        ctx.fillStyle = farbe;        
        ctx.font = sD + ' ' + (sG + "px "+ schriftArt);              
        ctx.fillText(text, xm ,ym); 
    }
    function plusMinus(ausgang,delta,unten,oben)
{
        // Mehr oder weniger Zeit zum Suchen
        let anz=ausgang; 
        if (delta>=0) {anz= Math.min((anz + delta),oben);}
       
        if (delta < 0 ) {anz= Math.max((anz + delta),oben);}
       
        return anz;
}         
function roundedButton(a)
    {
        // a : Anzahl Buttons
         
        for (var i = 0; i< a; i++) {       
        ctx.fillStyle=rects[i].col1;         
        roundedRect(rects[i].x, rects[i].y, rects[i].w, rects[i].h,10);      
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



function startTimer(x, y, w, h, zeitGesamt,text,textFont)
 {
    var vstart = Date.now();
    var ztext="";
    var leer="";
    ctx.font= textFont; 

    var lg1 = ctx.measureText("  " + text + "  ").width ;
    var lg2 = ctx.measureText(" ").width ;

    var rrw=(w-(w%lg1))/lg1; // gibt an wie oft der Text gebracht wird   
    var rest=w-rrw*lg1;// ermittelt Anzahl der Leerzeichen die linkks gesetzt werden 
  

    for(var i=0;i<rrw;i++)
        {
        ztext=ztext+"  " + text + "  "; // Erzeugt den Text im Laufband
        }
    for(var ii= 0;ii<rest/lg2;ii++) // erzeugt den leer- String der links eingebracht wird
        {
        leer=leer+" ";
        } 
    ztext=leer+ztext;       
   
  // Bis hierhin ist der Text im Rahmen des Rechtecks ermittelt
  
    function doIt() {
        
        var vorbei = Date.now() - vstart;       
        var verbleibend = zeitGesamt - vorbei;
        // die Breite des Balkens
        var ist = verbleibend / zeitGesamt * w;
        // Progressbar zeichnen7
      
      ctx.clearRect(x, y, w+100, h);

       ctx.strokeStyle = "blue";     
       ctx.strokeRect(x-3,y-3,w+6,h+6); 

        ctx.fillStyle = "#7f7fff";    
        ctx.fillRect(x, y, ist, h);
       

        ctx.fillStyle="#5a617b";
        ctx.fillText(ztext,x,y+2*h/3);

        // wenn die verbleibende Zeit groesser als 0 ist:
        // erneuten Aufruf der Funktion doIt veranlassen
        if (verbleibend > 0) requestAnimationFrame(doIt);
        else 
         {
            ctx.clearRect(x-4, y-4, w+8, h+8);
         }
    }
    
    doIt();
}

function progMinus(x,y,w,h,zeit,iz){
    //x, y , w, h Eingangsgrößen für das Rechteck Progressbar
    // zeit gibt an wieviel Sekunden die Progressbar aktiv ist
    // iz nach wieviel millisekunden der nächste aufruf startet
    vstart = Date.now();
    var ist =w; 
    zeit=zeit*1000; 
    var progInterval = setInterval (function() {
    ist=ist-(w/zeit)*iz;    
    ctx.fillStyle = "black";
    ctx.clearRect(x,y,w,h);    
    ctx.strokeRect(x,y,w,h);    
    ctx.fillRect(x,y,ist,h);
    var vorbei = Date.now() - vstart;  
    if( ist<=0 ) clearInterval(progInterval);
    }, iz);    
  }
