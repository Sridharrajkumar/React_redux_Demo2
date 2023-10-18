import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cardAction } from '../../Store/CardReducer';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const cartSelector = useSelector(state => state.card.items);

  const HandleAddCart = (product) => {
    dispatch(cardAction.addCard({ ...product, quantity: 1 }));
    console.log(cartSelector);
  };

  return (
    <li className={classes.item} key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => HandleAddCart({title,price,description,id})}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
