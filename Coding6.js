import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding6() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given an integer numRows, return the first numRows of Pascal's triangle.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input:numRows = 5</p>
            <p>Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]</p>
    
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input: numRows = 1</p>
            <p>Output:numRows = 1</p>
            
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding6