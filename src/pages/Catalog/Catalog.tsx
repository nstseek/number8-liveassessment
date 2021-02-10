import ItemContext from 'contexts/itemContext';
import React, { useContext } from 'react';
import './Catalog.scss';
import ItemCard from './components/ItemCard/ItemCard';

const Catalog: React.FC = () => {
  const itemCtx = useContext(ItemContext);

  return (
    <div className='Catalog'>
      {itemCtx.map((item) => (
        <ItemCard item={item} key={item.ProductID} />
      ))}
    </div>
  );
};

export default Catalog;
