import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding2() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given an integer x, return true if x is a palindrome, and false otherwise.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input:  x = 10</p>
            <p>Output: false</p>
            <p>Explanation: Reads 01 from right to left. Therefore it is not a palindrome.</p>
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input: x=121</p>
            <p>Output:false</p>
            <p>Explanation: 121 reads as 121 from left to right and from right to left.</p>
        </div>
        <div className='test_case3'>
            <h3>Test Case 3</h3>
            <p>Input: x=-121</p>
            <p>Output:false</p>
            <p>Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding2
