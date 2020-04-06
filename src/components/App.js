import React from 'react'
import faker from 'faker'
import SingleFeed from './SingleFeed'
import SingleCardRequest from './SingleCardRequest'
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import '../Index.css'

const App =() => {
   return (
      <div className='mainDiv' style={{
         height: '100vh'
      }}>
         <Header />
         <Sidebar />
         <Body />
         <Footer year={(new Date()).getFullYear()} />
      </div>
   )
}

export default App
