import { Link } from 'react-router-dom';

const HomeModule2Element = ({ svg,title,description }) => {
    return ( 
    <div className="HomeModule2Element">
        <div className="left-side">
            {svg}
            <div className="blue-bg"></div>
        </div>
        <div className="right-side">
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to="#">More Info</Link>
        </div>
    </div>
     );
}
 
export default HomeModule2Element;