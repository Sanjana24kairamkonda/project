import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding10() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given a sorted dictionary of an alien language having N words and k starting alphabets of standard dictionary. Find the order of characters in the alien language.</p>

             <p> NOTE: Many orders may be possible for a particular test case, thus you may return any valid order and output will be 1 if the order of string returned by the function is correct else 0 denoting incorrect string returned. </p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input:N = 5, K = 4, array = ["baa","abcd","abca","cab","cad"]</p>
            <p>Output: 1</p>
            <p>Explanation: Here order of characters is 'b', 'd', 'a', 'c' Note that words are sorted and in the given language "baa" comes before "abcd", therefore 'b' is before 'a' in output.Similarly we can find other orders. </p>
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input:N = 3, K = 3, array = ["caa","aaa","aab"]</p>
            <p>Output: 1</p>
            <p>Explanation :Here order of characters is 'c', 'a', 'b' Note that words are sorted and in the given language "caa" comes before "aaa", therefore 'c' is before 'a' in output. Similarly we can find other orders.</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding10