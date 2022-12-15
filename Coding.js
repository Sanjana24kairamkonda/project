import React, { Fragment } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Quiz.css'
function Coding() {
    const navigate = useNavigate();
  return (
    <Fragment>
        <center><h3>Improve your coding skills!</h3></center>
        <div className='sections' onClick={()=>navigate("/Coding1")}>
            <button className='button'>Question 1</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding2")}>
            <button className='button'>Question 2</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding3")}>
            <button className='button'>Question 3</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding4")}>
            <button className='button'>Question 4</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding5")}>
            <button className='button'>Question 5</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding6")}>
            <button className='button'>Question 6</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding7")}>
            <button className='button'>Question 7</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding8")}>
            <button className='button'>Question 8</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding9")}>
            <button className='button'>Question 9</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding10")}>
            <button className='button'>Question 10</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding11")}>
            <button className='button'>Question 11</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding12")}>
            <button className='button'>Question 12</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding13")}>
            <button className='button'>Question 13</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding14")}>
            <button className='button'>Question 14</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Coding15")}>
            <button className='button'>Question 15</button>
            
        </div>
    </Fragment>
  )
}

export default Coding
