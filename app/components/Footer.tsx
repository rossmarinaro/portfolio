import logo_instagram from '../static/vectors/svg-logos/ig-logo.js'
import logo_linkedIn from '../static/vectors/svg-logos/linkedin-logo.js'
import logo_github from '../static/vectors/svg-logos/github-logo.js'
import logo_itchIO from '../static/vectors/svg-logos/itch-io-logo.js'
import logo_artstation from '../static/vectors/svg-logos/artstation-logo.js'

const anchor = {
  listStyleType: 'none',
  textDecoration: 'transparent'
}
 
export default function Footer()
{

    return (   

        <div id="footer" className="digitizer rounded-xl p-5" style={{ backdropFilter: 'blur(5px)', border: '0.25em solid black' }}>

            <footer style={{ color: '#000', textShadow: '0.1em 0.1em 0.1em #6B9AF9' }}>

            <p style={{ paddingLeft: '35%' }}><a href="mailto:remaremyinitials@gmail.com" style={ anchor }>Contact</a></p>

            <br/>

            <h3>PASTABOSS ENTERPRISE &copy; 2025</h3>

            <br/>

            <div id="social-media-icons">

                <a href="https://github.com/rossmarinaro" style={ anchor }>
                    <div className="social-media-icon" contentEditable="false" dangerouslySetInnerHTML={{ __html: logo_github }}></div>
                </a>    
                <a href="https://instagram.com/pastaboss/" style={ anchor }>
                    <div className="social-media-icon" contentEditable="false" dangerouslySetInnerHTML={{ __html: logo_instagram }}></div>
                </a>
                <a href="https://www.linkedin.com/in/ross-marinaro-81700336"style={ anchor } >
                    <div className="social-media-icon" contentEditable="false" dangerouslySetInnerHTML={{ __html: logo_linkedIn }}></div>
                </a>
                <a href="https://pastaboss.itch.io" style={ anchor }>
                    <div className="social-media-icon" contentEditable="false" dangerouslySetInnerHTML={{ __html: logo_itchIO }}></div>
                </a>
                <a href="https://rossmarinaro.artstation.com/" style={ anchor }>
                    <div className="social-media-icon" contentEditable="false" dangerouslySetInnerHTML={{ __html: logo_artstation }}></div>
                </a>

            </div>

            </footer>  

        </div>			    
    )
}

