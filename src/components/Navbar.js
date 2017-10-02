import React from 'react'
import instadamWhiteMid from '../instadamWhiteMid.png';
import logo from '../logo.png';
import '../App.css';
import {NavLink} from 'react-router-dom'
import { logoutUser } from '../services/user.js'
import { findUserId } from '../services/user.js'



const Navbar = () => {
  if (localStorage.getItem('jwtToken')) {
      return(
    <div className="ui menu inverted purple">
      <div className="ui container">
        <img src={instadamWhiteMid} className="App-logo" alt="logo" />
        <img src={logo} className="App-instadam" alt="logo" />
        <NavLink className="item right" to="/home" exact activeStyle={{background: 'hotpink'}}>Home</NavLink>
        <NavLink className="item" to="/profile" exact activeStyle={{background: 'hotpink'}}>Profile</NavLink>
        <NavLink onClick={logoutUser} className="item" to="/login" exact activeStyle={{background: 'hotpink'}}>Logout</NavLink>
      </div>
    </div>
  )
  } else {
      return(
    <div className="ui menu inverted purple">
      <div className="ui container">
        <img src={instadamWhiteMid} className="App-logo" alt="logo" />
        <img src={logo} className="App-instadam" alt="logo" />
        <NavLink className="item right" to="/home" exact activeStyle={{background: 'hotpink'}}>Home</NavLink>
        <NavLink className="item" to="/profile" exact activeStyle={{background: 'hotpink'}}>Profile</NavLink>
        <NavLink className="item" to="/login" exact activeStyle={{background: 'hotpink'}}>Login</NavLink>
        <NavLink className="item" to="/signup" exact activeStyle={{background: 'hotpink'}}>Sign up</NavLink>
      </div>
    </div>
  )
  }

}

export default Navbar
