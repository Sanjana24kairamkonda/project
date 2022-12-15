import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding1() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given a string s, find the length of the longest substring without repeating characters.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: s = "pwwkew"</p>
            <p>Output:3</p>
            <p>Explanation: The answer is "wke", with the length of 3.Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.</p>
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input: s = "abcabcbb"</p>
            <p>Output:3</p>
            <p>Explanation: The answer is "abc", with the length of 3</p>
        </div>
        <div className='test_case3'>
            <h3>Test Case 3</h3>
            <p>Input: s = "bbbbb"</p>
            <p>Output:1</p>
            <p>Explanation:  The answer is "b", with the length of 1.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding1
