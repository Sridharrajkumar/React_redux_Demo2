import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { UiAction } from '../../Store/UiReducer';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.card.items);
  const totalQuantity = items ? items.reduce((currnum, item) =>{
    return currnum + item.quantity;
  },0):0

  const Handlecard = () => {
    dispatch(UiAction.hideCard());
  }

  return (
    <button className={classes.button} onClick={Handlecard}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;


