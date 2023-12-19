import { Link } from 'react-router-dom'
import ModuleOneSvg from '../../assets/illustration-hero.svg?react'

const HomeModule1 = () => {
return (
<div className="HomeModule1"> 
    <div className="left-side">
        <h1>A Simple Bookmark Manager</h1> 
        <p>
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
            load instantly. Try it for free
        </p>
        <div className="button-container">
            <Link className='button-chrome'>Get it on Chrome</Link>
            <Link className='button-firefox'>Get it on Firefox</Link>
        </div>
    </div>
    <div className="right-side">
        <ModuleOneSvg className="svg"/>
        <div className="blue-bg"></div>
    </div>
</div>
);
}

export default HomeModule1;