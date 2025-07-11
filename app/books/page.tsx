'use client'

export default function Books() {

    return (
        <section className="md:mt-[7%] md:ml-[30%] mb-[5%] max-sm:ml-[5%] max-sm:mt-[25%]">
            <figure>
                <iframe className="lg:w-[600px] md:w-[400px] max-sm:w-[325px] h-[280px]" style={{ border: '0.2em solid black' }} src='https://pubhtml5.com/bookcase/yrphm/green' seamless={true} allowFullScreen={true} ></iframe>
            </figure>
        </section>
    )
}
