import { Link, Outlet, useLocation } from 'react-router-dom'

const HomeModule2 = () => {
    let url  = useLocation();
    let location = url.pathname;

    return ( 
        <div className="HomeModule2">
            <h2>Features</h2>
            <p>
                Our aim is make it quick and easy for your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <ul className='features-container'>
                <li style={{borderBottom: location === "/" ? '3px solid red': ' '}}><Link to='/'>Simple Bookmarking</Link></li>
                <li style={{borderBottom: location === "/speedy" ? '3px solid red': ' '}}><Link to='/speedy'>Speedy Searching</Link></li>
                <li style={{borderBottom: location === "/easy" ? '3px solid red': ' '}}><Link to='/easy'>Easy Sharing</Link></li>
            </ul>
            <Outlet/>
        </div>
     );
}
 
export default HomeModule2;