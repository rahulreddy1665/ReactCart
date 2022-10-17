import React from 'react'

export default function Cart(props) {
    const { cartItems, AddProducts, onRemove, countCartItems } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <div className="block  col-1">
            <div className='row'>
                <h2>Cart Items</h2>
                <div>
                    <a href="#/cart">
                        Cart{' '}
                        {countCartItems ? (
                            <button className="badge">{countCartItems}</button>
                        ) : (
                            ''
                        )}
                    </a>
                </div>
            </div>

            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-1">{item.name}</div>
                        <div className="col-1">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <button onClick={() => AddProducts(item)} className="add">
                                +
                            </button>
                        </div>

                        <div className="col-1 text-right">
                            {item.qty} x &#x20b9;{item.price.toFixed(2)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">&#x20b9;{itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 text-right"> &#x20b9;{taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">
                                &#x20b9;{shippingPrice.toFixed(2)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>&#x20b9;{totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button onClick={() => alert('Implement Checkout!')}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
