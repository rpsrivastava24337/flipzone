import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 3
        },
        720: {
            items: 5, 
        },
    };

    const items = [1,1,1,1,1].map((item) => (<HomeSectionCard/>));
    return ( 
        <div >
           <AliceCarousel
            items={items}
            controlsStrategy="alternate"
            disableButtonsControls
            autoPlay
            autoPlayInterval={3000}
            infinite
            responsive={responsive} 
        />
        </div>
    );
};
export default HomeSectionCarousel;