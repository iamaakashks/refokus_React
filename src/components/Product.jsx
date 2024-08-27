import React from 'react';
import Button from './Button';

export default function Product({products}){
    return (
        <div className='w-full py-20 text-zinc-200 bg-zinc-600 mb-1'>
            <div className='max-w-screen-lg mx-auto flex items-center justify-between'>
                <h1 className='text-6xl'>{products.title}</h1>
                <div className='details w-1/3'>
                    <p className='mb-10'>{products.description}</p>
                    {products.case ? <div className='flex gap-4'>
                        <Button val={'Live Website'}/>
                        <Button val={'Case Study'} />
                    </div> : <Button val={'Live Website'}/>}
                </div>
            </div>
        </div>
    )
}