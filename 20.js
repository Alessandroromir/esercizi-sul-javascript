//dichiarare le variabili
let checkBox=document.getElementById("checkBox");



//dichiarare le funzioni
function visibility() {
    
    let paragraph=document.getElementById("paragraph");
    

    if(paragraph.style.display=="flex"){
    paragraph.style.display="none";
 

}else{paragraph.style.display="flex";}
};




//eseguire le funzioni

checkBox.addEventListener("click", visibility);


