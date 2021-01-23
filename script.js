const button = document.getElementById("button");
const input = document.getElementById("work__form-input");
const label = document.getElementsByClassName("work__form-label")

button.addEventListener("click",function(){
  input.style.border = "1px solid hsl(354, 100%, 66%)";
  var styleElem = document.head.appendChild(document.createElement("style"));
  styleElem.innerHTML = "label:before {opacity:1;visibility:visible;}";
}); 
input.addEventListener("click",function(){
    input.style.border = "1px solid transparent";
});