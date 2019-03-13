import React, { Component } from 'react';
import {
  Segment, Grid,
} from 'semantic-ui-react';
import Maps from 'component/Map';
import PlaceList from 'component/List';
import Search from 'component/Search';
import Error from 'component/Error';
import markMeService from 'service/api';

class MarkMe extends Component {
  constructor(props) {
    super(props);
    this.getMarkers = this.getMarkers.bind(this);
  }

  async getMarkers() {
    const { actions } = this.props;
    try {
      const response = await markMeService.listGeocode();
      actions.loadGeoderData(response.data);
    } catch (error) {
      console.log(error); // eslint-disable-line
    }
  }

  componentDidMount() {
    this.getMarkers();
  }

  render() {
    const { root, actions } = this.props;
    return (
      <Segment placeholder>
      <Grid divided columns={2} stackable textAlign='center'>
        <Grid.Row>
          <Grid.Column style={{ height: '100%' }} >
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
