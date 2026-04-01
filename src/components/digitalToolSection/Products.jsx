import React, { use, useState } from 'react';
import AllProducts from './allProducts/AllProducts';
import SelectedProducts from './selectedProducts/SelectedProducts';

const Products = ({ productPromise, selectedProduct, setSelectedProduct }) => {
    const products = use(productPromise);
    // console.log(products);

    const [toggle, setToggle] = useState("products");
    
    
    return (
        <div className='w-9/12 mx-auto my-20'>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl font-bold text-[#001931]'>Premium Digital Tools</h1>
                    <p className='text-[16px] text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                </div>
                <div className='flex items-center'>
                    <button
                        onClick={() => setToggle("products")}
                        className={`btn rounded-r-none ${toggle === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "gradient-text"}  rounded-l-full `}>Products</button>
                    <button
                        onClick={() => setToggle("carts")}
                        className={`btn rounded-l-none ${toggle === "carts" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "gradient-text"} rounded-r-full`}>
                        Cart({selectedProduct.length})
                    </button>
                </div>
            </div>
            <div className='my-10'>
                {
                    toggle === "products" ? <AllProducts
                    selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
                    products={products}></AllProducts>
                    : <SelectedProducts selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
                    ></SelectedProducts>
                }
            </div>
        </div>
    );
};

export default Products;