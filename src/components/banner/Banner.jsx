import React from 'react';
import dotIcon from '../../assets/dot-icon.png';
import watchIcon from '../../assets/Play.png';
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 my-20'>
            <div className='space-y-5 max-w-160'>
                <div className='flex gap-2 items-center bg-[#E1E7FF] px-3  rounded-full w-fit'>
                    <div> <img src={dotIcon} alt=" " /></div>
                    <h3 className='gradient-text'>New: AI-Powered Tools Available</h3>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-[#101727]'>Supercharge Your Digital Workflow</h1>
                    <p className='text-lg text-[#627382] leading-5'>Access premium AI tools, design assets, templates, and productivity software - all in one place. Start creating faster today.Explore Products
                    </p>
                </div>
                <div className='flex items-center gap-3'>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Explore Products</button>
                    <button className='btn  rounded-full flex items-center gap-2 gradient-text'>
                        <img src={watchIcon} alt="" />
                        Watch Demo
                    </button>
                </div>
            </div>
            
            <div><img className='border border-gray-200 rounded-2xl' src={bannerImg} alt="" /></div>
            
        </div>
    );
};

export default Banner;