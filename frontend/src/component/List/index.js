import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Item from '../Item';

class PlaceList extends Component {
  constructor(props) {
    super(props);
    this.generateList = this.generateList.bind(this);
  }

  generateList(data, actions) {
    return data.map(marker => (
      <Grid.Column key={marker.key}>
        <Item marker={marker} actions={actions} />
      </Grid.Column>
    ));
  }

  render() {
    const { data, actions } = this.props;
    return (
      <Grid columns={2} stackable centered textAlign='center'>
        {this.generateList(data, actions)}
      </Grid>
    );
  }
}

export default PlaceList;
