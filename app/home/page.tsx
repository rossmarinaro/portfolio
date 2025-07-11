'use client'

import Marquee from 'react-fast-marquee'
import Link from 'next/link'
import Image from 'next/image'
import { siteRoutes } from './siteRoutes'
import { Suspense } from 'react' 
import Game from '../components/Game'

function hasWebGl() {
    try {
        return window.WebGLRenderingContext;
    } catch (err) {
        return false;
    }
}

export default function Home()
{
    return ( 
        
        <section /* className="component" */ className="component">

            <Suspense fallback={<div className='bg-white'>Loading...</div>}>
                { /* if (hasWebGl()) */ <Game /> }
            </Suspense>

            <div className="p-5 content-container container rounded-xl lg:w-[60%] flex flex-col flex-wrap items-center md:mt-5 max-sm:mt-[20%] lg:ml-[20%] " >  

                <Marquee /* gradient */ pauseOnHover={true}>

                {
                    siteRoutes.map((obj, index) => ( 
                        <Link key={index} href={obj.route}>
                            <Image
                                key={index}
                                width={4}
                                height={4}
                                loading="lazy"
                                src={ obj.image }
                                alt={ obj.type }
                                className="w-full h-[250px] p-[5%]"
                            />
                        </Link> 
                    ))
                }

                </Marquee> 

                <h1 className="digitizer heading-style">ABOUT</h1>	

                <p className="indent-[2%]"> Ross is a multi-media producer specializing in digital asset creation, illustration, 2d animation,
                    and software engineering. Originally from New Jersey, he currently lives in Philadelphia, PA USA.
                    When he isn't in the weeds, dilligently working on his comic book and video game franchise or game engine, he is
                    likely suited up at the cockpit of his bass-station navigating the low end frequencies.
                    There is also the possibility that he is doing NEITHER, but in fact stuffing his face with 
                    sushi, caviar, or chicken tenders.
                </p>	

                <h1 className="digitizer heading-style">SERVICES</h1>	

                <p className="indent-[2%]"> My name is Ross, and I am here to elaborate. Feel free to explore the various nuances of this site, there is
                    a decent amount to unpack. I specialize in custom stylized illustration for print or web, 
                    promotional materials, games, and books. I also build computer games, engines and other software, web apps and contribute to open source projects. I'm an open book in most
                    cases, however I do have my design preferences. Please visit the store tab in navigation to be directed to my online shop for merch.
                </p>	    

            </div>

            <br/> 

        </section>

    )

}
