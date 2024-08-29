import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({imagesUrl, direction}){
    return ( 
        <div className='flex w-full overflow-x-hidden gap-32'>
            <motion.div
            initial={{x: direction === 'left' ? "0" : "-100%"}}
            animate={{ x: direction === 'left' ? "-100%" : "0" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
            className='flex gap-32 pt-12 flex-shrink-0'>
                {imagesUrl.map((url, index) => <img src={url} key={index} />)}
            </motion.div>
            <motion.div
            initial={{x: direction === 'left' ? "0" : "-100%"}}
            animate={{ x: direction === 'left' ? "-100%" : "0" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
            className='flex gap-32 pt-12 flex-shrink-0'>
                {imagesUrl.map((url, index) => <img src={url} key={index} />)}
            </motion.div>
            
            
        </div>
        
    )
}