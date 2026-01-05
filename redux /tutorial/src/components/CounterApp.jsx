import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increasebyamount, increment } from '../redux/features/Counterslices'

const CounterApp = () => {
  const dispatch = useDispatch()
  const [num, setNum] = useState(5)
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <h1 className='text-[50px] p-2'>Counter App</h1>
      <h1 className='text-[60px] ml-6'> {count} </h1>
      <button onClick={() => {
        dispatch(increment())
      }} className='px-5 py-3 m-3 rounded-lg bg-gray-400 text-black text-[20px]'>Increment</button>
      <button onClick={() => {
        dispatch(decrement())

      }} className='px-5 py-3 m-3 rounded-lg bg-gray-400 text-black text-[20px] '>Decrement</button>
      <button onClick={() => {
        dispatch(increasebyamount(10))
      }} className='px-5 py-3 m-3 rounded-lg bg-gray-400 text-black text-[20px]'>Increase by amount 10</button>
      <br />
      <button onClick={() => {
        dispatch(increasebyamount(Number(num)))
      }} className='px-5 py-3 m-3 rounded-lg bg-gray-400 text-black text-[20px]'>Increase by amount of num</button>
      <br />
      <input type="number" className='border p-3 m-4 rounded-lg' value={num} onChange={(e) => {
        console.log(setNum(e.target.value));
      }} />
    </div>
  )
}

export default CounterApp