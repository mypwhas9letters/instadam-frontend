import React, { Component } from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import Signup from './components/Signup.js'
import PhotoContainer from './components/PhotoContainer.js'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class App extends Component {

  state = {
    users:[],
    photos: [],
    isLoggedIn: false
  }

  // login = () =>{
  //
  // }
  //
  // logout = () =>{
  //   //logoutUser()
  //   this.setState({
  //     users: null,
  //     isLoggedIn: false,
  //     //photos: //fetch,
  //   })
  // }

  componentDidMount(){
    this.fetchUsers()
    this.fetchPhotos()
  }

  fetchUsers = () => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => this.setState({users}))
  }

  fetchPhotos = () => {
    fetch("http://localhost:3000/photos")
    .then(res => res.json())
    .then(photos => this.setState({photos}))
  }

  handleClick = (event) => {

  }

  render() {
    return (
      <Router>
        <div className="App">
        {!this.state.users.isLoggedIn ? <Route path='/' component={Navbar} /> : null}
          <Route exact path='/login' render={Login} />
          <Route exact path='/signup' render={Signup} />
          <PhotoContainer photos={this.state.photos} onClick={this.handleClick} />
        </div>
      </Router>
    );
  }
}

export default App;
