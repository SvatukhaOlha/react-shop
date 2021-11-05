import React, {useEffect, useContext} from 'react'
import {API_KEY, API_URL} from '../config'
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart'
import BasketList from './BasketList'
import Alert from './Alert'

import {ShopContext} from '../context'


function Shop() {
  const { goods, setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);

    // Show goods
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
        .then(res => res.json())
        .then(data => {
           setGoods(data.featured)
        })
    }, []) //eslint-disable-line

    return (
      <main className='container content'>
        <Cart quantity={order.length} />
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList goods={goods} />
        )}
        {isBasketShow && (
          <BasketList
            order={order}
  
          />
        )}
        {alertName && <Alert />}
      </main>
    );
   
}

export default Shop
