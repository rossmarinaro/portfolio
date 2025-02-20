'use client'

import Link from 'next/link'
import { useState } from 'react';


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

        <>
            <nav className={`w-full flex h-[65px] bg-black`}>

                <div className={`relative icon nav-icon h-[60px] w-[60px] rounded-xl`} onClick={e => {
                    e.preventDefault();
                    toggleNav(!navOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <h1 className="text-sm md:ml-[40%] max-lg:ml-[50%] max-sm:ml-[10%] mt-[20px] heading-style digitizer" style={{ backdropFilter: 'blur(5px)', border: '0.2em solid black' }}>Ross Marinaro Portfolio</h1>

            </nav>
                        
            {
                navOpen && <ul id="main-nav" className={ `bangers nav-menu-${navOpen ? 'show-menu' : ''} ${navOpen && 'bg-[#00ff4c]'}` } style={{ border: '0.2em solid black' }}>

                    <Link className="nav-link" href="/"><li>Home</li></Link>
                    <Link className="nav-link" href="/blogs"><li>Blogs</li></Link>
                    <Link className="nav-link" href="/artwork"><li>Artwork</li></Link>
                    <Link className="nav-link" href="/animation"><li>Animation</li></Link>
                    <Link className="nav-link" href="/books"><li>Books</li></Link>
                    <Link className="nav-link" href="/software"><li>Software</li></Link>
                    <Link onClick={ goToStore } className="nav-link" href=""><li>Store</li></Link>

                </ul> 
            }

        </>
    );
}

