import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/SearchSlice';

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"]
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab) // activeTab comes from  activeTab: "photos",
  // const searchState = useSelector((state) => state.search);
  // console.log("Search State:", searchState);

  return (
    <div className='flex items-center p-8 gap-5'>
      {tabs.map((item, index) => (
        <button key={index}
          onClick={() => {
            dispatch(setActiveTabs(item))
          }}
          className={` ${(activeTab == item ? 'bg-blue-700' : 'bg-gray-500')} uppercase rounded-lg cursor-pointer px-5 py-2 active:scale-95 text-white`}>
          {item}
        </button>
      ))}
    </div>
  )
}

export default Tabs