import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FooterLink(){
    return (
        <div className='w-full py-4'>
            <div className='text-sm max-w-screen-lg mx-auto flex gap-6 text-zinc-500'>
                <NavLink className={item=> item.isActive && "text-red-400"} to='/privacy-policy'>Privacy Policy</NavLink>
                <NavLink className={item=> item.isActive && "text-red-400"} to='/cookie-policy'>Cookie Policy</NavLink>
                <NavLink className={item=> item.isActive && "text-red-400"} to='/impressum'>Impressum</NavLink>
                <NavLink className={item=> item.isActive && "text-red-400"} to='/terms'>Terms</NavLink>
            </div>
        </div>
    )
}