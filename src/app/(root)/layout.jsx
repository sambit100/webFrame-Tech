import React from 'react'
import Navbar from './Navbar'
import Mainmenu from './Mainmenu'
import Footer from './Footer'



const layout = () => {
  return (
    <div>
        <Navbar/>
        <Mainmenu/>
        
       <div>

        <Footer/>
       </div>
    </div>
  )
}

export default layout