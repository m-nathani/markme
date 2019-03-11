import React, { Component } from 'react';
import {
  Card, Button, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    const { marker, actions, isEdit } = this.props;
    const isEdited = isEdit && isEdit.id === marker.id;
    return (
      <Card fluid raised >
        <Card.Content>
          <Icon style={{ float: 'right' }} size='large' color="blue" name="world" />
          <Card.Header>{marker.title}</Card.Header>
          <Card.Meta>{marker.key}</Card.Meta>
          <Card.Description>
            {marker.text}
            <br/><strong>Latitude: </strong>{marker.lat}
            <br/><strong>Longitude: </strong>{marker.lng}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button color='green' onClick={ () => actions.editGeocoderData(marker)} >
              Edit
            </Button>
            <Button disabled={!!isEdited } color={isEdited ? 'grey' : 'red'}
                    onClick={ () => actions.deleteGeocoderData(marker)} >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

Item.propTypes = {
  isEdit: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  actions: PropTypes.object,
  marker: PropTypes.object,
};

export default Item;
