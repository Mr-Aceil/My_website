import React, { useState } from 'react'
import AceilLogo from '../../../src/assets/Images/aceilWhite.svg'
import '../../css/Header.css'
import Pages from '../Pages.jsx'
import Button from '../Button.jsx'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = ()=>{
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <div className='header2'>
        <header className='w-full flex justify-center items-center'>
            <nav className='w-[90%] max-w-[1000px] flex justify-between items-center'>
                <img src= {AceilLogo} alt='Our Logo' className= 'w-[50px]' />

                <div onClick={handleClick}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
                </div>
            </nav>
        </header>

        <section className={`w-full h-full fixed top-0 bg-[#000000a4] backdrop-blur-[10px] hamburger 
                            transform transition-transform duration-[0.1s] 
                            ${menuOpen ? 'opacity-[1] translate-x-0' : 'opacity-[0] translate-x-full'}`}>

            <div className={`h-full w-full p-[10px] max-w-[300px] fixed top-0 right-0 bg-[#0e0e0e]  
                            transform transition-transform duration-[0.5s]  
                            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className=' w-full h-full max-w-[1000px] flex flex-col justify-between items-center'>
                    <div className='out-cont w-full right-0 flex justify-end py-[5px]'>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#fff" fill-rule="evenodd" d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"/></svg>
                    </div>
                    
                    <Pages others='out-cont py-[15px] border-t-[1px] border-dashed border-[#444444] w-full flex justify-center' name='Archievements'/>
                    <Pages others='out-cont py-[15px] border-t-[1px] border-dashed border-[#444444] w-full flex justify-center' name='My Work'/>
                    <Pages others='out-cont py-[15px] border-t-[1px] border-dashed border-[#444444] w-full flex justify-center' name='Contacts'/>
                    <Pages others='out-cont py-[15px] border-t-[1px] border-dashed border-[#444444] w-full flex justify-center' name='About me'/>

                    <div className='w-full flex justify-center items-center py-[10px] border-t-[1px] border-dashed border-[#444444]'>
                        <Button name='Hire me' others= 'w-full'/>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}
