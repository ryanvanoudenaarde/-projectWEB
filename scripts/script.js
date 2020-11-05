// JavaScript Document

/* Het nav menu kan in beeld komen doordat er een bepaalde class wordt gegeven aan het menu afhankelijk van of deze open of dicht hoort te staan. Als het menu dicht is krijgt het een width van 0 en als hij open is een width van 40% 

Bron die ik heb gebruikt voor dit menu: https://www.w3schools.com/howto/howto_js_sidenav.asp */


function openNav() {
    document.getElementById("mySidenav").style.width = "40%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
