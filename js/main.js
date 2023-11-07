'use strict';

// elementi del dom necessari per il problema
const nomeCognome = document.getElementById('nome-cognome');
const kmViaggio = document.getElementById('km-viaggio');
const etaUtente = document.getElementById('eta-utente');
const btnGenera = document.getElementById('btn-genera');
const btnAnnulla = document.getElementById('btn-annulla');

// valori per calcolo biglietto
const pricePerKm = 0.21;
const discountMinorenni = 20;
const discountOver65 = 40;

// click bottone genera
btnGenera.addEventListener ('click',
  function() {
    // valori input in assegnati a costanti
    const valNomeCognome = nomeCognome.value;
    const valKmViaggio = Number(kmViaggio.value);
    const valEtaUtente = etaUtente.value;

    // comparsa biglietto sulla pagina web
    document.getElementById('ticket-container').classList.add('appari');

    // tipo di tariffa biglietto caso standard
    document.querySelector('#ticket .ticket-body .ticket-body-sect:nth-child(2) div').innerHTML = 'Tariffa Standard';
    
    // formula calcolo prezzo biglietto - casi under18 , over65 calcolo più tariffa biglietto
    let priceTicket = pricePerKm * valKmViaggio;

    if (valEtaUtente === 'Minorenne') {
      priceTicket *= (1 - discountMinorenni / 100);
      document.querySelector('#ticket .ticket-body .ticket-body-sect:nth-child(2) div').innerHTML = 'Tariffa Under18';
    } else if (valEtaUtente === 'Over65') {
      priceTicket *= (1 - discountOver65 / 100);
      document.querySelector('#ticket .ticket-body .ticket-body-sect:nth-child(2) div').innerHTML = 'Tariffa Over65';
    }

    // prezzo finale su console
    console.log('Il prezzo del biglietto è:', priceTicket.toFixed(2));
     
    // campi del biglietto
    document.querySelector('#ticket .ticket-body .ticket-body-sect:nth-child(1) div').innerHTML = valNomeCognome;
    document.querySelector('#ticket .ticket-body .ticket-body-sect:nth-child(3) div').innerHTML = Math.floor(Math.random() * 10) + 1;
    document.querySelector('#ticket .ticket-body .ticket-body-sect:nth-child(4) div').innerHTML = Math.floor(Math.random() * 100000) + 1;
    document.querySelector('#ticket .ticket-body .ticket-body-sect:nth-child(5) div').innerHTML = priceTicket.toFixed(2) + ' €';
    
  }
)

// click bottone annulla
btnAnnulla.addEventListener ('click',
  function() {
    //scomparsa biglietto pagina web
    document.getElementById('ticket-container').classList.remove('appari');

    // reset valori degli input del calcolatore prezzo
    nomeCognome.value = '';
    kmViaggio.value = '';
    etaUtente.value = 'Minorenne';
  } 
)







