//Styles
import './app.scss'
//React components
import {Routes, Route} from 'react-router-dom'
//Custom components
import Navbar from '../src/components/navbar'
import Footer from '../src/components/footer'

import HomeModule2Element from './pages/home/home-module-2-element'
import ModuleTwoSvg1 from '../src/assets/illustration-features-tab-1.svg?react'
import ModuleTwoSvg2 from '../src/assets/illustration-features-tab-2.svg?react'
import ModuleTwoSvg3 from '../src/assets/illustration-features-tab-3.svg?react'
//Pages components
import Home from './pages/home/home'
import Pricing from '../src/pages/pricing/pricing'
import Features from '../src/pages/features/features'
import Contact from '../src/pages/contact/contact'

function App() {

  return (
   <div className="App">
      <Navbar></Navbar> 
      {/* React router V6 */}
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<HomeModule2Element svg={<ModuleTwoSvg1 className="svg"/>} title="Bookmark in one click"
           description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."/>}/>     
          <Route path="speedy" element={<HomeModule2Element svg={<ModuleTwoSvg2 className="svg"/>} title="Intelligent search" 
           description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."/>}/>     
          <Route path="easy" element={<HomeModule2Element svg={<ModuleTwoSvg3 className="svg" />} title="Share your bookmarks" 
           description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."/>}/>     
        </Route>
        <Route path="features" element={<Features/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
   </div>
  )
}

export default App
