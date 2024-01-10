Fap Pizzino, [10/01/2024 16:37]
# LE PARTI DEL CODICE JAVASCRIPT

1. **Selezione degli elementi del DOM:**
   
   ```javascript
   const previous = document.getElementById('previous');
   const next = document.getElementById('next');
   const images = document.querySelectorAll('.box img');
   ```

   Qui stiamo selezionando gli elementi del DOM con gli id "previous" e "next" per i pulsanti, e stiamo anche selezionando tutte le immagini all'interno dell'elemento con la classe "box".

2. **Inizializzazione dell'indice corrente:**
   
   ```javascript
   let currentIndex = 0;
   ```

   Stiamo creando una variabile currentIndex per tenere traccia dell'indice dell'immagine correntemente visualizzata.

3. Definizione della funzione `showImage`:
   
      function showImage(index) {
       images.forEach(image => image.style.display = 'none');
       images[index].style.display = 'block';
   }
   

   Questa funzione accetta un indice e nasconde tutte le immagini impostando il loro stile display su 'none', quindi mostra solo l'immagine corrispondente impostando lo stile display su 'block'.

4. Definizione della funzione `enhanceImg`:
   
      function enhanceImg(direction) {
       if (direction === 'next') {
           currentIndex = (currentIndex + 1) % images.length;
       } else {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
       }
       showImage(currentIndex);
   }
   

   Questa funzione è chiamata quando si fa clic sui pulsanti "Precedente" o "Successivo". Se il parametro direction è 'next', incrementa l'indice in modo circolare all'interno della lunghezza delle immagini. Se direction è 'previous', decrementa l'indice in modo circolare. Infine, chiama showImage per visualizzare l'immagine corrente.

5. Mostra la prima immagine all'inizio:
   
      showImage(currentIndex);
   

   Questo assicura che la prima immagine sia visibile all'avvio dell'applicazione.

6. Aggiunta degli eventi ai pulsanti:
   
      previous.addEventListener('click', () => enhanceImg('previous'));
   next.addEventListener('click', () => enhanceImg('next'));
   

   Qui stiamo ascoltando gli eventi di clic sui pulsanti "Precedente" e "Successivo". Quando viene cliccato uno dei pulsanti, viene chiamata la funzione enhanceImg con la direzione corrispondente.

In sintesi, il codice gestisce la visualizzazione delle immagini in un carosello, consentendo la navigazione tra le immagini precedenti e successive attraverso i pulsanti.

# LE DUE FUNZIONI NEL DETTAGLIO

### Funzione showImage:

function showImage(index) {
    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
}

- showImage è una funzione che accetta un parametro index, che rappresenta l'indice dell'immagine che desideriamo visualizzare.

- images.forEach(image => image.style.display = 'none');: Qui stiamo usando il metodo forEach per iterare su tutte le immagini selezionate. Per ognuna di esse, stiamo impostando lo stile display su 'none', nascondendo così tutte le immagini.

- images[index].style.display = 'block';: Dopo aver nascosto tutte le immagini, stiamo impostando lo stile display dell'immagine corrente (indicata dall'`index`) su 'block', rendendola visibile.

In sostanza, questa funzione si occupa di nascondere tutte le immagini tranne quella specificata dall'indice, che diventa quindi visibile.


function showImage(index) {
    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
}

 Arrow Function:
   
      images.forEach(image => image.style.display = 'none');
   

   Qui stiamo utilizzando una arrow function, che è una forma concisa di scrivere una funzione in JavaScript. Nell'arrow function:

   - images.forEach è un metodo che itera su ogni elemento nell'array images.
   - image => image.style.display = 'none' è l'arrow function stessa. Accetta ogni elemento image e imposta il suo stile display su una volta un effetto di ciclo all'indietro.

L'utilizzo di `% images.length` è importante per garantire che l'indice rimanga all'interno del range delle immagini disponibili, evitando errori o comportamenti indesiderati quando si raggiungono gli estremi dell'array delle immagini.