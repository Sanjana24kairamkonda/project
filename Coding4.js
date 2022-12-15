import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding4() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Print a sequence of numbers starting with N where A[0] = N, without using loop, in which  A[i+1] = A[i] - 5,  until A[i] greater than 0. After that A[i+1] = A[i] + 5  repeat it until A[i] = N.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input:   N = 16</p>
            <p>Output:  16 11 6 1 -4 1 6 11 16</p>
            <p>Explanation:The value decreases until it is greater than 0. After that it increases and stops when it becomes 16 again.</p>
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input:  N = 10</p>
            <p>Output:10 5 0 5 10</p>
            <p>Explanation: It follows the same logic as per the above example.</p>
        </div>
    
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding4
