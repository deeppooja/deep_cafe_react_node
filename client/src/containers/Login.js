import React from 'react'

export default function Login() {
    return (
        <div class="container">
        <div class="login_form">
          <h2>Login Form</h2>
          <form>
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
      
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
      
            <button type="submit" style={{marginTop:'15px'}}>Login</button>
          </form>
        </div>
      </div>
  )
}
