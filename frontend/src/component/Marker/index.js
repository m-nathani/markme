import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

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

export default Marker;
