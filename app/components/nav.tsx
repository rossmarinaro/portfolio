'use client'

import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image'
import portrait from '../../public/me.png'

export default function Navigation()
{

    const [ navOpen, setNavOpen ] = useState(false),

    goToStore = () => window.open('https://rem-webstore.onrender.com'),

    toggleNav = (toggle: boolean) => {

        const icon = document.querySelector('.icon');

        if (icon)
            icon.classList.toggle("open");

        setNavOpen(toggle);
    }

    return (

        <div className='fixed top-0 w-full'>

            <nav className={`w-full flex bg-black`}>

                <div className={`relative icon nav-icon h-[60px] w-[60px] rounded-xl`} onClick={e => {
                    e.preventDefault();
                    toggleNav(!navOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <h1 className="md:ml-[40%] max-lg:ml-[50%] max-sm:ml-[10%] mt-[20px] heading-style digitizer" style={{ backdropFilter: 'blur(5px)', border: '0.2em solid black' }}>Ross Marinaro Portfolio</h1>
                <Image loading="eager" width={ 60 } height={ 60 } src={ portrait } alt="main image" className="ml-[2%] max-sm:hidden" />
            </nav>
                        
            {
                navOpen && <ul id="main-nav" className={ `digitizer nav-menu-${navOpen ? 'show-menu' : ''} ${navOpen && 'bg-black'}` }>

                    <Link onClick={ () => toggleNav(false) } className="max-sm:pt-[50%] nav-link" href="/"><li>Home</li></Link>
                    <Link onClick={ () => toggleNav(false) } className="nav-link" href="/blogs"><li>Blogs</li></Link>
                    <Link onClick={ () => toggleNav(false) } className="nav-link" href="/artwork"><li>Artwork</li></Link>
                    <Link onClick={ () => toggleNav(false) } className="nav-link" href="/animation"><li>Animation</li></Link>
                    <Link onClick={ () => toggleNav(false) } className="nav-link" href="/books"><li>Books</li></Link>
                    <Link onClick={ () => toggleNav(false) } className="nav-link" href="/software"><li>Games</li></Link>
                    <Link onClick={ goToStore } className=" max-sm:pb-[100%] nav-link" href=""><li>Store</li></Link>

                </ul> 
            }

        </div>
    );
}

