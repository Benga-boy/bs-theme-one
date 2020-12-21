import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './component/common/Footer'
import Home from './component/common/Home'
import Navbar from './component/common/Navbar'
import Create from './component/pages/Create'
import Explore from './component/pages/Explore'
import Share from './component/pages/Share'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Fragment>
        <Home />
        <Explore />
        <Create />
        <Share />
      </Fragment>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App

