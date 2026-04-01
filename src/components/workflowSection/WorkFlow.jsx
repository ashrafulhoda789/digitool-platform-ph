import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white px-10 py-20 text-center space-y-6'>
            <div className='space-y-3'>
                <h1 className='text-2xl md:text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>

            <div className='flex justify-center items-center gap-4'>
                <button className='btn rounded-full text-[#9514FA]'>Explore Products</button>
                <button className='btn rounded-full bg-transparent text-white'>View Pricing</button>
            </div>

            <div className='flex justify-center items-center gap-10'>
                <p>14-day free trial </p>
                <li>No credit card required</li>
                <li>Cancel anytime</li>
            </div>
        </div>
    );
};

export default WorkFlow;