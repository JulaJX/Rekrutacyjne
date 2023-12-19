import { Link } from 'react-router-dom'
import BgDots from '../../assets/bg-dots.svg?react'

const HomeModule3Card = ({svg,browser,version,id}) => {
    return ( 
            <div className={`${id}`}>
                    {svg}
                    <span className='title'>Add to {browser}</span>
                    <span className='desc'>Minimum version {version}</span>
                    <BgDots className='dots'/>
                    <Link to="#"><div className="install-button">Add & Install Extension</div></Link>
            </div>
     );
}
 
export default HomeModule3Card;