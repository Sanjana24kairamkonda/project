import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding5() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: s = nums1 = [1,3], nums2 = [2]</p>
            <p>Output:2.00000</p>
            <p>Explanation: merged array = [1,2,3] and median is 2.</p>
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input: s = nums1 = [1,2], nums2 = [3,4]</p>
            <p>Output:2.50000</p>
            <p>Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding5