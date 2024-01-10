// Definisci le variabili
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let images = document.querySelectorAll('#box img');

let currentIndex = 0;

function showImage(index) {
    // Nascondi tutte le immagini
    images.forEach(image => image.style.display = 'none');

    // Mostra solo l'immagine corrente
    images[index].style.display = 'block';
}

function enhanceImg(direction) {
    // Avanti o Indietro
    if (direction === 'btn1') {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    showImage(currentIndex);
}

// Mostro la prima immagine all'inizio
showImage(currentIndex);

// Aggiungo gli eventi ai pulsanti
btn1.addEventListener('click', () => enhanceImg('btn1'));
btn2.addEventListener('click', () => enhanceImg('btn2'));