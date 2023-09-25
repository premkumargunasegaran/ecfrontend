import React from 'react'
import "./sidebar.css"
import Catagory from "./Catagory/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Color"

function Sidebar({handleChange}) {
  return (
  <>
  <section className="sidebar">
    <div className="logo-container">
      <h1>🛒</h1>
      
    </div>
    <Catagory handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    <Colors handleChange={handleChange}/>
  </section>
  
  </>
  )
}

export default Sidebar