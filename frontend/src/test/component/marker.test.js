import React from 'react';
import {
  shallow,
} from 'enzyme';
import Marker from '../../component/Marker';

describe('Marker Component', () => {
  it('should render self and subcomponents', () => {
    const text = 'my text';
    const title = 'my title';
    const placeKey = 'my place id';

    const enzymeWrapper = shallow(<Marker text={text} title={title} placeKey={placeKey} />);
    const markerProps = enzymeWrapper.find('Popup').props();

    expect(markerProps.placeKey).toBe(placeKey);
    expect(markerProps.header).toBe(title);
    expect(markerProps.content).toBe(text);
  });
});
