
import React, { use } from 'react';
import Product from './Product';

function Products({ products }) {
    const [addToCart, setAddToCart] = React.useState([]);
    const productList = use(products);

    const handleClick = (productList) => {
        const newCart = [...addToCart, productList];
        setAddToCart(newCart);
        //console.log("Produt cliked ",productList);

    }
    return (
        <>
        <h1>Item Added to cart :{addToCart.length}</h1>
            <div className='products-grid'>
                {
                    productList.map(product => <Product handleClick={handleClick} key={product.id} product={product}></Product>)
                }
            </div>
        </>

    );
}

export default Products;