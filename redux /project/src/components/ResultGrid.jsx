import React from 'react'
import { fetchPhotos, fetchVideos, fetchGif } from "../api/Mediaapi";
import { setLoading, setError, setResults } from "../redux/features/SearchSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ResultCard from './ResultCard';


const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, error, results, loading } = useSelector((store) => store.search);

  useEffect(() => {
    const getData = async () => {
      if (!query) return
      try {
        dispatch(setLoading())
        let data = []
        if (activeTab === "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            thunnial: item.urls.small,
            src: item.urls.full,
            title: item.alt_description,
            url: item.links.html
          }
          ))
          // console.log(response.results);
        }
        if (activeTab === "videos") {
          let response = await fetchVideos(query);
          data = response.videos
          data = response.videos.map((item) => ({
            id: item.id,
            type: "videos",
            thunnial: item.image,
            src: item.video_files[0].link,
            title: item.user.name || "video",
            url: item.url
          }))
          // console.log(response.videos)
        }
        if (activeTab === "gif") {
          let response = await fetchGif(query);
          data = response.data.results.map((item) => ({
            id: item.id,
            type: "gif",
            thunnial: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            title: item.title || "gif",
            url: item.url
          }))
          console.log(response.data.results)
        }
        dispatch(setResults(data))
        console.log(data);
      }
      catch (err) {
        dispatch(setError(err))
      }
    }
    getData()
  }, [query, activeTab])

  if (error) return <h1>Error </h1>

  if (loading) {
    return <h1>Loading ...</h1>
  }
  return (
    <div className='px-12  overflow-auto'>
      <div className='grid grid-cols-4 gap-6'>
        {results.map((item, index) => (
          <div key={index}>
            <ResultCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultGrid