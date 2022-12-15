import React, { Component } from 'react';
import Navbar from './Homepage/Navbar';
import './App.css';
import "react-bootstrap"
import {Link,useNavigate} from "react-router-dom";
function App() {
	const navigate=useNavigate();
	const myStyle={
		backgroundImage:
"url('https://www.codingninjas.com/blog/wp-content/uploads/2020/11/Blog-34.png')",
		height:'100vh',

		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
    const login=()=>{
		navigate('/login')
	}
	const signup=()=>{
		navigate('/signup')
	}
  return (
	<>
	<Navbar/>
	<div className='Main' style={myStyle}>
		<div className="first" >
         <h1>SKILL UP!!</h1>
      </div>
	  <div className='second' >
    <button className='buttons' onClick={login}>Login</button><br></br><br></br><br></br>
    <button className='buttons' onClick={signup}>Register</button>
	</div>
	</div>
	</>
  );
}

export default App;
