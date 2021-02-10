import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';
import ItemContext from 'contexts/itemContext';
import mockUp from 'mockup';
import { BrowserRouter } from 'react-router-dom';

describe('<Item />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <BrowserRouter>
        <ItemContext.Provider value={mockUp}>
          <Item />
        </ItemContext.Provider>
      </BrowserRouter>
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
