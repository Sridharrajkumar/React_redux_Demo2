import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cardAction } from '../../Store/CardReducer';

const CartItem = (props) => {
  const { title, quantity, price ,totalPrice , id} = props;
  const dispatch = useDispatch();

  const DecreaseHandler = (product) => { 
    dispatch(cardAction.removeItem({ ...product}))
  }
  
  const IncreaseHandler = (product) => {
    dispatch(cardAction.addCard({...product}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => DecreaseHandler({ title, quantity, price,id})}>-</button>
          <button onClick={() => IncreaseHandler({title, quantity, price,id})}>+</button>
        </div>
      </div>
    </li>
  );
};


export default CartItem;
