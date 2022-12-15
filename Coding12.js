import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding12() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.</p>

        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: N = 5, Arr[] = [1,2,3,-2,5]</p>
            <p>Output: 9 </p>
            <p>Explanation: Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.</p>
            </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input:N = 4 ,  Arr[] = [-1,-2,-3,-4]</p>
            <p>Output: -1</p>
            <p>Explanation :Max subarray sum is -1 of element (-1)</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>

  )
}

export default Coding12