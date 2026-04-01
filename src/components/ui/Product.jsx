import React, { useState } from 'react';
import ProductFeature from './ProductFeature';
import { toast } from 'react-toastify';

const Product = ({ product, selectedProduct, setSelectedProduct }) => {
    // console.log(product);
    const { name, description, price, period, features, tag, icon } = product;

    const [isbuy, setIsBuy] = useState(false);

    const handleCartItem = () => {

        setIsBuy(true);

        const isFound = selectedProduct.find(item => item.id === product.id)

        if(isFound){
            toast.warn("Product already in cart");
            return; 
        }
        
        setSelectedProduct([...selectedProduct, product]);

        toast.success(`${name} product is added to cart`);
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div className='w-fit  p-2 rounded-full shadow'>
                            <img width={25} className='' src={icon} alt="" />
                        </div>
                        <span className="badge badge-sm badge-warning">{tag}</span>
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p className='text-[#627382]'>{description}</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>${price}/<span className='text-[16px] text-[#627382]'>{period}</span> </h3>
                    </div>
                    <div className=''>
                        {
                            features.map((feature, index) => <ProductFeature key={index} feature={feature}></ProductFeature>)
                        }
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={() => handleCartItem()}
                            className={`btn btn-block rounded-full ${isbuy ? "bg-green-400 text-black" : " bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white"}`}>
                            {isbuy ? "Added To Card" : "Buy Now"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;