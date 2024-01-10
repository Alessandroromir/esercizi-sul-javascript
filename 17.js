//definire le variabili
let btn = document.getElementById("btn");
let list = document.getElementById("list");



//definire le funzioni

function showHideMenu(){
list.style.display= list.style.display == "none" ? "flex" : "none";



}




//eseguire le funzioni

btn.addEventListener("mouseover", showHideMenu);