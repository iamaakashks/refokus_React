import React from 'react';
import { IoIosReturnRight } from "react-icons/io";
export default function Button({val}){
    return (
        <button className='rounded-full w-40 px-5 py-2 bg-zinc-100 text-zinc-900 flex items-center justify-between'>
            <span className='text-sm'>{val}</span>
            <IoIosReturnRight />
        </button>
    )
}