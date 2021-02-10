import React from 'react';
import { shallow } from 'enzyme';
import Toaster from './Toaster';

describe('<Toaster />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Toaster />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
