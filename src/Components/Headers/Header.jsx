import React from 'react'
import AceilLogo from '../../../src/assets/Images/aceilWhite.svg'
import '../../css/Header.css'
import Pages from '../Pages.jsx'
import Button from '../Button.jsx'
import Header2 from './Header2.jsx'

export default function Header() {
    return (
        <>
            <header className='w-full flex justify-center items-center header1 sticky top-0 bg-[#0e0e0e77] backdrop-blur-[15px]'>
                <nav className='w-[95%] max-w-[900px] flex justify-between items-center'>
                    <img src= {AceilLogo} alt='Our Logo' className= 'w-[50px]' />

                    <div className= 'flex justify-center items-center gap-[20px]'>
                        <Pages name='Archievements'/>
                        <Pages name= 'My work'/>
                        <Pages name= 'Contacts'/>
                        <Pages name= 'About me'/>
                        <Button name='Hire me'/>
                    </div>
                </nav>
            </header>
            
            <Header2/>
        </>
    )
}
