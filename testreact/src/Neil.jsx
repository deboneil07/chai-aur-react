/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export const Neil = (props) => {
    let [counter, setCounter] = useState(12)
    // let counter = 12;
  
    const addNum = () => {
      setCounter(counter + 1)
      // counter += 1;
    } 
  
    return (
      <>
        <h1 className="ml-20 text-purple-400">
          counter: {counter}
        </h1>
        <button className="text-green-300 ml-20" onClick={addNum}>
          add
        </button>
        <h3 className="ml-20"> 
          status: {counter}
        </h3>
      </> 
    )
}
