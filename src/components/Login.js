import React from 'react'

const Login = () => {
  return(
    <div className="ui container">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui purple image header">
            <img src="./instadamWhiteMid.png" className="image" alt=""/>
            <div className="content">
              Log in to your account
            </div>
          </h2>
          <form onSubmit="" className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <input type="text" name="username" placeholder="Username"/>
              </div>
              <div className="field">
                <input type="password" name="password" placeholder="Password"/>
              </div>
              <input className="ui fluid large purple submit button" type="submit" value="Log In"/>
            </div>
          </form>
          <div className="ui message">New User?
            <a href="/"> Sign up</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
export default Login




// <form onSubmit="">
//   <input type="text" name="username" placeholder="Username"/>
//   <input type="password" name="password" placeholder="Password"/>
//   <input type="submit" value="login"/>
// </form>
