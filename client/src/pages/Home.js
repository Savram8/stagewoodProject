import React from 'react';
import logo from './StageWood_logo.png';


function Home() {
  return (
    <div>
    <img src={logo} alt="Logo" />
    <div class="ui justified container">
      <h1>Welcome!</h1>
      <div class="ui divider"></div>
      <p>
        Welcome to StageWood Consortium! Please head to the register tab and create an account! Once you have created an account, you will be logged in and directed to our welcome page! Feel free to logout and login in with your credientals at anytime! Thank you for visiting! 
      </p>
    </div>
  </div>  
)
}

export default Home;