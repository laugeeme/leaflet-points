'use strict';

class API {
  async getData() {
    const data = await fetch(
      'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Gasolinerasv2/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
    );

    const responseJSON = await data.json();

    return {
      responseJSON,
    };
  }
}

/* (`https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Gasolinerasv2/FeatureServer/0/query?where=Municipio=${input.value}&outFields=*&outSR=4326&f=json`); */
