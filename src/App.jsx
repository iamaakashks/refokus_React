import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/footer';
import FooterLink from './components/FooterLink';
import LocomotiveScroll from 'locomotive-scroll';

export default function App(){
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className='bg-zinc-900 font-["satoshi"] text-white'>
            <div className=' w-full'>
                <Navbar />
                <Work />
                <Stripes />
                <Products />
                <Marquees />
                <Cards />
                <Footer />
                <FooterLink />
            </div>
        </div>
    )
}