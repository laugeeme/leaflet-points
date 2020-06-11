'use strict';

const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.showStations();
})


//search engine for gazstation
const searcher = document.querySelector('#buscar input');
searcher.addEventListener('input', ()=>{
    if (searcher.value.length > 3){
        ui.getSuggestions(searcher.value);
    } else {
        ui.showStations();
    }
})