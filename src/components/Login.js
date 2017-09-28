import React from 'react'

const Login = () => {
  return(
    <form onSubmit="">
      <input type="text" name="username" placeholder="Username"/>
      <input type="password" name="password" placeholder="Password"/>
      <input type="submit" value="login"/>
    </form>
    )
  }
export default Login
