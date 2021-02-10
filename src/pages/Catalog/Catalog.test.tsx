import React from 'react';
import { shallow } from 'enzyme';
import Catalog from './Catalog';

describe('<Catalog />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Catalog />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
