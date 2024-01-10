let input = document.getElementById('input');
let paragrafo=document.getElementById('paragrafo');
let btn = document.getElementById('btn');


function modifyText() {
    
    paragrafo.innerHTML=input.value;
    



};

btn.addEventListener('click', modifyText);