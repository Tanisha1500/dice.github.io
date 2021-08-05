var first=Math.floor((Math.random()*6)+1);
var second=Math.floor((Math.random()*6)+1);

var image1="images/dice"+first+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",image1);


var image2="images/dice"+second+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",image2);



if(first>second)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(second>first)
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else {

  document.querySelector("h1").innerHTML="Draw";
}
