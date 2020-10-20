var colors = generatecolor(6); 
var squares=document.querySelectorAll(".square");
var picked=pick();
var head=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var discolor=document.querySelector("#colordisplay");
var msg = document.querySelector("#msg");
var numbersquare=6;

for(var i=0;i<squares.length;i++)
{
	
	squares[i].style.background=colors[i];

squares[i].addEventListener("click",function()
	{
   var clickedcolor=this.style.background;
   
   if(clickedcolor===picked)
   {
   	changecolor(clickedcolor);
   	head.style.background=clickedcolor;
   	discolor.textContent=picked;
   	msg.textContent="Correct";
   	reset.textContent="PlayAgain!"

   }
   else
   {
   	this.style.background="#232323";
   	//console.log(clickedcolor,picked);
   		msg.textContent="TryAgain!!!";

   }
  
   }
   
	
	);
}
//easy.addEventListener("click",function()
//{

//})
reset.addEventListener("click",function(){
    colors = generatecolor(numbersquare); 
    picked=pick();
	
	
	for(var i=0;i<squares.length;i++)
{
	
	squares[i].style.background=colors[i];
}

   	
   	
   	reset.textContent="NewColors"

   	head.style.background="steelblue";
   	msg.textContent=".";
   


});
easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    colors = generatecolor(3); 
    picked=pick();
	
	
	for(var i=0;i<3;i++)
{
	
	
	
	squares[i].style.background=colors[i];
     
}

for(var i=3;i<6;i++)
{
squares[i].style.display="none";
}
  
 
   	
   	
   	//head.style.background="#232323";
});
hard.addEventListener("click",function(){
   easy.classList.remove("selected");
    hard.classList.add("selected");
    colors = generatecolor(numbersquare); 
    picked=pick();
	
	
	for(var i=0;i<6;i++)
{
	
	squares[i].style.background=colors[i];
}

});
function changecolor(color)
{
	for(var i=0;i<squares.length;i++)
	{
	squares[i].style.background=color;
}
}
function pick()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generatecolor(num)
{
	var arr = [];
	for(var i=0;i<num;i++)
	{
      arr.push(random())
	}
	return arr;


}
function random()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	
	return "rgb(" + r + ", " + g +", " + b + ")";

}