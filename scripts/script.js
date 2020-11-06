// JavaScript Document

/* Het nav menu kan in beeld komen doordat er een bepaalde breedte wordt gegeven aan het menu afhankelijk van of deze open of dicht hoort te staan. Als het menu dicht is krijgt het een width van 0 en als hij open is een width van 40% 

Bron die ik heb gebruikt voor dit menu: https://www.w3schools.com/howto/howto_js_sidenav.asp */


var openbtn = document.querySelector('.ham');
var closebtn = document.querySelector('.closebtn');



openbtn.addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "40%";
});


closebtn.addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = 0;
});
