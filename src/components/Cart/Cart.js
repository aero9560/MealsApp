import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal.js';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';
const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount}`;
    const hasItems = cartCtx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {};
  
    const cartItemAddHandler = (item) => {};
  
    const cartItems = (
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
  return (
    <Modal onClose={props.onClose}>
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}      </div>
    </div>
    </Modal>
  );
};

export default Cart;