export const getMapBounds = (_map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.lat,
      place.lng,
    ));
  });
  return bounds;
};

// Re-center map when resizing the window
export const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
export const apiIsLoaded = (map, maps, places) => {
  // Get bounds by our places
  if (map && maps) {
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  }
};

export const checkDuplicatePlace = (data, places) => places.some(place => (place.key === data.key));
