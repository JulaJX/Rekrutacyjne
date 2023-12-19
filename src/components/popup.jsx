import { useState, useEffect } from 'react';

import CloseIcon from '../assets/icon-close.svg?react'
import HomeModule2 from '../pages/home/home-module-2';

const PopUp = () => {
    const [popUp,setPopeUp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPopeUp(true)
        }, 30000); //30sec
        return () => clearTimeout(timer);
      }, [popUp]);

    return ( 
        <>
            <div className={popUp ? 'PopUp display-popup' : 'PopUp' }>
                <div className="window">
                    
                    <CloseIcon className="icon-popup" onClick={() => {
                    if(popUp==true){setPopeUp(false)}}}/>
                    <HomeModule2/>
                </div>
            </div>
        </>
     );
}
 
export default PopUp;