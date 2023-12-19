import { Link } from 'react-router-dom';
import BookmarkLogo from '../assets/logo-bookmark-white.svg?react'
import FacebookIcon from '../assets/icon-facebook.svg?react'
import TwitterIcon from '../assets/icon-twitter.svg?react'

const Footer = () => {
    return ( 
        <div className="Footer">
            
            <div className="left-side">
                <BookmarkLogo/>
                <ul>
                    <li><Link to="features">FEATURES</Link></li>
                    <li><Link to="pricing">PRICING</Link></li>
                    <li><Link to="CONTACT">CONTACT</Link></li>
                </ul>
            </div>
            <div className="right-side">
                <FacebookIcon className="icon"/>
                <TwitterIcon className="icon"/>
            </div>
        </div>
     );
}
 
export default Footer;