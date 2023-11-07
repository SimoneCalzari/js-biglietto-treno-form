'use strict';

const nomeCognome = document.getElementById('nome-cognome');
const kmViaggio = document.getElementById('km-viaggio');
const etaUtente = document.getElementById('eta-utente');
const btnGenera = document.getElementById('btn-genera');
const btnAnnulla = document.getElementById('btn-annulla');

// console.log(nomeCognome);
// console.log(kmViaggio);
// console.log(etaUtente);
// console.log(btnGenera);
// console.log(btnAnnulla);

const pricePerKm = 0.21;
const discountMinorenni = 20;
const discountOver65 = 40;

btnGenera.addEventListener ('click',
  function() {
    const valNomeCognome = nomeCognome.value;
    // console.log(valNomeCognome);
    const valKmViaggio = Number(kmViaggio.value);
    // console.log(valKmViaggio);
    const valEtaUtente = etaUtente.value;
    // console.log(valEtaUtente);

    let priceTicket = pricePerKm * valKmViaggio;

    if (valEtaUtente === 'Minorenne') {
      priceTicket *= (1 - discountMinorenni / 100);
    } else if (valEtaUtente === 'Over65') {
      priceTicket *= (1 - discountOver65 / 100);
    }

    console.log('Il prezzo del biglietto è:', priceTicket.toFixed(2));
  }
)

btnAnnulla.addEventListener ('click',
  function() {
    nomeCognome.value = '';
    kmViaggio.value = '';
    etaUtente.value = 'Minorenne';
  } 
)







