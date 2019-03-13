import React from 'react';
import {
  shallow,
} from 'enzyme';
import Map from '../../component/Map';
import { DEFAULT_ZOOM, DEFAULT_LOCATION } from '../../constant/application';

describe('Map Component', () => {
  const marker = {
    id: 1, title: 'titles', text: 'text', lat: 1, lng: 2, key: 'my key',
  };
  const zoom = DEFAULT_ZOOM;
  const center = DEFAULT_LOCATION;
  const mapKey = 'my key';
  const enzymeWrapper = shallow(<Map mapKey={mapKey} center={center} zoom={zoom} data={[marker]} actions={{}} />);
  const mapDiv = enzymeWrapper.find('div').first();

  it('should render self and subcomponents', () => {
    expect(mapDiv.children.length).toBe(1);
  });

  it('should render googleMaps div with 100% in Maps', () => {
    expect(mapDiv.props().style).toEqual({ height: '100%', width: '100%' });
  });

  it('should render googleMaps in Maps', () => {
    const googleMapsProps = mapDiv.children().first().props();

    expect(googleMapsProps.bootstrapURLKeys).toEqual({ key: mapKey });
    expect(googleMapsProps.defaultCenter).toEqual(center);
    expect(googleMapsProps.defaultZoom).toEqual(zoom);
  });

  it('should render marker in Maps', () => {
    const markerProps = mapDiv.children().first().find('Marker').first()
      .props();

    expect(markerProps.lat).toBe(marker.lat);
    expect(markerProps.lng).toBe(marker.lng);
    expect(markerProps.placeKey).toBe(marker.key);
    expect(markerProps.title).toBe(marker.title);
    expect(markerProps.text).toBe(marker.text);
  });
});
