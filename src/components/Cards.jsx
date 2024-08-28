import React from 'react';
import Card from './Card.jsx';

export default function Cards(){
    return (
        <div className='w-full'>
            <div className='max-w-screen-lg mx-auto flex gap-1'>
                <Card width={"basis-1/3"} start={false} para={true} topText={"Up Next: Culture"} secondTopText={"Who we are"}/>
                <Card width={"basis-2/3"} start={true} para={false} topText={"Get in Touch"} secondTopText={`Let's get to it, together.`} hover={true} />
            </div>
        </div>
    )
}