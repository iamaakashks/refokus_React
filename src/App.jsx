import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';

export default function App(){
    return (
        <div className='bg-zinc-900'>
            <div className='font-["satoshi"] bg-zinc-900 h-screen w-full text-white'>
                <Navbar />
                <Work />
                <Stripes />
            </div>
            <div className='font-["satoshi"] bg-zinc-900 w-full text-white'>
                <Products />
            </div>
            <div className='font-["satoshi"] bg-zinc-900 w-full text-white'>
                <Marquees />
            </div>
        </div>
    )
}