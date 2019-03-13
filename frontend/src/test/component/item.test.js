import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../component/Item';

describe('Item Component', () => {
  const editGeocoderData = () => 1;
  const marker = {
    id: 1, title: 'titles', text: 'text', lat: 1, lng: 2, key: 'my key',
  };
  const enzymeWrapper = shallow(<Item
    isEdit={false}
    actions={{ editGeocoderData }}
    marker={marker}
  />);

  it('should render Icon in Item', () => {
    const iconProps = enzymeWrapper.find('Icon').props();

    expect(iconProps.style).toEqual({ float: 'right' });
    expect(iconProps.name).toBe('world');
    expect(iconProps.size).toBe('large');
    expect(iconProps.color).toBe('blue');
  });

  it('should render Card and subcomponents in Item', () => {
    const Card = enzymeWrapper.find('Card');
    expect(Card.find('CardHeader').length).toBe(1);
    expect(Card.find('CardHeader').props().children).toBe('titles');

    const buttonProps = enzymeWrapper.find('Button').first().props();
    expect(buttonProps.color).toBe('green');

    const lastButtonProps = enzymeWrapper.find('Button').last().props();
    expect(lastButtonProps.disabled).toBe(false);
    expect(lastButtonProps.color).toBe('red');

    enzymeWrapper.setProps({ isEdit: marker });

    const updatedLastButtonProps = enzymeWrapper.find('Button').last().props();
    expect(updatedLastButtonProps.color).toBe('grey');
    expect(updatedLastButtonProps.disabled).toBe(true);
  });
});
