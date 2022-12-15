import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding14() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.</p>

        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: nums = [-1,0,1,2,-1,-4]</p>
            <p>Output:  [[-1,-1,2],[-1,0,1]] </p>
            <p>Explanation: <br></br>nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
            <br></br>nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
            <br></br>nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
            <br></br>The distinct triplets are [-1,0,1] and [-1,-1,2].
            <br></br>Notice that the order of the output and the order of the triplets does not matter.</p>
            </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input:nums = [0,1,1]</p>
            <p>Output: []</p>
            <p>Explanation :The only possible triplet does not sum up to 0.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>

  )
}

export default Coding14