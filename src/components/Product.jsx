import React from 'react';
import Button from './Button';

export default function Product({products}){
    return (
        <div className='relative w-full py-20 text-zinc-200 mt-1 hover:opacity-100 hover:transition-transform hover:duration-500'>
            <div className='max-w-screen-lg mx-auto flex h-[5rem] items-center justify-between'>
                <h1 className='text-6xl'>{products.title}</h1>
                <div className='details w-1/3'>
                    <p className='mb-10'>{products.description}</p>
                    {products.case ? <div className='flex gap-4'>
                        <Button val={'Live Website'}/>
                        <Button val={'Case Study'} />
                    </div> : <Button val={'Live Website'} />}
                </div>
            </div>
            <div className='absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-violet-500'>
                <div className='max-w-screen-lg mx-auto flex h-full items-center justify-between'>
                    <h1 className='text-6xl'>{products.title}</h1>
                    <div className='details w-1/3'>
                        <p className='mb-10'>{products.description}</p>
                        {products.case ? <div className='flex gap-4'>
                            <Button val={'Live Website'}/>
                            <Button val={'Case Study'} />
                        </div> : <Button val={'Live Website'} />}
                    </div>
                </div>
                <div className='absolute top-[-11.5%] z-10 h-[120%] w-[23rem] left-[35%] rounded-2xl'>
                    <video controls autoPlay muted className='w-full rounded-2xl h-full'>
                        <source src={products.video} type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
                </div>
            </div>
        </div>
    )
}