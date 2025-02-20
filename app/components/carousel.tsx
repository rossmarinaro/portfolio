'use client'

import ImageCard from "./ImageCard"
import { useState, useEffect } from "react"

export default function Carousel(props: { arr: any[] })
{
    const [ dimensions, setDimensions ] = useState({ width: 0, height: 0 }),

    handleResize = (width: number, height: number) => setDimensions({ width, height });

    useEffect(() => {

        handleResize(window.innerWidth, window.innerHeight);

        window.addEventListener("resize", () => handleResize(window.innerWidth, window.innerHeight), false);

        return () => window.removeEventListener("resize", () => {});

    }, []);  

    return (

        /* clickable */

        <div
            id="multi-slide" 
            data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "lg": 3 } }'
            className="relative bg-black rounded-xl"
            style={{ visibility: dimensions.width >= 300 ? 'visible' : 'hidden' }}
            > 
            <div className="relative carousel max-sm:w-[200px] sm:max-w-4xl"> 
                <div className="carousel-body opacity-0">
                    { props.arr.map((obj, index) => (<div key={ index }><ImageCard index={ index } href={ obj.image.src } src={ obj.image }/></div>)) }
                </div>
            </div>

            <button type="button" className="carousel-prev absolute">
                <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
                <span className="sr-only">Previous</span>
            </button>

            <button type="button" className="carousel-next absolute">
                <span className="sr-only">Next</span>
                <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
            </button>

        </div>

    );

}

/* draggable */

{/* <div id="draggable" data-carousel='{ "loadingClasses": "opacity-0","dotsItemClasses": "carousel-dot", "slidesQty": { "xs": 1, "lg": 3 }, "isDraggable": true }' className="bl-white relative w-full" >
    <div className="relative carousel pl-auto max-w-7xl h-800">
        <div className="carousel-body h-full carousel-dragging:transition-none carousel-dragging:cursor-grabbing cursor-grab    opacity-0" > 
        {props.arr.map((obj, index) => (
                <props.Component key={index} {...obj} />
            ))}
        </div>
    </div>
    <div className="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3 bg-white"></div>
</div> */}