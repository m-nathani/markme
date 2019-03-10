import React, { Component } from 'react';
import {
  Segment, Grid,
} from 'semantic-ui-react';
import Maps from 'component/Map';
import PlaceList from 'component/List';
import Search from 'component/Search';
import Error from 'component/Error';

class MarkMe extends Component {
  render() {
    const { root, actions } = this.props;
    return (
      <Segment placeholder>
      <Grid divided columns={2} stackable textAlign='center'>
        <Grid.Row>
          <Grid.Column verticalAlign='middle'>
            <Maps { ...root } />
          </Grid.Column>
          <Grid.Column>
            <Search { ...root } actions={actions} />
            <Error {...root } />
            <PlaceList { ...root } actions={actions} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    );
  }
}

export default MarkMe;
