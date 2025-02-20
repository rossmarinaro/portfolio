import image1 from "../static/digital_art/swankytiger.png"
import image2 from "../static/digital_art/carrot.png"
import image3 from "../static/featured/randori.png"
import image4 from "../static/featured/spaghyeti-engine.png"

export const siteRoutes = [
    {
        type: "pen & ink",
        image: image1,
        route: '/artwork' 
    },
    {
        type: "digital illustration",
        image: image2,
        route: '/artwork' 
    },
    {
        type: "games",
        image: image3,
        route: '/software' 
    },
    {
        type: "projects",
        image: image4,
        route: '/software' 
    },
];