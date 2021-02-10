import React from 'react';
import { shallow } from 'enzyme';
import ItemCard from './ItemCard';
import mockUp from 'mockup';

describe('<ItemCard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ItemCard item={mockUp[0]} />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
