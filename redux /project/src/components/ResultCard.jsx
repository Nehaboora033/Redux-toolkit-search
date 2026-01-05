import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addToast } from '../redux/features/Collectionslice';

const ResultCard = ({ item }) => {

  const dispatch = useDispatch();

  const addToCollection = () => {
    dispatch(addCollection(item));
    dispatch(addToast())
  }

  return (
    <div className='relative'>
      <a target='_blank' className='w-full h-full' href={item.url} >
        <div className=' w-full h-75 rounded-lg overflow-hidden'>
          {item.type === "photo" ? < img src={item.src} alt="images" className='w-full h-full object-cover overflow-auto rounded-lg' /> : ""}
          {item.type === "videos" ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}> </video> : ""}
          {item.type === "gif" ? <img src={item.src} alt="" className='w-full h-full rounded-lg' /> : ""}
        </div>
      </a>
      <div id='bottom' className='absolute bottom-0  w-full'>
        <div className=' flex justify-between p-2 items-center gap-1 z-2'>
          <p className='text-xl capitalize'>{item.title}</p>
          <button onClick={() => {
            addToCollection(item)
          }} className='rounded-md bg-blue-800 px-4 py-1 h-10 cursor-pointer'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard