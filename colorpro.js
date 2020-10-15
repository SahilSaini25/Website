var col= document.querySelectorAll(".square");
var colors= generateRandomColors(6);
var picked= pickedColor();
var colorDisplay= document.querySelector("#colorDisplay");
colorDisplay.textContent= picked;
var message= document.querySelector("#message");
var heading= document.querySelector("h1");
var reset= document.querySelector("#reset");
var numSquares= 6;
reset.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	picked= pickedColor();
	colorDisplay.textContent = picked;
	for (var i = 0; i < col.length; i++) {
	col[i].style.backgroundColor = colors[i];
	reset.textContent="New Colors";
	heading.style.backgroundColor="steelblue";
	message.textContent="";
}
});

var easy= document.querySelector("#easy");
var hard= document.querySelector("#hard");
easy.addEventListener("click",function(){
	numSquares=3;
    colors= generateRandomColors(numSquares);
    picked=pickedColor();
    colorDisplay.textContent= picked;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    for (var i = 0; i <col.length; i++) {
     if(colors[i])
     {
     	col[i].style.backgroundColor= colors[i];
     }
     else
     {
     	col[i].style.display="none";
     }
    }

});
hard.addEventListener("click",function(){
	numSquares=6;
	colors= generateRandomColors(numSquares);
    picked=pickedColor();
    colorDisplay.textContent= picked;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	 for (var i = 0; i <col.length; i++) {
     
     
     	col[i].style.backgroundColor= colors[i];
        col[i].style.display="block";
     
    }
})

for (var i = 0; i < col.length; i++) {
	col[i].style.backgroundColor = colors[i];
}

for (var i = 0; i < col.length; i++) {
	col[i].addEventListener("click",function(){
		var color= this.style.backgroundColor;
		
		 if(color=== picked)
		 {
		 	  for (var i = 0; i < col.length; i++) {
		 	  	col[i].style.backgroundColor=picked;
		 	  }
		 	 message.textContent="Correct";
		 	 reset.textContent="Play Again?";
		 	 heading.style.backgroundColor=color;
		 	
		 }
		 else
		 {
		 	this.style.backgroundColor= "#232323";
		 	message.textContent= "Try Again";
		 	
		 }	
	});
}


function generateRandomColors(num)
{
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r= Math.floor(Math.random()* 256);
	var g= Math.floor(Math.random()* 256);
	var b= Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickedColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}