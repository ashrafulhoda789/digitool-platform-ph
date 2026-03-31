import React from 'react';
import shoppingCart from '../../../assets/products/shopping-cart.png'
import CartProducts from '../../ui/CartProducts';

const SelectedProducts = ({ selectedProduct, setSelectedProduct}) => {

    const totalPrice = selectedProduct.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    const handleProceedBtn = () =>{
        setSelectedProduct([]);
    }

    return (
        <div className='my-10 rounded-2xl shadow-2xl p-10'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            <div className='my-10'>
                {
                    selectedProduct.length === 0 ?
                        <div>
                            <div className='flex flex-col justify-center items-center gap-4 mt-10'>
                                <img src={shoppingCart} alt="" />
                                <h2 className='font-semibold text-xl text-[#627382]'>Your cart is Empty</h2>
                            </div>
                        </div>
                        : 
                        selectedProduct.map(cartProduct => <CartProducts cartProduct={cartProduct}
                        ></CartProducts>)
                }
            </div>
            <div className='flex justify-between items-center mb-5'>
                <p className='text-xl font-medium'>Total:</p>
                <h3 className='font-bold text-2xl'>${totalPrice}</h3>
            </div>
            <button 
            onClick={() => handleProceedBtn()}
            className='btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white'>Proceed To Checkout</button>
        </div>
    );
};

export default SelectedProducts;