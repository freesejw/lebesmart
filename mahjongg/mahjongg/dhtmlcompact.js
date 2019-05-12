///////////////////////////////////////////////////////////////////////
//
// Layer-Functions Version 1.00 / 21-Feb-1999.
// Written by Sascha Noormann. All rights reserved.
//
///////////////////////////////////////////////////////////////////////
//
// Beschreibung: siehe dhtml.js!
//
///////////////////////////////////////////////////////////////////////

// Show
function SHW(name,flag){
  if(document.layers){
    if(document.layers[''+name]){
      if(flag){document.layers[''+name].visibility="show";}
      else{document.layers[''+name].visibility="hide";}
  } }else{
    if(document.all){
      if (document.all[''+name]){
        if(flag){document.all[''+name].style.visibility="visible";}
        else{document.all[''+name].style.visibility="hidden";}
} } } }

// Move
function MOV(name,x,y){
  if(document.layers){
    if(document.layers[''+name]){
      document.layers[''+name].left=x;
      document.layers[''+name].top=y;
  } }else{
    if(document.all){
      if(document.all[''+name]){
        document.all[''+name].style.left=x;
        document.all[''+name].style.top=y;
} } } }
