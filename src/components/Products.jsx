import React from 'react';
import Product from './Product';

export default function Products(){
    const products = [
        {title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false, video:"videos/arqitel.mp4"},
        {title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false, video:"videos/ttr.mp4"},
        {title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: false, video:"videos/yir.mp4"},
        {title: "Yahoo", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true, video:"videos/yahoo.mp4"},
        {title: "Rainfall", description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: true, video:"videos/rainfall.mp4"},
    ]
    return (
        <div className='pt-10'>
            {products.map((elem, index)=> <Product products={elem} key={index}/>)}
        </div>
    )
}