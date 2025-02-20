import IGLogo from './svg-logos/ig-logo'
import LinkedInLogo from './svg-logos/linkedin-logo'
import LogoGitHub from './svg-logos/github-logo'
import ItchIO from './svg-logos/itch-io-logo'
import ArtStationLogo from './svg-logos/artstation-logo'

const anchor = {
  listStyleType: 'none',
  textDecoration: 'transparent'
}
 
export default function Footer()
{

    return (   

        <footer className="content-container col-2-2 container digitizer rounded-xl p-5" style={{ backdropFilter: 'blur(5px)', border: '0.25em solid black', color: '#000', textShadow: '0.1em 0.1em 0.1em #6B9AF9' }}>

            <a className="lg:ml-[45%] md:ml-[40%] max-sm:ml-[25%]" href="mailto:remaremyinitials@gmail.com" style={ anchor }>Contact</a>

            <h3 className="lg:ml-[35%] md:ml-[20%] max-sm:ml-[25%] mt-[3%] mb-[3%]">PASTABOSS ENTERPRISE &copy; 2025</h3>

            <div className="flex max-sm:grid max-sm:grid-cols-3 justify-center" >

                <a href="https://github.com/rossmarinaro" style={ anchor }><LogoGitHub /></a>    
                <a href="https://instagram.com/pastaboss/" style={ anchor }><IGLogo /></a>
                <a href="https://www.linkedin.com/in/ross-marinaro-81700336"style={ anchor }><LinkedInLogo /></a>
                <a href="https://pastaboss.itch.io" style={ anchor }><ItchIO /></a>
                <a href="https://rossmarinaro.artstation.com/" style={ anchor }><ArtStationLogo /></a>

            </div>

        </footer>  			    
    )
}

