import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Card({width, start, para, topText, secondTopText, hover}){
    return (
        <div className={`${hover && "hover:bg-violet-600"} bg-zinc-800 ${width} px-5 py-6 rounded-2xl mb-10 min-h-[22rem] flex flex-col justify-between`}>
            <div className='w-full flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-sm'>{topText}</h3>
                    <FaArrowRightLong className='opacity-50'/>
                </div>
                <h2 className='text-2xl font-medium'>{secondTopText}</h2>
            </div>
            <div>
                {
                    start ?
                    <>
                        <h1 className='text-7xl font-medium tracking-tight mb-4'>Start a Project</h1>
                        <button className='px-4 py-1.5 border-[1px] rounded-full'>Contact Us</button>
                    </> : <p className='text-zinc-400'>Explore what drives our team</p>
                }
                
            </div>
        </div>
    )
}