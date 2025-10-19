import React from 'react';

function Product({product,handleClick}) {
    const {id,title,description}=product;
    return (
        <div className='product-card'>
            <h1>ID:{id}</h1>
            <p>ID:{title}</p>
            <p>description:{description}</p>
            <button onClick={()=>{handleClick(product)}}>Buy Now</button>
        </div>
    );
}

export default Product;