import React from 'react';
import sliderImg from "../../../public/homeBg.jpg"
import Image from 'next/image';
const Banner = () => {
    return (
        <div>

            <div className='relative'>
                <Image
                    src={sliderImg}
                    alt='Slider image'
                    sizes='100vw'
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
                <div className='absolute top-0 left-0 flex items-center justify-center h-full w-full bg-gradient-to-r from-[#000000e0] via-[#000000c5] to-[#41414135]'>
                    <div className='text-yellow-500 ml-10'>
                        <h2 className="text-2xl md:text-4xl font-semibold mb-3">Experience the Future, Today</h2>
                        <p className='w-3/4 text-yellow-100 hidden md:block'>Step into a World Where Imagination Fuels Creation, and Breakthroughs Unveil a New Era of Possibilities, Ready for You to Embrace Today.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;