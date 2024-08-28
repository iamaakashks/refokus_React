import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';

export default function App(){
    return (
        <div className='bg-zinc-900 font-["satoshi"] text-white'>
            <div className=' w-full'>
                <Navbar />
                <Work />
                <Stripes />
                <Products />
                <Marquees />
                <Cards />
            </div>
        </div>
    )
}