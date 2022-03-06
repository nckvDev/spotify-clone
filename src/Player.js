import React from 'react'
import './Player.css'
import Body from './Body'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Player() {
  return (
    <div className='player'>
        <div className='player__body'>
            {/* Sidebar */}
            <Sidebar />
            {/* Body */}
            <Body />
        </div>

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Player