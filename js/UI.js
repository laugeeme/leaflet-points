'use strict';

class UI {
  constructor() {

    this.api = new API();

    // Iniciar el mapa
    this.mapa = this.inicializarMapa();
  }

  inicializarMapa() {
    // Inicializar y obtener la propiedad del mapa
    const map = L.map('mapa').setView([40.4636688, -3.7492199], 6);

    const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ' + enlaceMapa + ' Contributors',
      maxZoom: 18,
    }).addTo(map);
    return map;
  }

  showStations(){
      this.api.getData()
        .then(data => {
            console.log(data);
        })

  }
}
