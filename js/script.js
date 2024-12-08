/*---menu hamburger---*/
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Aggiunge o rimuove la classe 'active' al clic
});



/*---============================JS DATA / ORA / TEMPO E LOCALITA---===================================*/
document.addEventListener("DOMContentLoaded", function() {
  // Funzione per aggiornare la data
  function aggiornaData() {
      const oggi = new Date();
      const opzioniData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      document.getElementById("data").innerText = oggi.toLocaleDateString('it-IT', opzioniData);
  }
  
  // Funzione per aggiornare l'ora
  function aggiornaOra() {
      const oggi = new Date();
      const opzioniOra = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      document.getElementById("ora").innerText = oggi.toLocaleTimeString('it-IT', opzioniOra);
  }

  // Funzione per ottenere il tempo e la località
  async function aggiornaTempoLocalita() {
      const apiKey = 'YOUR_API_KEY'; // Sostituisci con la tua chiave API
      const lat = '41.9028'; // Latitudine di Roma
      const lon = '12.4964'; // Longitudine di Roma

      try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=it&units=metric`);
          if (!response.ok) {
              throw new Error(`Errore nella risposta: ${response.status}`);
          }
          const data = await response.json();

          // Estrai la località e il tempo
          const localita = `${data.name}, ${data.sys.country}`;
          const tempo = `${data.weather[0].description}, ${data.main.temp}°C`;

          // Aggiorna la località e il tempo
          document.getElementById("tempo").innerText = `${localita} - ${tempo}`;
      } catch (error) {
          console.error("Errore nel recupero delle informazioni meteo:", error);
          document.getElementById("tempo").innerText = "Impossibile recuperare le informazioni meteo.";
      }
  }

  // Aggiorna la data e l'ora all'avvio
  aggiornaData();
  aggiornaOra();
  
  // Aggiorna l'ora ogni secondo
  setInterval(aggiornaOra, 1000);

  // Aggiorna la località e il tempo all'avvio e poi ogni ora
  aggiornaTempoLocalita();
  setInterval(aggiornaTempoLocalita, 3600000); // Ogni ora
});
/*---=================================================================================================---*/


/*================================================Codice slide(//1)========================================================*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // il codice del timer - cambia l'immagine ogni 5s
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
/*---===================================================================================================---*/


/*============================================Codice JS dei container rotondi=================================================*/

   // Funzione per ingrandire l'immagine al passaggio del mouse
   function zoomIn(element) {
    element.querySelector('img').style.transform = 'scale(1.3)'; // Ingrossa leggermente l'immagine
  }

  // Funzione per ripristinare le dimensioni originali al mouseout
  function zoomOut(element) {
    element.querySelector('img').style.transform = 'scale(1)'; // Ripristina le dimensioni originali
  }




/*---================================codice container totondi (chi_sono)*/
// Funzione per ingrandire l'immagine al passaggio del mouse
function zoomIn(element) {
 element.querySelector('img').style.transform = 'scale(1.3)'; // Ingrossa leggermente l'immagine
}

// Funzione per ripristinare le dimensioni originali al mouseout
function zoomOut(element) {
 element.querySelector('img').style.transform = 'scale(1)'; // Ripristina le dimensioni originali
}

