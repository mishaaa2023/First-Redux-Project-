import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment,decrement } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div className='flex items-center'>
      <div className='btn-container'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className='btn'
        >
          Increment
        </button>
        <span className='number'>{count}</span>
        <button
        className='btn'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter