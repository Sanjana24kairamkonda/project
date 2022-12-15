import React, { Fragment } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Play from './quiz/Play';
import './Quiz.css'
function Quiz() {
    const navigate = useNavigate();
  return (
    <Fragment>
        <center><h3>Increase your aptitude skills</h3></center>
        <div className='sections' onClick={()=>navigate("/PlayWithRouter")}>
            <button className='button'>Practice Aptitude</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Play1")}>
            <button className='button'>Practice Aptitude 2</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Daa")}>
            <button className='button'>Design and Analysis of Algorithms</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Dbms")}>
            <button className='button'>Database and Managment Systems</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Dsa")}>
            <button className='button'>Data Structures and Algorithms</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Java")}>
            <button className='button'>Java Coding</button>
            
        </div>
        <div className='sections' onClick={()=>navigate("/Python")}>
            <button className='button'>Python Coding</button>
            
        </div>
    </Fragment>
  )
}

export default Quiz
