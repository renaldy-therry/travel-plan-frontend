import React from 'react';
import Slider from 'react-slick';

function Hero() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='mx-32 mt-10'>
        <Slider {...settings}>
          <div className='min-h-12 h-52 bg-primary rounded-3xl text-center overflow-hidden'>
            {/* <img src='https://placeimg.com/1000/800/arch' className='w-full'/> */}
          </div>
          <div className='min-h-12 h-52 bg-primary rounded-3xl text-center overflow-hidden'>
            {/* <img src='https://placeimg.com/1000/800/arch' className='w-full'/> */}
          </div>
        </Slider>
      </div>
    );
}

export default Hero;
