import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding3() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given a string s, return the longest palindromic substring in s.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: s = "babad"</p>
            <p>Output: "bab"</p>
            <p>Explanation: "aba" is also a valid answer. </p>
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input: s ="bscdsd"</p>
            <p>Output: false</p>
            <p>Explanation:it doesnt contain palindrome string</p>
        </div>
        <div className='test_case3'>
            <h3>Test Case 3</h3>
            <p>Input: s ="ababa"</p>
            <p>Output:"bab"</p>
            <p>Explanation: it contains palindrome string.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding3
