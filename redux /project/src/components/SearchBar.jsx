import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setQuery } from '../redux/features/SearchSlice';

const SearchBar = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const submitHandler = () => {
    // console.log("form submitted")
    console.log(text)
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }} action="" className='flex gap-4 p-10 bg-(--c1)'>
        <input required type="text"
          value={text}
          onChange={(e) => {
            // console.log(e.target.value);
            setText(e.target.value)

          }}
          placeholder='Search anthing ...'
          className='w-full rounded-lg text-xl outline-none border-2 px-4 py-2' />
        <button className='active:scale-95 rounded-lg text-xl outline-none border-2 px-4 py-2 cursor-pointer '>
          search
        </button>
      </form>
    </div>
  )
}

export default SearchBar