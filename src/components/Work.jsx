import React from 'react';

export default function Work(){

    const images = [
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "56%", left: "49%", isActive: true},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "59%", left: "47%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "64%", left: "53%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "60%", left: "51%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "55%", left: "55%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "51%", left: "62%", isActive: false}
    ]

    return (
        <div className='w-full'>
            <div className='relative max-w-screen-lg mx-auto'>
                <h1 className='text-center text-[30vw] font-medium leading-tight select-none tracking-tight'>work</h1>
                <div className='absolute top-0 w-full h-full'>
                    {images.map((elem, index)=>{
                        return elem.isActive ? <img key={index} src={elem.url} className={`w-60 rounded-lg absolute translate-x-[-50%] translate-y-[-50%]`} style={{top: elem.top, left:elem.left}}/> : null;
                    })}
                </div>
            </div>
        </div>
    )
}