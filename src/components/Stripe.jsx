import React from 'react';

export default function Stripe({ val }){
    return (
        <div className='border-[1px] border-l-0 border-zinc-500 min-w-64 flex justify-between px-5 py-5 mt-2'>
            <img className='h-5' src={val.url} />
            <span>{val.number}</span>
        </div>
    )
}