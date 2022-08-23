var header = document.querySelector("a")

function getRandomcolor(){
    var letters = "0123456789ABCDEF";
    var color ='#';
    for(var i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];

    }
    return color
}


function changeHeaderColor(){
    colorInput =getRandomcolor();
    header.style.color = colorInput
}

setInterval("changeHeaderColor()",500);setInterval("changeHeaderColor()",500);



var text = document.getElementById("01");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
for(let i=0; i< splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}
var char = 0;
var timer = setInterval(onTick, 600);

function onTick(){
  var span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }

  function complete(){
    clearTimeout(timer);
    timer = null;
  }
