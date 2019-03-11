import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Marker = props => (
  <div
    alt={props.text}
  >
    <Popup
      key={props.key}
      trigger={ <Icon name='map pin' size="huge" color="red" /> }
      header={props.title}
      content={props.text}
    />
  </div>
);

Marker.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.string,
};

export default Marker;
