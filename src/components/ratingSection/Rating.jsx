import React from 'react';

const Rating = () => {
    return (
        <div className='flex flex-col md:flex-row text-center items-center justify-center gap-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-10'>
            <div className='text-white'>
                <h1 className='text-3xl md:text-5xl font-bold'>50K+</h1>
                <p className='text-lg font-medium '>Active Users</p>
            </div>
             <div className="divider divider-horizontal divider-start"></div>
            <div className='text-white'>
                <h1 className='text-3xl md:text-5xl font-bold'>200+</h1>
                <p className='text-lg font-medium '>Premium Tools</p>
            </div>
            <div className="divider divider-horizontal divider-start"></div>
            <div className='text-white'>
                <h1 className='text-3xl md:text-5xl font-bold'>4.9</h1>
                <p className='text-lg font-medium '>Rating</p>
            </div>
        </div>
    );
};

export default Rating;