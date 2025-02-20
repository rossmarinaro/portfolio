'use client'

import Image from 'next/image'
import meatBallin from '../static/featured/pastaboss.png'
import pinball from '../static/featured/skeetshoot.png'
import demo from '../static/featured/randori.png'
import swankyVelvet from '../static/featured/bluepoint.png'
import spaghyetiDAW from '../static/featured/spaghyeti-daw.png'
import spaghyetiEngine from '../static/featured/spaghyeti-engine.png'

import { useState, useRef, ChangeEvent } from 'react'


export default function Software()
{
  
    const [ state, setState ] = useState('games'),

    artType = useRef<HTMLSelectElement | null>(null),

    component = (softwareType: string) => { 

        if (softwareType === 'software')
            return (
                <div className="max-sm:ml-[10%] gallery wrapper-container">

                    <a href="https://github.com/rossmarinaro/spaghyeti_source-engine"><Image className="spaghyeti-software" src={ spaghyetiEngine } alt="thumbnail link"/></a>
                    <a href="https://rossmarinaro.github.io/spaghyeti-daw/dist"><Image className="spaghyeti-software" src={ spaghyetiDAW } alt="thumbnail link"/></a>

                </div>
            )

        else if (softwareType === 'games')
            return (
                <div className="max-sm:ml-[10%] gallery wrapper-container">  
             
                    <a href="https://pastaboss.onrender.com"><Image className="spaghyeti-software" src={ meatBallin } alt="video game thumbnail"/></a>
                    <a href="https://pastaboss.itch.io/randori"><Image className="spaghyeti-software" src={ demo } alt="video game thumbnail"/></a>
                    <a href="https://pastaboss.itch.io/meatball-skeetshoot"><Image className="spaghyeti-software" src={ pinball } alt="video game thumbnail"/></a>
                    <a href="https://rossmarinaro.github.io/bluepoint"><Image className="spaghyeti-software" src={ swankyVelvet } alt="video game thumbnail"/></a>
                  
                </div>
            )
    }

    return ( 
        
        <section className="w-full">
            
            <select style={{ border: '0.2em solid black' }} className='w-full text-black bg-[#00ff4c] p-2 pl-[45%] max-sm:pl-[40%] mb-[5%] rounded-xl' name="art-type" ref={ artType } onChange={ async (e: ChangeEvent<HTMLSelectElement>): Promise<void> => setState(e.target.value) } required>

                <option value="games">games</option>
                <option value="software">software</option>

            </select>

            { component(state) }

        </section>
    ) 
}