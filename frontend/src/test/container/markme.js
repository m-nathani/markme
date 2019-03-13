import React from 'react';
import {
  shallow,
} from 'enzyme';
import MarkMe from '../../container/MarkMe';

describe('MarkMe Container', () => {
  it('should render self and subcomponents', () => {
    const enzymeWrapper = shallow(< MarkMe root={{}} actions={{}} />);
    const markMeSegmentProps = enzymeWrapper.find('Segment');

    expect(markMeSegmentProps.props().className).toBe('mapHeight');
    expect(markMeSegmentProps.children.props().className).toBe('mapHeight');
    expect(markMeSegmentProps.children.children.props().className).toBe('mapHeight');
  });
});
