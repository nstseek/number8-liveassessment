import ItemContext from 'contexts/itemContext';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Stars from '../../assets/Screenshot_42.png';
import Toaster from './components/Toaster/Toaster';
import './Item.scss';

const Item: React.FC = () => {
  const itemCtx = useContext(ItemContext);
  const { id } = useParams<{ id?: string }>();
  const item = itemCtx.find(
    (catalogItem) => catalogItem.ProductID === Number(id)
  );
  const [toaster, setToaster] = useState(false);
  return (
    <div className='Item'>
      {toaster ? <Toaster /> : null}
      <div className='picture-info'>
        <div
          className='picture'
          style={{ backgroundImage: `url(${item.PictureURL})` }}>
          <div className='tag'>Clearance</div>
          <div className='tag'>Free shipping</div>
        </div>
        <p className='info'>
          <span className='title'>Brand: </span>
          {item.Brand}
        </p>
        <p className='info'>
          <span className='title'>Color: </span>
          {item.Color}
        </p>
      </div>
      <div className='info'>
        <h2 className='title'>{item.Name}</h2>
        <img src={Stars} />
        <p className='desc'>{item.Description}</p>
      </div>
      <div className='actions'>
        <div className='price'>
          <span className='actual-price'>${item.Price}</span>
          {item.Price < item['Retail Price'] ? (
            <span className='old-price'>${item['Retail Price']}</span>
          ) : null}
        </div>
        <div className='add-cart'>
          {item.Stock === 0 ? (
            <span className='warning'>Out of Stock</span>
          ) : null}
          <button
            disabled={item.Stock === 0}
            className='add-to-cart'
            onClick={() => {
              setToaster(true);
              setTimeout(() => setToaster(false), 3000);
            }}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
