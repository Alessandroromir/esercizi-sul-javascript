let input = document.getElementById('input')
let text = document.getElementById('text')


function changeElement(){
    text.style.color = 'red'


}


input.addEventListener('input', changeElement)