import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='p-6 bg-(--c2) flex items-center justify-between'>
      <Link to="/" className='text-[24px] font-extrabold'>
        Media Search
      </Link>
      <div className='flex items-center gap-5'>
        <Link to="/"  className='rounded-md bg-(--c4) text-(--c1) px-4 py-2 text-[18px] active:scale-95'>
          Search
        </Link>
        <Link to="/collection" className='rounded-sm bg-white text-(--c1) px-4 py-2 text-[18px] active:scale-95'>
          Collection
        </Link>
      </div>
    </div>
  )
}

export default Navbar