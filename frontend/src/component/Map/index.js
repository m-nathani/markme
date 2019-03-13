import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from 'config';
import { apiIsLoaded } from 'service';
import { DEFAULT_LOCATION, DEFAULT_ZOOM } from 'constant';
import PropTypes from 'prop-types';
import Marker from '../Marker';

class Map extends Component {
  constructor(props) {
    super(props);
    this.renderMarker = this.renderMarker.bind(this);

    this.state = {
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
    };
  }

  apiHasLoaded(map, maps, places) {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
    apiIsLoaded(map, maps, places);
  }

  renderMarker(marker) {
    return (
      <Marker
        key={marker.key}
        lat={marker.lat}
        lng={marker.lng}
        text={marker.text}
        placeKey={marker.key}
        title={marker.title}
      />
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.mapKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps, data)}
          options={ { panControl: true }}
        >
        { data.map(marker => this.renderMarker(marker)) }

        </GoogleMapReact>
      </div>
    );
  }

  componentDidUpdate() {
    const { data } = this.props;
    const { mapApiLoaded, mapInstance, mapApi } = this.state;
    if (mapApiLoaded) apiIsLoaded(mapInstance, mapApi, data);
  }
}


Map.propTypes = {
  data: PropTypes.array,
  zoom: PropTypes.number,
  mapKey: PropTypes.string,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

Map.defaultProps = {
  mapKey: config.apiKey,
  center: DEFAULT_LOCATION,
  zoom: DEFAULT_ZOOM,
  data: [],
};

export default Map;
