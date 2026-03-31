import React from 'react';
import Product from '../../ui/Product';

const AllProducts = ({products}) => {
    console.log(products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default AllProducts;