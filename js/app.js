'use strict';

const ui = new UI();

/* //on dom loaded print all stations, but it's too much size
 document.addEventListener('DOMContentLoaded', () => {
  ui.showStations();
}); */

//search engine for gazstation
const searcher = document.querySelector('#buscar input');


searcher.addEventListener('input', () => {
  if (searcher.value.length > 3) {
    ui.getSuggestions(searcher.value.toUpperCase());
  } else {
    ui.showStations();
  }
});
