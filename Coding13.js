import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding13() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>Given an expression string x. Examine whether the pairs and the orders of , ”(“,”)”,”[“,”]” are correct in exp.</p>

        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: {([])}</p>
            <p>Output: true </p>
            <p>Explanation: { ( [ ] ) }. Same colored brackets can form 
balaced pairs, with 0 number of 
unbalanced bracket.</p>
            </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input:()</p>
            <p>Output: true</p>
            <p>Explanation :(). Same colored brackets can form balanced pairs, 
and here only 1 type of bracket is 
present and in balanced way. </p>
        </div>

        <div className='test_case3'>
            <h3>Test Case 3</h3>
            <p>Input:([]</p>
            <p>Output: false</p>
            <p>Explanation :([]. Here square bracket is balanced but 
the small bracket is not balanced and 
Hence , the output will be unbalanced.</p>
        </div>

        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>

  )
}

export default Coding13