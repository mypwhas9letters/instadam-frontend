import React from 'react'

const Signup = () => {
  return(
    <form onSubmit="">
      <input type="text" name="username" placeholder="Username"/>
      <input type="password" name="password" placeholder="Password"/>
      <input type="submit" value="signup"/>
    </form>
    )
  }
export default Signup
