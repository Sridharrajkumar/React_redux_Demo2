import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cardAction } from '../../Store/CardReducer';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.card.items);
  const totalQuantity = items.reduce((currnum, item) =>{
    return currnum + item.quantity;
  },0)

  const Handlecard = () => {
    dispatch(cardAction.hideCard());
  }

  return (
    <button className={classes.button} onClick={Handlecard}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
