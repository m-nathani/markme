import React from 'react';
import {
  shallow,
} from 'enzyme';
import Search from '../../component/Search';

describe('Search Component', () => {
  const isLoading = false;
  const isEdit = false;
  const enzymeWrapper = shallow(<Search isLoading={isLoading} isEdit={isEdit} actions={{}} />);

  it('should render Header in Search', () => {});

  it('should render Header in Search', () => {
    const searchHeaderProps = enzymeWrapper.find('Icon').props();
    expect(searchHeaderProps.name).toBe('world');
  });

  it('should render Input in Search', () => {
    const searchInputProps = enzymeWrapper.find('Input').props();

    expect(searchInputProps.type).toBe('text');
    expect(searchInputProps.size).toBe('large');
    expect(searchInputProps.icon).toBe('search');
    expect(searchInputProps.action.content).toBe('Add');
    expect(searchInputProps.action.color).toBe('blue');
  });
});
