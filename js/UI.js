'use strict';

class UI {
  constructor() {
    this.api = new API();

    //Create markers
    this.markers = new L.LayerGroup();

    //Start map
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

  showStations() {
    this.api.getData().then((data) => {
      const result = data.responseJSON.features;

      this.showPin(result);
    });
  }

  showPin(dataPin) {



    //clear markers before call it
    this.markers.clearLayers();

    //browse the stations
    dataPin.forEach((data) => {
      //destructuring
      const { Longitud, Latitud, Municipio } = data.attributes;


      //add the pin
      const marker = new L.marker([Latitud, Longitud]);
    
      this.markers.addLayer(marker);
    });
    this.markers.addTo(this.mapa);
  }
}
