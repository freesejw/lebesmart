var anzahlZeilen=7;
var anzahlSpalten=7;
var StopSofort;
var progressValue=0;
var timeValue=0;
var maxValueStart=-1; // gibt den rang der Zahlen an die angezeigt werden. 0 bei der ersten Anzeige, sp�ter 0 bis 9
var counter=0; // Z�hlt die Anzahl der angetppten Ziffern
var vorgabe = [0,0,0,0,0,0];
var ausgabeArray=[0,0,0,0];
var ausgabeZahl="";
var schalter=false;
var indexZelleVorgabe= [1,2,3,4];
var indexSpalteVorgabe= [1,2,3,4];
var timeForFind=10; // Zeitschranke
var zwz�hler=0;


    function firstStart()
   //Startet bei Aufruf des Programms
         {    start(anzahlZeilen,anzahlSpalten);
              document.getElementById("btnnr2").disabled = true;
          }


    function secondStart()
      //Startet mit dem Button Start mit Level  1
      {


      document.getElementById("btnnr2").disabled = false;
      document.getElementById("btnnr1").disabled = true;
      tabelle1.parentNode.removeChild(tabelle1);
      anzahlZeilen=7;
      anzahlSpalten=7;
        counter=0;
        progressValue=0;
         start(anzahlZeilen,anzahlSpalten);
         VorgabeZahlErmitteln(anzahlZeilen,anzahlSpalten);
         timeMove();
         document.getElementById("myLevelBar").style.width="0%";
         document.getElementById("wrapper").style.height="120%";
      }


  function start(row, col)

      {
       var rowBasis=row;
       var colBasis=col;
        maxValue=maxValueStart;
        node = document.getElementById("wrtabelle1");
        node.appendChild(createTable(rowBasis, colBasis, "tabelle1"), node);
      }

  function nextLevel()
  {
      //Entfernt die bestehende Tabelle und ersetzt
      // sie durch eine neue Tabelle mit neuen Zahlen

           document.getElementById("btnnr2").disabled = false;
           document.getElementById("btnnr1").disabled = true;
           tabelle1.parentNode.removeChild(tabelle1);
            maxValueStart=9;
            counter=0;
            start(anzahlZeilen,anzahlSpalten);
            changeCellSize(anzahlZeilen,anzahlSpalten);
            document.getElementById("wrapper").style.heighht="20%";
            VorgabeZahlErmitteln(anzahlZeilen,anzahlSpalten);
            timeMove();

      }


      function reset()
      {
        anzahlZeilen=7;
        anzahlSpalten=7;
        progressValue=0;
        timeValue=0;
        maxValueStart=-1;
        counter=0;
        var vorgabe = [0,0,0,0,0,0];
        var ausgabeArray=[0,0,0,0];
        var ausgabeZahl="";
        var schalter=false;
        var indexZelleVorgabe= [1,2,3,4];
        var indexSpalteVorgabe= [1,2,3,4];
        var timeForFind=10;

      }

  function createTable(row, col, id)
  {
      var myTable = document.createElement("table");
      var mytablebody = document.createElement("tbody");

      for (var j = 0; j < row; j++)
      {
          mycurrent_row = document.createElement("tr");
          for (var i = 0; i < col; i++)
           {
              mycurrent_cell = document.createElement("td");
              mycurrent_cell.addEventListener("click", function (iii, jjj)
               {
                //////////////////////////////////////////////////////////////////////////////////////

                  return function ()
                  {
                       pruef(jjj,iii,counter);
                       console.log("jjj  " + jjj + "  iii  " + iii + " counter " + counter);
                       if (StopSofort==true)
                            {
                               myTable.setAttribute("data-locked", "true");
                               // progressValue=0;
                                playSound();
                                suchZahl.value ="Falsche Ziffer. Gesucht war "
                                 + ausgabeZahl +  ". Beginn wieder mit Start";
                                document.getElementById("btnnr2").disabled = true;
                                document.getElementById("btnnr1").disabled = false;
                            }


                      if (!myTable.getAttribute("data-locked"))

                         {this.style.backgroundColor = "yellow";

                            if (vorgabe[0]<= counter)
                             {
                                myTable.setAttribute("data-locked", "true");
                                suchZahl.value ="Level geschafft, auf zum n�chsten Level";
                                levelMove();

                                 anzahlZeilen = anzahlZeilen +1;
                                 anzahlSpalten =anzahlSpalten+1;
                                 document.getElementById("btnnr2").disabled = false;
                                 document.getElementById("btnnr1").disabled = true;
                             }

                             if (progressValue >= 100)

                               {
                                suchZahl.value =" Gl�ckwunsch, alle Level erfolgreich geschafft!" ;
                                progressValue=100;
                                document.getElementById("btnnr2").disabled = true;
                                document.getElementById("btnnr1").disabled = false;
                               }
                        }
                      }
                   ////////////////////////////////////////////////////////////////////////////////////////////////
                }
              (i, j));

              currenttext = document.createTextNode(Math.floor(Math.random() * 10));  //random(maxValue));
              mycurrent_cell.appendChild(currenttext);
              mycurrent_row.appendChild(mycurrent_cell);
          }

          mytablebody.appendChild(mycurrent_row);
      }

      myTable.appendChild(mytablebody);
      myTable.setAttribute("ID", id);
      return myTable;
  }


 function pruef(z,s,c){

   // z Zeilenposition der geclickten Zahl
   // s Spaltenposition der geclickten Zahl
   // c counter , Anzahl Durchl�ufe
   // vorgabe Array : L�nge der Zahl(Anzahl Ziffern) , Zeilenindex , Spaltenindizes.

    var schalter=false;
    StopSofort=false;

    var zahlAusClick = document.getElementById('tabelle1').rows[z].cells[s].innerHTML;


    for (var i = 1;i<= vorgabe[0];i++)
        {
         if (ausgabeArray[i-1]==zahlAusClick)
              {
                   schalter = true;
                    StopSofort=false;
              }
         }

        if (schalter==false)
           {
           StopSofort=true;
           }

      if (StopSofort==false)
      // Alle Ziffern der vorgegebenen Zahl richtig angeklickt
       {counter++;}

      return StopSofort;

    }


 function VorgabeZahlErmitteln(z,s){

 // Diese Funktion ermittelt die Zahl die vorgegeben wird und die wieder durch clicken best�tigt werden muss
 // Sie greift auf die Funktion searchValue zu
 // in dem Array vorgabe befinden sich die L�nge der Zahl,der Zeilenindex und die Spaltenindizes.
 // Dieses Array wird an die Funktion pruef �bergeben.
 //
 // z : Anzahl der Zeilen
 // s : Anzahl der Spalten der Tabelle


 ausgabeZahl="";
 var zw=random(9);

 // zw ermittelt die Anzahl der Ziffern der zu findenen Zahl
 if (zw < 2) {laenge=4;}
     else if (zw < 6) {laenge=3;}
     else {laenge=2; }

 var zindex=random(z);
 var sindex=random(s-laenge);
 sindex=sindex-1;
 vorgabe[0]=laenge;
 vorgabe[1]=zindex;
 console.log("zindex  " + zindex + "  sindex  " + sindex + "  z " + z);
      for (var i = 1; i <= laenge; i++)

      {
          sindex++ ;
          vorgabe[1+i]=sindex;
          // in  indexZelleVorgabe und  indexSpalten speichert indexwerte der ausgabezahl. wird bei fehler angezeigt
          indexZelleVorgabe[i-1]=zindex;
          indexSpalteVorgabe[i-1]=sindex;
          zw= document.getElementById('tabelle1').rows[zindex].cells[sindex].innerHTML;
          ausgabeArray[i-1]=zw;

         ausgabeZahl=ausgabeZahl  + (zw.toString()).replace(/\s/g, "");
       }
 suchZahl.value = " Suche die Zahl:  " + ausgabeZahl ;

  }



   function levelMove()
    {
      var elem = document.getElementById("myLevelBar");

      if (progressValue >= 100)
       {progressValue=0; }

          else
          {
             progressValue=Math.min((progressValue+10), 100);
             elem.style.width = progressValue + '%';
          }
      }

      function timeMove()

      {

      // Misst die Zeit. Bricht bei Zeit�berschreitung den Vorgang ab
      // gesteuert wird das �ber width und die globale Variable timeForFind

       var elem = document.getElementById("myTimeBar");
       //var width = 0;
       var id = setInterval(frame,1000);
       function frame()
       {

         if(StopSofort==true)
               {
               clearInterval(id);
               }
         if (timeValue >= 100)

                {
                  timeValue=0;
                  counter=0;
                  progressValue=0;
                  clearInterval(id);
                  playSound();
                  suchZahl.value = " Abbruch wegen Zeit�berschreitung. Neuanfang mit Start Level 1" ;
                  zeigZahl(indexZelleVorgabe,indexSpalteVorgabe);
                  document.getElementById("btnnr2").disabled = true;
                  document.getElementById("btnnr1").disabled = false;
                  }

           else
           {
             timeValue+=(100/timeForFind);

             elem.style.width = timeValue + '%';

             if (counter==vorgabe[0])
                {
                timeValue=0;
                 clearInterval(id);
                 }

            }
          }
        }


 function random(max)
      {
        return Math.floor((Math.random() *max)+1);
      }

 function changeCellSize(z,s){

 // Reduziert die Zellgr��e wenn die Anzahl der Spalten und Zeilen ansteigt.

  var tds = document.getElementsByTagName('td');

  for (var i = 0; i < tds.lenght; i++)
      {
      console.log("w  " + tds[i].style.width + "  h " +  tds[i].style.height);
      tds[i].style.width =(43*7/s) + 'px';
      tds[i].style.height =(43*7/z) + 'px';
      console.log("hi");
      console.log("w  " + tds[i].style.width + "  h " +  tds[i].style.height);
      }
  }

  function zeigZahl(z,s) {
      // Zeigt die gesuchte Zahl an bei Zeit�berschreitung
      for (var i = 0; i <= laenge-1; i++)

      {
      var zelle=s[i];
      var spalte=z[i];

      document.getElementById('tabelle1').rows[spalte].cells[zelle].style.backgroundColor = "#0090E0";
      }
  }

  var playSound = (function beep() {
var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
return function() {
    snd.play();
}
})();