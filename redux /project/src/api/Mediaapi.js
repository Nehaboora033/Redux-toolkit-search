import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY

export async function fetchPhotos(query, page = 1, limit = 20) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, limit },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    })
    return res.data
}

export async function fetchVideos(query, page = 1, limit = 15) {
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, page, limit },
        headers: { Authorization: PEXELS_KEY }
    })
    return res.data
}

export async function fetchGif(query, limit = 20) {
    const res = await axios.get('https://tenor.googleapis.com/v2/search', {
        params: { q: query, key: TENOR_KEY, limit },
    })
    return res
}