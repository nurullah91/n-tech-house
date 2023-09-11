
import React from 'react';
import Container from '../Container/Container';
import img1 from '../../../public/slider1.jpg'
import img2 from '../../../public/slider2.jpg'
import img3 from '../../../public/slider3.jpg'
import img4 from '../../../public/slider4.jpg'
import img5 from '../../../public/slider5.jpg'
import Image from 'next/image';


const Showcase = () => {
    return (
        <div>
            <Container>
                <div className='my-12'>
                <h2 className="text-2xl md:text-4xl font-semibold my-3 text-yellow-300 text-center">Our best Products</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-6'>
                    <Image alt='Product' src={img1}></Image>
                    <Image alt='Product' src={img2}></Image>
                    <Image alt='Product' src={img3}></Image>
                    <Image alt='Product' src={img4}></Image>
                    <Image alt='Product' src={img5}></Image>
                  
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Showcase;