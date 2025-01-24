import React from 'react';

const HomeSectionCard = () => {
    
    return (
        <div className='bg-dark border border-5 shadow-lg rounded-lg w-[15rem] cursor-pointer flex flex-col justify-center items-center overflow-hidden m-3'> 
            <div className='w-[13] h-[10rem]'>
            <img src='https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/l/d/y/l-fpl23-whitekurtaset-l-ladyflock-original-imah8g7gccfekxwz.jpeg?q=70&crop=false' />

            </div>
            <div className='p-4'>
                <h3 className=' text-lg font-medium text-gray-800'>kurta</h3>
                <p className='mt-2 text-sm text-gray-800'>Best Kurta </p>
            </div>
        </div>
    )
};

export default HomeSectionCard;