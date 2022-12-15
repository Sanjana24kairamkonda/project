import React, { Link, useState,setState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
const myStyle={
    backgroundImage:
"url('https://gogetterz.com/desktop/images/fb-share-img.jpg')",
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
export default function (props) {
  const navigate=useNavigate()
   const [name,setName]=useState('')
   const [password,setPassword]=useState('')
   const loginUser=async (e)=>{
    e.preventDefault();
    const res= await fetch('http://localhost:5000/signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name,password,
    })
    
  });
  const data = res.json();
  console.log(data)
  if(data.status ===422|| !data){
    window.alert("invalid login")
    console.log("invalid login")
  }else{
    window.alert("login successful")
    console.log("successful login")
    navigate('/mainpage')
  }
}
    return (
      <div className="Auth-form-container" style={myStyle}>
        <form method="POST" className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">SIGN IN</h3>
            <div className="form-group mt-3">
              <center><label>Username:{' '}</label>
              <input
                type="name" name="name" id="name"
                className="form-control mt-1"
                value={name} onChange = {(e) => setName(e.target.value)} 
                placeholder="e.g rahul"
           
              /></center>
            </div><br></br>
            <div className="form-group mt-3">
              <center><label>Password:</label>
              <input
                type="password" name="password" id="password"
                className="form-control mt-1"
                value={password} onChange = {(e) => setPassword(e.target.value)} 
                placeholder="Password"
              /></center>
            </div><br></br><br/>
            <div className="d-grid gap-3 mt-3">
              <center><button type="submit" className="submit" onClick={loginUser}>
                Submit
              </button></center>
            </div>
          </div>
        </form>
      </div>
    )
  }