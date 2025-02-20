'use client'

import Image from "next/image"

import drawing1 from '../static/penink/realityshift.png'
import drawing2 from '../static/penink/carnevil.png'

import { digital } from './digital_collection'
import { AI } from './AI_collection'

import { useState, useRef, ChangeEvent } from "react"
import Carousel from "../components/carousel"
       
export default function Artwork() 
{
    const [ state, setState ] = useState('digital'),

    artType = useRef<HTMLSelectElement | null>(null), 

    component = (artType: string) => {   

        switch (artType)
        {
            case 'digital':

                return (  
                    <figure className="rounded-xl ml-[5%] mb-[5%] pt-[2%]">
                        <Carousel arr={ digital } />
                    </figure>
                );
                   
            case 'penink':

                return (  
                    <figure className="gallery rounded-xl ml-[5%] mb-[5%] pt-[2%]">
                        <ul> 
                            <li className="image-gallery-link vector"><a href={ drawing1.src } target='_blank' rel="noopener noreferrer"><Image src={ drawing1.src } width={ 488 } height={ 488 } alt="vector illustration"/></a></li> 
                            <li className="image-gallery-link vector"><a href={ drawing2.src } target='_blank' rel="noopener noreferrer"><Image src={ drawing2.src } width={ 488 } height={ 488 } alt="vector illustration"/></a></li> 
                        </ul>
                    </figure>
                );

            case 'AI':

                return (       
                    <figure className="gallery rounded-xl ml-[5%] mb-[5%] pt-[2%]">        
                        <Carousel arr={ AI } />
                    </figure>
                );
        }

    }

    return ( 
        <section>

            <select style={{ border: '0.2em solid black' }} className='text-black bg-[#00ff4c] p-2 ml-[45%] max-sm:ml-[35%] mb-[5%] rounded-xl' name="art-type" ref={ artType } onChange={ async (e: ChangeEvent<HTMLSelectElement>): Promise<void> => setState(e.target.value) } required>
                <option value="digital">digital</option>
                <option value="penink">pen & ink</option>
                <option value="AI">AI</option>
            </select> 

            { component(state) }
 
        </section>
    )   
}
