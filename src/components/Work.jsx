import React, { useState } from 'react';
import {useScroll} from "framer-motion";

export default function Work(){

    const [images, setImages] = useState([
    
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "54%", left: "45%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "56%", left: "55%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "58%", left: "40%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "60%", left: "55%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "62%", left: "40%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "64%", left: "55%", isActive: false}
    ])

    const {scrollYProgress} = useScroll();
    
    scrollYProgress.on("change", (data)=>{
        function imagesShow(arr){
            setImages(prev => {
                return prev.map((item, index)=>(
                    arr.indexOf(index) === -1 ? {...item, isActive: false} : {...item, isActive: true}
                ))
            })
        }
        switch(Math.floor(data*100)){
            case 0:
                imagesShow([]);
                break;
            case 2:
                imagesShow([0]);
                break;
            case 3:
                imagesShow([0, 1]);
                break;
            case 4:
                imagesShow([0, 1, 2]);
                break;
            case 5:
                imagesShow([0, 1, 2, 3]);
                break;
            case 7:
                imagesShow([0, 1, 2, 3, 4]);
                break;
            case 8:
                imagesShow([0, 1, 2, 3, 4, 5]);
                break;
        }
    })
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