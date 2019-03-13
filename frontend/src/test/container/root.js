import React from 'react';
import {
  shallow,
} from 'enzyme';
import Root from '../../container/Root';

describe('Root Container', () => {
  it('should render self and subcomponents', () => {
    const enzymeWrapper = shallow(<Root root={{}} actions={{}} />);
    const rootSegmentProps = enzymeWrapper.find('Segment');

    expect(rootSegmentProps.props().className).toBe('mapHeight');
  });
});
