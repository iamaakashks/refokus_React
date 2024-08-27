import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';

export default function App(){
    return (
        <>
            <div className='font-["satoshi"] bg-zinc-900 h-screen w-full text-white'>
                <Navbar />
                <Work />
                <Stripes />
            </div>
        </>
    )
}