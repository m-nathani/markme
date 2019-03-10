import config from 'config';
import Geocoder from './geocoder';

export * from './maps';
export const geodCoderService = new Geocoder(config.apiKey, config.geocodeDebug);
