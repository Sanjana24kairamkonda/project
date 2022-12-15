import { width } from '@mui/system';
import React from 'react';
import './Mainpage.css';
import { Link ,useNavigate} from "react-router-dom";
function Mainpage() {
  const navigate=useNavigate();
  const myStyle={
		backgroundImage:
    "url('https://www.codingninjas.com/blog/wp-content/uploads/2020/11/Blog-34.png')",
		height:'100vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
  const Coding=()=>{
      navigate('/Coding')
  }
  const Quiz=()=>{
    navigate('/Quiz')
}
  return (
    <div  className='rows'>
      <div className='b1'>
   <button className='button_1' onClick={Coding} >Competitive Coding</button></div>
      <div className='b2'>
        <button className='button_2' onClick={Quiz}>Aptitude</button></div>
    
    </div>
  
  )
}

export default Mainpage;
