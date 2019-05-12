<htlm>
<head>
<meta charset="utf-8">
<title>Lebe Smart</title>
<link type="text/css" rel="stylesheet" media="screen" href="smartcss.css"/>
<script src="http://code.jquery.com/jquery-latest.js"></script>

<script>
var BildListe = new Array();
  BildListe[0] = "basis.jpg";
  BildListe[1] = "brainstyling.jpg";
  BildListe[2] = "bodystyling.jpg";
  BildListe[3] = "facestyling.jpg";
  BildListe[4] = "spiel.jpg";
  BildListe[5] = "ontheroad.jpg";

var Bilder = new Array()
function Vorladen01() {for (i = 0; i < BildListe.length; i++) {Bilder[i] = new Image();Bilder[i].src = BildListe[i]; }}

Vorladen01();

function bildanzeigen(id) {document.getElementById("dasbild").src = Bilder[id].src;}

 function faerbe(id)
{
 var farben = new Array('blue','green','gray','#aac','#aaf','#abf');
 document.getElementById('areaone').style.backgroundColor=farben[id];
}
 function hide_elements()
 {
  var elementNames = hide_elements.arguments;
  for (var i=0; i<elementNames.length; i++)
   {
     var elementName = elementNames[i];
     document.getElementById(elementName).style.display='none';
   }
 }
 function show_elements()
 {
  var elementNames = show_elements.arguments;
  for (var i=0; i<elementNames.length; i++)
   {
     var elementName = elementNames[i];
     document.getElementById(elementName).style.display='block';
   }
 }

</script>

</head>

<body>



<div id="wrapper">
       <?php include "mainheader.php" ?>

      <?php include "mainmenu.php" ?>

          <div id="areaone">
                                    <p><br><br><br>Lebe Smart bedeutet : <br><br><br>
                                    Bleib geistig und k&oumlrperlich aktiv<br>
                                    <br>
                                      <br>
                                      und<br><br>



                                     + habe Spass und Freude am Leben <br><br>


                                     + gehe zufrieden durchs Leben gehen.</p>
                                    <p>
                                    <br>
                                    Dies verlangt von dir:<br><br>

                                     Aufrechterhaltung der geistigen und k&ouml;rperlichen Form.<br>



                                  <p>
                                  Vergesse nicht : <br><br>

                                  Geistige und k&ouml;rperliche Bewegung dreht die biologische Uhr um bis zu 15 Jahren zur&uuml;ck.
                                  </p>

          </div>

           <img id="dasbild" src="basis.jpg">
           <div id="textfeld"> Bleib<br> in<br> Bewegung</div>
           <br />

            <?php include "mainfooter.php" ?>

</div>



</body>
</htlm>