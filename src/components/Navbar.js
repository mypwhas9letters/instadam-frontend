import React from 'react'
import instadamWhiteMid from '../instadamWhiteMid.png';
import logo from '../logo.png';

import '../App.css';
import {NavLink} from 'react-router-dom'


// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

const Navbar = () => {
  return(

    <div className="ui menu">
      <div className="ui container">


        <img src={instadamWhiteMid} className="App-logo" alt="logo" />


          <img src={logo} className="App-instadam" alt="logo" />
          <NavLink className="item right" to="/" exact activeStyle={{background: 'hotpink'}}>Home</NavLink>
          <NavLink className="item" to="/profile" exact activeStyle={{background: 'hotpink'}}>Profile</NavLink>
          <NavLink className="item" to="/login" exact activeStyle={{background: 'hotpink'}}>Login</NavLink>
          <NavLink className="item" to="/signup" exact activeStyle={{background: 'hotpink'}}>Sign up</NavLink>
        </div>
      </div>
    )
  }




export default Navbar
