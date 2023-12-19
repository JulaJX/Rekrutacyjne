import HomeModule3Card from './home-module-3-card'

import ChromeLogo from '../../assets/logo-chrome.svg?react'
import FirefoxLogo from '../../assets/logo-firefox.svg?react'
import OperaLogo from '../../assets/logo-opera.svg?react'


const HomeModule3 = () => {
    return ( 
        <div className="HomeModule3">
            <h3>Download the extension</h3>
            <p>We've got more browsers in the pipeline. 
                Please do let us know if you've got
                 a favourite you'd like us to prioritize</p>
            <div className="browser-container">
                <HomeModule3Card svg={<ChromeLogo className="svg"/>} browser="Chrome" version='62' id="chrome-card"/>
                <HomeModule3Card svg={<FirefoxLogo className="svg"/>} browser="Firefox" version='55' id="firefox-card"/>
                <HomeModule3Card svg={<OperaLogo className="svg"/>} browser="Chrome" version='46' id="opera-card"/>
            </div>
                
        </div>
     );
}
 
export default HomeModule3;