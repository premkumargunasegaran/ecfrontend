import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {AiPOutlineShoppingCart, AiOutlineUserAdd, AiOutlineShoppingCart} from 'react-icons/ai'
import "./nav.css"

function Nav() {
  return (
    
    <nav>
        
    <div className='nav-container'>
        <input type="text"  className=" search-input" placeholder='Search..' />
    </div>
    <div className='profile-container'>

        <a href="#">
            <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
            <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
            <AiOutlineUserAdd className='nav-icons'/>
        </a>
    </div>
</nav>
  )
}

export default Nav