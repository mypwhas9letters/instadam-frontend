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
import { loginUser } from './services/user.js'
import { Redirect } from 'react-router-dom'



class App extends Component {

  state = {
    users:[],
    photos: [],
    isLoggedIn: false,
    currentUser: ''
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

  setCurrentUser = () => {
    this.setState({
      currentUser: 'hello'
    })
  }

  handleSubmit = (event) => {

    event.preventDefault()
    console.log(this.state.username)
    const loginParams = { username: this.state.username, password: this.state.password}
    loginUser(loginParams)
    .then((user) => {
      if (user.message !== "Invalid User") {
      localStorage.setItem("jwtToken", user.jwt)
       this.props.history.push('/home')
    }})


    this.setState({
      username: "",
      password: ""
    })

    
 


}

  render() {
    if (localStorage.getItem('jwtToken')) {
   return (
        <div>
          <Route path='/' component={Navbar} />
          <Route exact path='/welcome' component={Welcome} />
          <Route exact path = '/home' render={()=> { return <PhotoContainer photos={this.state.photos} onClick={this.handleClick} />}}/>
          <Route exact path='/login' render={(props)=> <Login {...props} />} />
          <Route exact path='/signup' render={Signup} />
          <Route exact path='/profile' render={()=> {return <div>Hello</div>} }/>
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
    ) } else {
    return (<div> 
    <Route path='/' component={Navbar} />
    <Route exact path='/login' component={Login} />
    <Route exact path = '/home' render={() =><Redirect to='/login'/>}/>
    <Route exact path = '/profile' render={() =><Redirect to='/login'/>}/>
    <Route exact path='/welcome' component={Welcome} />
    <Route exact path='/signup' render={Signup} />
    </div>
    )
   }
  }
}

export default App;
