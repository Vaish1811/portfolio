import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='bg-black h-6/12 py-10 md:bg-black md:h-15 md:mx-auto md:px-10 md:flex md:items-center'>
                <div className='container flex flex-col justify-around md:container md:flex md:items-center md:justify-between'>
                    <h1 className='text-2xl font-bold text-white'>Portfolio</h1>
                    <ul className=' flex flex-col justify-between text-white h-1/4 md:flex-row md:justify-around md:h-auto md:w-1/4 md:text-white'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header