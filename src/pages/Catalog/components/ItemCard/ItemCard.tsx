import React from 'react';
import { useHistory } from 'react-router-dom';
import routes from 'routes';
import Item from 'typings/item';
import './ItemCard.scss';

interface Props {
  item: Item;
}

const ItemCard: React.FC<Props> = ({ item }) => {
  const history = useHistory();

  return (
    <div className='ItemCard'>
      <img src={item.ThumbnailURL} alt='Item' />
      <div className='details'>
        <h2 className='product-name'>{item.Name}</h2>
        <div className='price'>
          <span className='actual-price'>${item.Price}</span>
          {item.Price < item['Retail Price'] ? (
            <span className='old-price'>${item['Retail Price']}</span>
          ) : null}
        </div>
      </div>
      <button
        className='view-details'
        onClick={() => history.push(routes.Item + '/' + item.ProductID)}>
        View details
      </button>
    </div>
  );
};

export default ItemCard;
