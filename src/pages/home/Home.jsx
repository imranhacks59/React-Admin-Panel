import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <div className="sidebar">

      <Sidebar />
      </div>
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
        <Widget type="user"/>
        <Widget type="order" />
        <Widget type="earning"/>
        <Widget type="balance" />
      </div>
      </div>
      {/* widget */}
     
    </div>
  )
}

export default Home