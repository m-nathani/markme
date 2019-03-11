import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Item from '../Item';

class PlaceList extends Component {
  constructor(props) {
    super(props);
    this.generateList = this.generateList.bind(this);
  }

  generateList(data, actions, isEdit) {
    return data.map(marker => (
      <Grid.Column key={marker.key}>
        <Item marker={marker} actions={actions} isEdit={isEdit} />
      </Grid.Column>
    ));
  }

  render() {
    const { data, actions, isEdit } = this.props;
    return (
      <Grid columns={2} stackable centered textAlign='center'>
        {this.generateList(data, actions, isEdit)}
      </Grid>
    );
  }
}

export default PlaceList;
