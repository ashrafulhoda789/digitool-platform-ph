import React, { useState } from 'react';
import ProductFeature from './ProductFeature';

const Product = ({product, selectedProduct, setSelectedProduct}) => {
    console.log(product);
    const {name, description, price, period, features, tag} = product;

    const [isbuy, setIsBuy] = useState(false);

    const handleCartItem = () =>{



        setIsBuy(true);

        setSelectedProduct([...selectedProduct, product]);
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning">{tag}</span>
                    <div className="">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p>{description}</p>
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