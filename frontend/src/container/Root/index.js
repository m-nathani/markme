import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RootActions from 'action/root';
import {
  Segment,
} from 'semantic-ui-react';
import MarkMe from '../MarkMe';


function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(RootActions, dispatch) };
}

class Root extends Component {
  render() {
    const { root, actions } = this.props;
    return (
      <Segment basic textAlign='center'>
        <MarkMe root={root} actions={actions} />
      </Segment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
