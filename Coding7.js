import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding7() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given an array containing N integers and an integer K., Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input:A[] = [10 ,5 ,2, 7, 1, 9] , K = 15</p>
            <p>Output:  4</p>
            <p>Explanation : The sub-array is [5, 2, 7, 1.]</p>
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input: A[] = [-1, 2, 3] , K = 6</p>
            <p>Output: 0</p>
            <p>Explanation : There is no such sub-array with sum 6.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding7