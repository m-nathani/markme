
import React from 'react';
import {
  shallow,
} from 'enzyme';
import List from '../../component/List';
import { GRID_COULUMS } from '../../constant/application';

describe('List Component', () => {
  const marker = {
    id: 1, title: 'titles', text: 'text', lat: 1, lng: 2, key: 'my key',
  };
  const isEdit = false;
  const enzymeWrapper = shallow(<List isEdit={isEdit} data={[marker]} actions={{}} />);

  it('should render grid  in List', () => {
    const gridProps = enzymeWrapper.find('Grid').props();

    expect(gridProps.columns).toBe(GRID_COULUMS);
    expect(gridProps.stackable).toBe(true);
    expect(gridProps.textAlign).toBe('center');
  });

  it('should render Item in List', () => {
    const listItem = enzymeWrapper.find('Grid').first();

    expect(listItem.find('Item').props().marker).toEqual(marker);
    expect(listItem.find('Item').props().isEdit).toEqual(isEdit);
  });
});
