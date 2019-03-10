import Geocode from 'react-geocode';

export default class Geocoder {
  constructor(apiKey, debug = false) {
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey(apiKey);
    // Enable or disable logs. Its optional.
    Geocode.enableDebug(debug);
  }

  formatResult(response) {
    const { lat, lng } = response.results[0].geometry.location;
    return {
      lat,
      lng,
      text: response.results[0].formatted_address || '',
      key: response.results[0].place_id,
      title: response.results[0].address_components[0].long_name,
    };
  }

  async fromAddress(address) {
    // Get latidude & longitude from address.
    return Geocode.fromAddress(address);
  }

  async fromLatLng(lat, lng) {
    // Get address from latidude & longitude.
    return Geocode.fromLatLng(lat, lng);
  }
}
