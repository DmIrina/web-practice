function aboutSXY(){
  alert("She is the best, that's all")
}

function aboutYae(){
  let text;
if (confirm("Do you agree?") == true) {
  text = "You have a good taste";
} else {
  text = "What's wrong with you?";
}
  alert(text);
}

function changeSXY(){
  var element = document.getElementById("SXY");
  element.className = "SXY";
  element.innerHTML = "Huh, Su Xiyan is still the best woman"
}