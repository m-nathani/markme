// settings configured here will be merged into the final config object.
export default {
  apiKey: process.env.API_KEY || 'Your api key',
  lang: process.env.language || 'en',
  geocodeDebug: process.env.GEOCODE_DEBUG,
};
