import React from 'react';
import {
  shallow,
} from 'enzyme';
import Error from '../../component/Error';

describe('Error Component', () => {
  it('should render self and subcomponents', () => {
    const error = true;
    const enzymeWrapper = shallow(< Error error = {error} message = "my test message" />);
    const messageProps = enzymeWrapper.find('Message').props();

    expect(messageProps.error).toBe(error);
    expect(messageProps.size).toBe('large');
    expect(messageProps.header).toBe('my test message');
  });
});
