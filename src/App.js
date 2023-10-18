import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/Notification/Notification'
import { useEffect } from 'react';
import { UiAction } from './Store/UiReducer';

let isIntial = true;

function App() {

  const cart = useSelector(state => state.card);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {

    const fetchFun = async () => {
      dispatch(UiAction.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: 'Please wait while we send your request'
      }))
      const response = await fetch('https://react-reduxdemo2-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      
      if (!response.ok) {
        
        dispatch(UiAction.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed'
        }))

      }

      const responseData = await response.json();
      console.log(responseData);

      dispatch(UiAction.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Data send to Cart'
      }))
    }

      if (isIntial)
      {
        isIntial = false;
        return
      }

    fetchFun().catch(error => {
      dispatch(UiAction.showNotification({
        status: 'error',
        title: 'Erroe',
        message: 'Sending cart data failed'
      }));

    });

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


