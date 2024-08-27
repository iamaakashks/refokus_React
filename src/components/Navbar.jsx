import React from 'react';
import Button from './Button';

export default function Navbar(){
    return (
        <div className='max-w-screen-lg mx-auto border-b-[1px] border-zinc-500 flex justify-between items-center'>
            <div className='py-5 flex items-center gap-14 '>
                <img src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg" />
                <div className='flex gap-14 items-center'>
                    {["Home", "Work", "Culture", "", "News"].map((elem, index)=> elem.length === 0? <span key={index} className='h-5 w-[1px] bg-zinc-400'></span> : <a key={index} className='font-regular text-sm flex items-center gap-1' href='#'>
                        {index==1 && <span className='inline-block w-1.5 h-1.5 rounded-full bg-green-500'></span>}{elem}
                        </a>)}
                </div>
            </div>
            <Button/>
        </div>
    )
}