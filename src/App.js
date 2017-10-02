import React, { Component } from 'react';
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import Signup from './components/Signup.js'
import PhotoContainer from './components/PhotoContainer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from'./components/Footer.js'
import UserContainer from './components/UserContainer.js'
import {Layer, Rect, Stage, Group} from 'react-konva';
import Welcome from './components/Welcome.js'



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
        <div>
          {!this.state.users.isLoggedIn ? <Route path='/' component={Navbar} /> : null}
          <Route exact path='/welcome' component={Welcome} />
          <Route exact path = '/home' render={()=> { return <PhotoContainer photos={this.state.photos} onClick={this.handleClick} />}}/>
          <Route exact path='/login' render={Login} />
          <Route exact path='/signup' render={Signup} />
          <Route path="/users/:id" render={(routeProps) => {
                   const id = routeProps.match.params.id
                   if (this.state.users.length) {
                     return <UserContainer user={this.state.users[id - 1]} photos={this.state.photos} onClick={this.handleClick} />
                   } else {
                     return null
                   }
                 }} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
