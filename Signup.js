import "./Login.css";
import React, { useState,useEffect } from "react";
import { useNavigate} from "react-router-dom";
const myStyle={
    backgroundImage:
"url('https://gogetterz.com/desktop/images/fb-share-img.jpg')",
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const navigate = useNavigate()
  const [user,setUser]=useState({
    name:"",
    password:""
});
let name,value;
const handleInputs=(e)=>{
   //console.log(e)
   //name=e.target.name
  // value=e.target.value
   //setUser({ ...user,[name]:value})
    console.log(e.target.value) 
    console.log(e.target.name)

    const value=e.target.value;
    const name=e.target.name;
     setUser((preValue)=>{
      if(name==="name"){
        return {
          name: value,
          password: preValue.password,
        }
      } else if(name==="password"){
        return{
          name:preValue.name,
          password:value,
        }
      }
     })
}
const PostData= async(e)=>{
  e.preventDefault();
  const {name,password}=user;
  const res=await fetch('http://localhost:5000/register',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name,password,
    })
  });
  const data = await res.json();
  console.log(data)
  if(data.status ===422|| !data){
    window.alert("invalid registration")
    console.log("invalid registration")
  }else{
    window.alert("registration successful")
    console.log("successful registration")
    navigate('/login')
  }
}
  return (
    <div className="Auth-form-container" style={myStyle}>
      <form method="POST" className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">REGISTER</h3>
          <div className="form-group mt-3">
            <center><label>Username</label>
            <input type="text" name="name" id="name" value={user.name} onChange={handleInputs} placeholder="your name"/></center>
          </div><br></br>
          <div className="form-group mt-3">
            <center><label>Password</label>
            <input type="password" name="password" id="name" value={user.password} onChange={handleInputs} placeholder="enter password"/></center>
          </div><br></br>
          <div className="d-grid gap-2 mt-3">
            <center><button type="submit" className="submit" onClick={PostData}>
              Submit
            </button></center>
          </div>
        </div>
      </form>
    </div>
  )
}
