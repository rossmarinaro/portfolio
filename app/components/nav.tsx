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

        <div className={`mt-[2%] mb-[2%] relative w-full `}>

            <div >
                <div className={`icon nav-icon h-[40px] w-[50px] ml-[50%] bg-black`} onClick={e => {
                    e.preventDefault();
                    toggleNav(!navOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                {
                    navOpen && <ul id="main-nav" className={ `pt-[10%] bangers nav-menu-${navOpen ? 'show-menu' : ''} ${navOpen && 'bg-black'}` }>

                        <Link className="nav-link" href="/"><li>Home</li></Link>
                        <Link className="nav-link" href="/blogs"><li>Blogs</li></Link>
                        <Link className="nav-link" href="/artwork"><li>Artwork</li></Link>
                        <Link className="nav-link" href="/animation"><li>Animation</li></Link>
                        <Link className="nav-link" href="/books"><li>Books</li></Link>
                        <Link className="nav-link" href="/software"><li>Software</li></Link>
                        <Link onClick={ goToStore } className="nav-link" href=""><li>Store</li></Link>

                    </ul> 
                }
            </div>
            
        </div>
    );
}

