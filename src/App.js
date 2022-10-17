import React, { useState } from 'react'
import Cart from './Components/Cart'
import Product from './Components/Product'
import data from './data/data'

export default function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  //  For addding the products to cart
  const AddProducts = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  // FOr removing the product from the cart
  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <h1>React Simple Shopping Cart</h1>
      <div className='row '>
        <Product products={products} AddProducts={AddProducts} />
        <Cart onRemove={onRemove} AddProducts={AddProducts} countCartItems={cartItems.length} cartItems={cartItems} />
      </div>

    </div>
  )
}

