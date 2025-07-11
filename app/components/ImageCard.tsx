import Image, { StaticImageData } from "next/image";

export default function ImageCard(props: { index: number, href: string, src: StaticImageData }) {
    return (
        <a href={ props.href } target='_blank' rel="noopener noreferrer" className="carousel-slide w-full">
            <Image src={ props.src } className="h-[100%]" alt="vector illustration"/>
        </a>
    );
}