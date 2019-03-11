import React, { Component } from 'react';
import { Message, Transition } from 'semantic-ui-react';

class Error extends Component {
  render() {
    const { error, message } = this.props;
    return (
      <Transition.Group animation="drop" duration={500}>
        {error && <Message size="large" error header={message || 'No result Found!'} />}
      </Transition.Group>
    );
  }
}
Error.propType = {

};

export default Error;
