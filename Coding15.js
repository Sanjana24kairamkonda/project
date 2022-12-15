import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding15() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given an integer array nums, find a subarray that has the largest product, and return the product.</p>

        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: nums =  [2,3,-2,4]</p>
            <p>Output: 6 </p>
            <p>Explanation: [2,3] has the largest product 6.</p>
            </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input:nums = [-2,0,-1]</p>
            <p>Output: 0 </p>
            <p>Explanation : The result cannot be 2, because [-2,-1] is not a subarray.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>

  )
}

export default Coding15