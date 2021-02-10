import ItemContext from 'contexts/itemContext';
import mockUp from 'mockup';
import Catalog from 'pages/Catalog/Catalog';
import Item from 'pages/Item/Item';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import './App.scss';

const App: React.FC = () => (
  <ItemContext.Provider value={mockUp}>
    <Switch>
      <Route path={routes.Catalog}>
        <Catalog />
      </Route>
      <Route path={routes.Item + '/:id'}>
        <Item />
      </Route>
      <Redirect to={routes.Catalog}></Redirect>
    </Switch>
  </ItemContext.Provider>
);

export default App;
