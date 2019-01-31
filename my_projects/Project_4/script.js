var up = 230;
var side = 20;

function myMoveUp(){
  up -= 20;
  document.getElementById("animate").style.top = up + "px"; 
}
function myMoveRight(){
  side += 20;
  document.getElementById("animate").style.left = side + "px"; 
}
function myMoveDown(){
  up += 20;
  document.getElementById("animate").style.top = up + "px"; 
}
function myMoveLeft(){
  side -= 20;
  document.getElementById("animate").style.left = side + "px"; 
}