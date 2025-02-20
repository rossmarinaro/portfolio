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

                    <div className="component">
                        <figure className="gallery rounded-xl ml-[5%] pt-[2%]">
                        <Carousel arr={ digital } />
                        </figure>
                    </div>
                );
                   
            case 'penink':

                return (  

                    <div className="component">
                        <figure className="gallery rounded-xl ml-[5%] pt-[2%]">
                            <ul> 
                                <li className="image-gallery-link vector"><a href={ drawing1.src } target='_blank' rel="noopener noreferrer"><Image src={ drawing1.src } width={ 488 } height={ 488 } alt="vector illustration"/></a></li> 
                                <li className="image-gallery-link vector"><a href={ drawing2.src } target='_blank' rel="noopener noreferrer"><Image src={ drawing2.src } width={ 488 } height={ 488 } alt="vector illustration"/></a></li> 
                            </ul>
                        </figure>
                    </div>
                );

            case 'AI':

                return (       
                    <div className="component">
                        <figure className="gallery rounded-xl ml-[5%] pt-[2%]">        
                            <Carousel arr={ AI } />
                        </figure>
                    </div>
                );
        }

    }

    return ( 
        <section>

            <select className='ml-[50%]' name="art-type" ref={ artType } onChange={ async (e: ChangeEvent<HTMLSelectElement>): Promise<void> => setState(e.target.value) } required>
                <option value="digital">digital</option>
                <option value="penink">pen & ink</option>
                <option value="AI">AI</option>
            </select> 

            { component(state) }

        </section>
    )   
}
