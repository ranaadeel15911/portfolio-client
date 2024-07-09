'use client'
import React, { useRef, useState } from 'react'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { IoMdCopy } from "react-icons/io";
const page = () => {
    const [val,setVal] = useState('')
    const reff = useRef(null)
    const ref = useRef(null)
const handleCustom = ()=>{
    navigator.clipboard.writeText("Custom Text To Copy")
    ref.current.style.display = "flex"
    setTimeout(()=>{
        ref.current.style.display = "none"

    },3500)
}
const mouseEnt = ()=>{
reff.current.select()
}
const mouseLea = ()=>{
reff.current.setSelectionRange(0, 0)
// alert('left')
}
const close = ()=>{
    ref.current.style.display = "none"
}
  return (
    <>
    <div ref={ref} style={{display:'none'}} className='w-full  absolute top-0 bg-green-800 h-14 flex justify-between  items-center px-8'><h2>✔Copied to clipboard</h2><button onClick={close} className='text-2xl'>⨯</button></div>
<div className='min-h-screen flex gap-2 items-center justify-center'>
    <input ref={reff} type='text' className='text-black border-none outline-none ring-0' defaultValue={'> Custom Text To Copy'} readOnly/>
    <button onClick={handleCustom} className='bg-white text-black px-3 py-3' onMouseLeave={mouseLea} onMouseEnter={mouseEnt}><IoMdCopy className='text-xl' /></button>
</div>
    </>
  )
}

export default page