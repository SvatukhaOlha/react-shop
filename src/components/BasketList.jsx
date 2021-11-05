import React from 'react'
import BasketItem from './BasketItem'

function BasketList(props) {

    const {
      order = [],
      handleBasketShow = Function.prototype,
      removefromBasket = Function.prototype,
      decQuantity,
      incQuantity,
    } = props;

     const totalPrice = order.reduce((sum, el) => {
       return sum + el.price * el.quantity;
     }, 0);
    
    return (
      <ul className='collection basket-list'>
        <li className='collection-item active'>Basket</li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.id}
              removefromBasket={removefromBasket}
              decQuantity={decQuantity}
              incQuantity={incQuantity}
              {...item}
            />
          ))
        ) : (
          <li className='collection-item'>Empty Basket</li>
        )}
        <li className='collection-item active'>Total: ${totalPrice}</li>
        <li className='collection-item'>
          <button className='btn btn-small'>Order</button>
        </li>

        <i className='material-icons basket-close' onClick={handleBasketShow}>
          close
        </i>
      </ul>
    );
}

export default BasketList
