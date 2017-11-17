import React from 'react'
import instadam from '../images/instadam.png';
import instafam from '../images/instafam.png';
import '../App.css';
import { Link } from 'react-router-dom'
import Footer from'./Footer.js'

class Welcome extends React.Component {

render() {
  return(
    <div>
      <div className="ui container">
        <div className="ui middle aligned center aligned grid">
          <h1>Welcome to Instadam!</h1>
        </div>
        <div className="ui middle aligned center aligned grid">
          <img className="App-instadam-welcome" src={instadam} alt=""/>
          <img className="App-instadam-welcome" src={instafam} alt=""/>
        </div>
        <div className="ui middle aligned center aligned grid">
          <div className="ui large buttons">
            <Link to={'/login'}><button className="ui button">Login</button></Link>
            <div className="or"></div>
            <Link to={'/signup'}><button className="ui button">Signup</button></Link>
          </div>
        </div>
      </div>
      <br/>
      <Footer/>
    </div>
    )
  }

}

export default Welcome
