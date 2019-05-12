
 
  var ballon =[];
  var seq=[];
  var punkte=[];
  var treffer=0;
  var boese=[1,6,7,10,11];
  var j = 0;
  var ypos;
  var xpos;

  for (i=0;i<=2;i++)
    { 
    seq[i]="Terrorist"+i+ ".jpg";  
    }
  

  for (i=0;i<=11;i++)
    { 
    ballon[i]="ballon"+i+ ".png";  
    }

  var myVar1 = setInterval(Flieg, 1000);
 
  function Flieg() 
  {
      
    var nr=  Math.floor(Math.random() * 12); 
  
    $('canvas').drawImage({       
        source: ballon[nr],
        layer: true,
        name: 'myBox' + j,
        fromCenter: false,
        opacity:0,
        x: Math.floor(Math.random() * 800) + 100,        
        y: 650,
        click: onclick     
              });

    $('canvas').animateLayer('myBox' + j,
        {
         opacity: function(layer) 
        {
        x= Math.min (1,0.5+0.25*i);            
        return x},
        y: -140          
        }, 
        {
         duration: 8000,
         easing: 'linear',          
        });
            
        j++
            
             
  

                  
 function onclick(layer) 
  { 
    xpos=layer.x;
    ypos=layer.y;   
                                   
    //layer.visible = false;
   animation
   
    var getroffen =false;
    

    for (var ii=0;ii<=boese.length;ii++) 
      {

      if(boese[ii]==nr)
          {            
            treffer+=1;
            getroffen=true;
            Beifall();                     
          }
      
      } 
        if (getroffen==false)
            {
            treffer-=1;           
            }
           
  }      
}
 
 function Beifall()
    {
      var win = new Audio('pain-sound.wav');
      win.volume=0.5;
      win.play();
    }
  function Schuss()
    {
          var win = new Audio('colt45.wav');
          win.play();
     }

     function animation(layer) {
      var iAni = 1, maxAni = 6, xPos = layer.x, yPos = layer.y;
      var  iFly = layer.name.split('-')[1];
      layer.visible = false;
      console.log('animation')
      $('canvas').drawImage({
          layer: true,
          name: 'iAni' + iFly,
          source: 'ballon1.png',
          x: xPos, y: yPos
      });
      console.log(iAni);
      var timer = setInterval(function () {
          iAni++;
          if (iAni <= maxAni) {
              $('canvas').setLayer(
                  'iAni' + iFly, {
                      source: 'ballon' + iAni + '.png'
                  }
              ).drawLayers();
          } else {
              clearInterval(timer);
          }
      }, 500);
      }    
    
    