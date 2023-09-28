import { Gif } from '../models/gif.model'
const API_KEY = import.meta.env.VITE_GIPHY_KEY
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`

// * Putting fetching services within its own file as a service lets this service to be reused in other apps
// ! Fetching services should be as part of a component responsibility
export const fetchGifs = async ({ query, limit }) => {
  return fetch(`${BASE_URL}&q=${query}&limit=${limit}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from API')
      }
      return res.json()
    })
    .then(({ data }) => {
      // * Mapping
      const gifsData = data.map(gif => {
        const { id, title, images } = gif
        //* Modeling
        return new Gif(id, title, images.downsized.url)
      })
      return gifsData
    })
    .catch((e) => {
      throw new Error(e)
    })
}
