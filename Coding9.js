import React from 'react'
import { Link } from 'react-router-dom'
import './Coding1.css'
function Coding9() {
  return (
    <div className='Coding'>
    <div className='container1'>
        <div className='Questions'>
            <h2>Question:</h2>
            <p>A Hamiltonian path, is a path in an undirected graph that visits each vertex exactly once. Given an undirected graph, the task is to check if a Hamiltonian path is present in it or not.</p>
        </div>
        <div className='test_case1'>
            <h3>Test Case 1</h3>
            <p>Input: N = 4, M = 4, Edges[][]= [ [1,2], [2,3], [3,4], [2,4] ]</p>
            <p>Output: 1</p>
            <p>Explanation: There is a hamiltonian path:
                            1 - 2 - 3 - 4  </p>
        </div>
        <div className='test_case2'>
            <h3>Test Case 2</h3>
            <p>Input:N = 4, M = 3, Edges[][] = [ [1,2], [2,3], [2,4] ] </p>
            <p>Output: 0</p>
            <p>Explanation : It can be proved that there is no hamiltonian path in the given graph</p>
        </div>
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
    </div></div>
  )
}

export default Coding9