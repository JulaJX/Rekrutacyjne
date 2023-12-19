import HomeModule1 from "./home-module-1";
import HomeModule2 from "./home-module-2";
import HomeModule3 from './home-module-3';
import HomeModule4 from './home-module-4';
import HomeModule5 from './home-module-5';
const home = () => {
    return ( 
        <div className="home">
            <HomeModule1/>
            <HomeModule2/>
            <HomeModule3/>
            <HomeModule4/>
            <HomeModule5/>
        </div>
     );
}
 
export default home;