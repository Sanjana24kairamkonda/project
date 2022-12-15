import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding11() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given a positive number X. Find the largest Jumping Number which is smaller than or equal to X. <br></br>Jumping Number: A number is called Jumping Number if all adjacent digits in it differ by only 1. All single-digit numbers are considered as Jumping Numbers. For example 7, 8987 and 4343456 are Jumping numbers but 796, 677 and 89098 are not.</p>

        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input:X = 10</p>
            <p>Output: 10</p>
            <p>Explanation: 10 is the largest Jumping Number, possible for X = 10.</p>
            </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input:X = 50</p>
            <p>Output: 45</p>
            <p>Explanation :45 is the largest Jumping Number, possible for X = 50.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>

  )
}

export default Coding11