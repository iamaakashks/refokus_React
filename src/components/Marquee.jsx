import React from 'react';
export default function Marquee({imagesUrl}){
    return ( 
        <div className='w-full flex gap-32 pt-12 whitespace-nowrap overflow-x-hidden'>
            {imagesUrl.map((url, index) => <img className='flex-shrink-0 w-28' src={url} key={index} />)}
            {imagesUrl.map((url, index) => <img className='flex-shrink-0 w-28' src={url} key={index} />)}
        </div>
    )
}