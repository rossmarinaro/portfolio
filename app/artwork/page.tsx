'use client'

import { digital } from './digital_collection'
import { AI } from './AI_collection'

import { useState, useRef, ChangeEvent } from "react"
import Carousel from "../components/carousel"
       
export default function Artwork() 
{
    const [ state, setState ] = useState('Illustration'),

    artType = useRef<HTMLSelectElement | null>(null), 

    component = (artType: string) => {   

        return (       
            <figure className="rounded-xl mb-[5%] pt-[2%]">        
                <Carousel arr={ artType === 'Illustration' ? digital : AI } /> 
            </figure>
        );
    }

    return ( 
        <section className="w-full">

            <select style={{ border: '0.2em solid black' }} className='w-full text-black bg-[#00ff4c] p-2 pl-[45%] max-sm:pl-[40%] mb-[5%] rounded-xl' name="art-type" ref={ artType } onChange={ async (e: ChangeEvent<HTMLSelectElement>): Promise<void> => setState(e.target.value) } required>
                <option value="Illustration">Illustration</option>
                <option value="AI">AI filters</option>
            </select> 
 
            { component(state) }
 
        </section>
    )   
}
