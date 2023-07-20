import React from 'react'
import logo from '../../assets/logo.gif'
import './style.css'
const Navbar = () => {
  return (
    <nav class="navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand"><img className='app_logo img-fluid ms-lg-3 ms-0' src={logo} alt="" /></a>
      {/* <h1>Virtual Reality Coin</h1> */}
      <button className='btn-vrc'>Build On VRCScan</button>
    </div>
  </nav>
  )
}

export default Navbar
