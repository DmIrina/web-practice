function doLime(){
  var l = document.getElementById("c1");
  l.style.backgroundColor = "lime";

}

function doYellowSquares(){
  var y = document.getElementById("c1");
  y.style.backgroundColor = "white";
  var ctx = y.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,40,40);
  ctx.fillRect(60,10,40,40);
  
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.fillText("Hello", 30, 100);
  
}

function changeColor(){
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  c1.className = "bluebackground";
  c2.className = "yellowbackground"; 
}

function doBlue(){
  var b = document.getElementById("c1");
  b.style.backgroundColor = "blue";
  var ctx = b.getContext("2d");
  ctx.clearRect(0, 0, b.width, b.height); 
}

function doGreen(){
  var g = document.getElementById("c1");
  g.style.backgroundColor = "lightgreen";
}

function doUkraine(){
  var b = document.getElementById("c1");
  b.style.backgroundColor = "blue";  
  var ctx = b.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(10,10,100,40);
  
  var y = document.getElementById("c2");
  y.style.backgroundColor = "yellow";
  var ctx = y.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(10,10,100,40);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("слава Україні", 90, 90);
}

function doYellow(){
  var y = document.getElementById("c2");
  y.style.backgroundColor = "yellow";
  var ctx = y.getContext("2d");
  ctx.clearRect(0, 0, y.width, y.height); 
}