import mockUp from 'mockup';
import React from 'react';
import Item from 'typings/item';

const ItemContext = React.createContext<Item[]>(mockUp);

export default ItemContext;
