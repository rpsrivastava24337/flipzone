import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = MainCarouselData.map((item) => (
        <img className='cursor-pointer' src={item.image} alt={item.id} role='presentation' />
    ));
    return (
        <AliceCarousel
            items={items}
            controlsStrategy="alternate"
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    );
};

export default MainCarousel;