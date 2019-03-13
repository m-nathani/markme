import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../component/Item';

 describe('Item Component', () => {
  it('should render self and subcomponents', () => {
    const editGeocoderData = () => null;
    const enzymeWrapper = shallow(<Item  
      isEdit={false} 
      actions={{editGeocoderData}}
      marker={{id: 1, title: "titles"}}
    />);

    // const messageProps = enzymeWrapper.find('Message').props();
    // expect(messageProps.error).toBe(true);
    // expect(messageProps.size).toBe("large");
    // expect(messageProps.header).toBe("my test message");

  });
});