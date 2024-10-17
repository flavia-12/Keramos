

  function reveal() {
    var reveals = document.querySelectorAll(".fade-left, .fade-right, .fade-up, .fade-down"); // Seleziona gli elementi con classi specifiche
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight; // Altezza della finestra
      var elementTop = reveals[i].getBoundingClientRect().top; // Posizione dell'elemento
      var elementVisible = 150; // Quanto deve essere visibile per attivare l'animazione
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active"); // Aggiunge la classe "active" per attivare l'animazione
      } else {
        reveals[i].classList.remove("active"); // Rimuove la classe "active" se non è visibile
      }
    }
  }
  
  window.addEventListener("scroll", reveal); // Ascolta l'evento di scroll
  reveal(); // Esegui la funzione all'apertura della pagina
  


  