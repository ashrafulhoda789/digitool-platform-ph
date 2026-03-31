import { Check, CircleCheckBig } from 'lucide-react';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const ProductFeature = ({feature}) => {
    return (
        <div>
            <p className='mb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                {feature}</p>
        </div>
    );
};

export default ProductFeature;