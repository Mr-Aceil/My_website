import React from 'react'
import InCont from '../Containers/InContainer'
import OutCont from '../Containers/OutContainer'
import Button from  '../Button'
import Hero from './HomeHero'

export default function section1Home() {
    const fast = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M10.45 15.5q.6.6 1.55.588t1.4-.688l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.675.45-.712 1.375t.562 1.525M12 4q.9 0 1.775.15t1.7.475q.4.15.85.563t.25.787t-.9.5t-1.125-.025q-.625-.225-1.262-.337T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.65-.113-1.275T19.55 11.4q-.15-.425-.05-.825t.45-.675q.325-.25.713-.15t.537.45q.375.875.575 1.788T22 13.85q.025 1.425-.325 2.725T20.65 19.05q-.275.45-.75.7t-1 .25H5.1q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387T2 14q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 4m.175 7.825"/></svg>
    const money = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.42 0 2.13.54 2.39 1.4c.12.4.45.7.87.7h.3c.66 0 1.13-.65.9-1.27c-.42-1.18-1.4-2.16-2.96-2.54V4.5c0-.83-.67-1.5-1.5-1.5S10 3.67 10 4.5v.66c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-1.65 0-2.5-.59-2.83-1.43c-.15-.39-.49-.67-.9-.67h-.28c-.67 0-1.14.68-.89 1.3c.57 1.39 1.9 2.21 3.4 2.53v.67c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.65c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4"/></svg>
    const trust = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M3.9 5.6L12 3v18c-5.786-2.4-8.1-7-8.1-9.6zm16.2 0L12 3v18c5.786-2.4 8.1-7 8.1-9.6z"/></svg>
    const Ui = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#mageFigma0)"><path fill="#fff" d="M17.393 8.937A3.87 3.87 0 0 0 15.04 2H8.948a3.88 3.88 0 0 0-2.373 6.937a3.88 3.88 0 0 0 0 6.136a3.87 3.87 0 1 0 6.221 3.068v-2.929a3.8 3.8 0 0 0 2.224.716a3.87 3.87 0 0 0 2.351-6.937zm-6.179 9.204a2.266 2.266 0 1 1-2.266-2.266h2.266zm0-3.87H8.948a2.266 2.266 0 1 1 0-4.532h2.266zm0-6.135H8.948a2.266 2.266 0 0 1 0-4.533h2.266zm3.827 6.136a2.245 2.245 0 0 1-2.223-1.882a1.75 1.75 0 0 1 0-.77a2.267 2.267 0 1 1 2.223 2.652m0-6.136h-2.223V3.603h2.223a2.266 2.266 0 1 1 0 4.533"/></g><defs><clipPath id="mageFigma0"><path fill="#fff" d="M5.079 2h13.843v20H5.079z"/></clipPath></defs></g></svg>


    return (
        <>
        <OutCont>
            <InCont others={'flex-col gap-[25px] py-[50px]'}>
                <div className='flex justify-between gap-[10px] items-center w-full max-w-[100px]'>
                    <span className='h-[5px] w-[5px] bg-[#13ff13] rounded-[500px]'/>
                    <p className='text-[white] poppins text-[0.6em]'>Available for hire</p>
                </div>

                <h1 className='w-[100%] max-w-[600px] text-white text-[2.5em] font-thin text-center'>
                    Flex on modern web Ui designs, "What you order you shall get".
                </h1>
                <p className='w-[100%] max-w-[600px] poppins text-[0.8em] font-[50] text-[#a8a8a8] text-center'>
                    I believe that a website should be more than just a collection of pages, it should be an experience!
                </p>

                <Button name='Hire me'/>

            </InCont>
        </OutCont>
        
        <OutCont>
            <div className='justify-between flex items-center flex-wrap w-[95%] max-w-[900px] in-cont'>
                <Hero logo={fast} name='Fast services'/>
                <Hero logo={money} name='Affordable'/>
                <Hero logo={trust} name= 'Reliable'/>
                <Hero logo={Ui} name= 'Great UI'/>
            </div>
        </OutCont>
        </>
    )
}
