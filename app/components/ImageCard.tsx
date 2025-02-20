import Image, { StaticImageData } from "next/image";

export default function ImageCard(props: { index: number, href: string, src: StaticImageData }) {
    return (
        <a href={ props.href } target='_blank' rel="noopener noreferrer" className="carousel-slide w-full h-[100px]">
            <Image src={ props.src } alt="vector illustration"/>
        </a>
    );
}