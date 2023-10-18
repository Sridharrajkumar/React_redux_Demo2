import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/Notification/Notification'
import { useEffect } from 'react';
import { getCartData, sendCartData } from './Store/CardReducer';


let isIntial = true;

function App() {

  const cart = useSelector(state => state.card);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(getCartData())
 }, [dispatch])

  useEffect(() => {

      if (isIntial)
      {
        isIntial = false;
        return
      }
    
    if (cart.changed)
    {
      dispatch(sendCartData(cart))
      }

  }, [cart, dispatch]);

  
  


  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;


