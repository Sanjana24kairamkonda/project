import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding8() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>You are given a string S, the task is to reverse the string using stack.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: S="GeeksforGeeks"</p>
            <p>Output: skeeGrofskeeG</p>

        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input: s = [1,2,3]</p>
            <p>Output: error</p>
            <p>Explanation : enter a string</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding8