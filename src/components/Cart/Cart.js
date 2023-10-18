import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartSelector = useSelector(state => state.card.items);
  const cartShow = useSelector(state => state.ui.ActivateCard);
  const total = useSelector(state => state.card.TotalAmount);
  console.log(cartSelector);
  return (
    cartShow && (<Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartSelector.map((item) => (
          <CartItem
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          totalPrice={item.totalPrice}
        />
        ))}
        <div className={classes.total}>
          <h3>Total Amount: </h3>
          <h3>$ {total}</h3>
        </div>
      </ul>
    </Card>)
  );
};

export default Cart;

