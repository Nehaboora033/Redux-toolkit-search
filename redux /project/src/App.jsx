// import { fetchGIF, fetchPhotos, fetchVideos } from './api/Mediaapi'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import {ToastContainer} from 'react-toastify'

const App = () => {

  // async function fetchPhotosFromMedia() {
  //   const data = await fetchPhotos("cat");
  //   console.log(data.results);
  // }
  // async function fetchVideosFromMedia() {
  //   const data = await fetchVideos("cat");
  //   console.log(data.videos);
  // }
  // async function fetchGifFromMedia() {
  //   const data = await fetchGIF("dog");
  //   console.log(data.data.results);
  // }
  return (
    <div className='w-full bg-gray-950 text-white'>
      {/* <button onClick={fetchPhotosFromMedia} className='rounded-lg px-5 py-2 bg-red-500 m-3'> Get Photos</button>
      <button onClick={fetchVideosFromMedia} className='rounded-lg px-5 py-2 bg-orange-400 m-3'> Get Videos</button>
      <button onClick={fetchGifFromMedia} className='rounded-lg px-5 py-2 bg-blue-600 m-3'> Get Gif</button> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div >
  )
}

export default App