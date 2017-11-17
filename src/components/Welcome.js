import React from 'react'
import instadam from '../images/instadam.png';
import instafam from '../images/instafam.png';
import '../App.css';
import { Link } from 'react-router-dom'

class Welcome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sent: props.sent,
    }
  }

  render() {
    return(
      <div>
        <br/>
        <div className="ui container">
          <div className="ui middle aligned center aligned grid">
            <h1>Welcome to Sentimentalgram!</h1><br/>
          </div>
          <div className="ui middle aligned center aligned grid">
            <Link to={'/login'} name="positive"><img className="App-instadam-welcome" src={instadam} alt=""/></Link>
            <Link to={'/login'} name="negative"><img className="App-instadam-welcome" src={instafam} alt=""/></Link>
          </div>
        </div>
        <br/>
      </div>
    )
  }

}

export default Welcome
