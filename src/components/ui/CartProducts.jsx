import React from 'react';
import { MdDelete } from 'react-icons/md';

const CartProducts = ({ cartProduct, handleDeleteItem }) => {
    // console.log(cartProduct);
    const { name, price, icon } = cartProduct;
    return (
        <div className='flex justify-between items-center rounded-2xl shadow p-5 border border-gray-200 mb-5'>
            <div className='flex items-center gap-5'>
                <div className='w-fit  p-2 rounded-full shadow'>
                    <img  className='w-6 md:w-8' src={icon} alt="" />
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl font-bold'>{name}</h1>
                    <p className='text-lg font-medium'>${price}</p>
                </div>
            </div>
            <div>
                <p 
                onClick={()=> handleDeleteItem(cartProduct)}
                className=' btn bg-white border-none text-red-700'><MdDelete></MdDelete></p>
            </div>

        </div>
    );
};

export default CartProducts;