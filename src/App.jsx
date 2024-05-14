import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/reducers/counterSlice'

const App = () => {
  const dispatch = useDispatch()
  const {value}= useSelector(state => state.counterSlice)
  console.log(
    
  )
  return (
    <div className=' m-3'>
      <h1 className='text-3xl font-semibold'>{value}</h1>
      <div className='flex gap-4 mt-4'>
        <button onClick={()=>dispatch(increment(value+1))} className=' bg-slate-400 p-2 rounded-md' > increase by 1</button>
        <button onClick={()=>dispatch(decrement(value-1))} className=' bg-slate-400 p-2 rounded-md'> decrease by 1</button>
      </div>
    </div>
  )
}

export default App