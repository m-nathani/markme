import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { GRID_COULUMS } from 'constant';
import Item from '../Item';

class PlaceList extends Component {
  constructor(props) {
    super(props);
    this.generateList = this.generateList.bind(this);
  }

  generateList(data = [], actions, isEdit) {
    return data.map(marker => (
      <Grid.Column key={marker.key} >
        <Item marker={marker} actions={actions} isEdit={isEdit} />
      </Grid.Column>
    ));
  }

  render() {
    const { data, actions, isEdit } = this.props;
    return (
      <Grid columns={GRID_COULUMS} stackable centered textAlign='center'>
        {this.generateList(data, actions, isEdit)}
      </Grid>
    );
  }
}

PlaceList.propTypes = {
  isEdit: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  data: PropTypes.array,
  actions: PropTypes.object,
};

export default PlaceList;
