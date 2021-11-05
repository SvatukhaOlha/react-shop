import React, { useContext } from 'react'
import {ShopContext} from '../context'

function BasketItem(props) {
    const {
      id,
      name,
      price,
      quantity,
    } = props;

    const { removefromBasket, decQuantity, incQuantity } =
        useContext(ShopContext);
    
    return (
      <li className='collection-item'>
        {name}{' '}
        <i
          className='material-icons basket-quantuity'
          onClick={() => decQuantity(id)}
        >
          remove
        </i>{' '}
        x{quantity}{' '}
        <i
          className='material-icons basket-quantuity'
          onClick={() => incQuantity(id)}
        >
          add
        </i>{' '}
        = ${price * quantity}
        <span className='secondary-content'>
          <i
            className='material-icons basket-delete'
            onClick={() => removefromBasket(id)}
          >
            close
          </i>
        </span>
      </li>
    );
}

export default BasketItem
