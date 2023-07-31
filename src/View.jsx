import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'
import RightSide from './components/RightSide/RightSide'


export default function View() {
  return (
    <>
    <div className="App">
      <div className="glass">
        <Sidebar/>
        <Dashboard/>
        <RightSide/>
      </div>
    </div>
    
    </>
  )
}
