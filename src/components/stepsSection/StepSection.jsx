import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'

const StepSection = () => {
    return (
        <div className='my-20 bg-gray-100 py-30 px-2'>
            <div className='text-center space-y-4'>
                <h1 className='text-3xl md:text-4xl font-bold text-[#101727]'>Get Started In 3 Steps</h1>
                <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 w-9/12 mx-auto'>

                <div className=' bg-white shadow-xl py-10 px-2 relative rounded-2xl'>
                    <div className="badge badge-primary badge-lg absolute top-4 right-2">01</div>
                    <div className='flex flex-col justify-center items-center mt-10 space-y-5'>
                        <div className='rounded-full p-3 shadow-sm bg-[#e9d3f9]'>
                            <img width={45} src={userImg} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h1 className='text-xl  font-bold text-[#101727]'>Create Account</h1>
                            <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-xl py-10 px-2 relative rounded-2xl'>
                    <div className="badge badge-primary badge-lg absolute top-4 right-2">02</div>
                    <div className='flex flex-col justify-center items-center mt-10 space-y-5'>
                        <div className='rounded-full p-3 shadow-sm bg-[#e9d3f9]'>
                            <img width={45} src={packageImg} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h1 className='text-xl  font-bold text-[#101727]'>Choose Products</h1>
                            <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-xl py-10 px-2 relative rounded-2xl'>
                    <div className="badge badge-primary badge-lg absolute top-4 right-2">03</div>
                    <div className='flex flex-col justify-center items-center mt-10 space-y-5'>
                        <div className='rounded-full p-3 shadow-sm bg-[#e9d3f9]'>
                            <img width={40} src={rocketImg} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h1 className='text-xl  font-bold text-[#101727]'>Start Creating</h1>
                            <p className='text-[16px] text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default StepSection;