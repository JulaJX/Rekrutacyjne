import { Link } from 'react-router-dom'
import { useState } from 'react'

import BookmarkLogo from '../assets/logo-bookmark.svg?react'
import BookmarkLogoWhite from '../assets/logo-bookmark-white.svg?react'
import Hamburger from '../assets/icon-hamburger.svg?react'
import CloseIcon from '../assets/icon-close.svg?react'
import PopUp from '../components/popup'

const Navbar = () => {
const [menu,setMenu] = useState(false)

return (
<>
    <PopUp/>
    <nav>

        <div className="nav-left">
            <Link to="/"><BookmarkLogo/></Link>
        </div>

        <ul className="nav-right">
            <li><Link to="/features" className='link'>FEATURES</Link></li>
            <li><Link to="/pricing" className='link'>PRICING</Link></li>
            <li><Link to="/contact" className='link'>CONTACT</Link></li>
            <li className='login-button'>LOGIN</li>
            <Hamburger className="hamburger" onClick={() => {
                if(menu==false){setMenu(true)}
                else{setMenu(false)}
                }}/>
        </ul>
        <div className={menu ? 'nav-mobile-container display' : 'nav-mobile-container' }>
            <div className="nav-mobile">
                <div className="menu-mobile">
                    <BookmarkLogoWhite className="icon-mobile"/>
                    <CloseIcon className="icon-mobile" onClick={() => {
                    if(menu==false){setMenu(true)}
                    else{setMenu(false)}
                    }}/>
                </div>
                <Link to="/features" className='link-mobile'>FEATURES</Link>
                <Link to="/pricing" className='link-mobile'>PRICING</Link>
                <Link to="/contact" className='link-mobile additional-border'>CONTACT</Link>
                <div className='login-button-mobile'>LOGIN</div>
            </div>
        </div> 
    </nav>
   
</>
);
}

export default Navbar;