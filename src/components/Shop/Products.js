import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const product = [
    {
      id:1,
      title:'Test-1',
      price:6,
      description:'This is a first product - amazing!'
    },
    {
      id:2,
      title:'Test-2',
      price:10,
      description:'This is a first product - amazing!'
    }, 
    {
      id:3,
      title:'Test-3',
      price:12,
      description:'This is a first product - amazing!'
    }
  ]




  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {product.map((item) => (
          <ProductItem
            id={item.id}
            title={item.title}
            price={item.price}
            key={item.id}
            description={item.description}
          />
        )
        )}
      </ul>
    </section>
  );
};

export default Products;
