import React, { use } from 'react';

const Products = ({productPromise}) => {
    const products = use(productPromise);
    // console.log(products);
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl font-bold text-[#001931]'>Premium Digital Tools</h1>
                    <p className='text-[16px] text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Products</button>
                    <button className='btn  rounded-full flex items-center gap-2 gradient-text'>
                        Cart
                    </button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Products;