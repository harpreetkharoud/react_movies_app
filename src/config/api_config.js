export const API_KEY = '02d0af289449cf8c2faae3b88b94f086'
export const BASE_URL = "https://api.themoviedb.org/3/"
export const MOVIES_URL = BASE_URL + `movie/{CATEGORY}?api_key=${API_KEY}`
export const SHOWS_URL = BASE_URL + `tv/{CATEGORY}?api_key=${API_KEY}`
export const POSTER_URL = "https://image.tmdb.org/t/p/w300/"
export const SEARCH_URL = BASE_URL + `search/{CATEGORY}?api_key=${API_KEY}&query={SEARCH_TEXT}`
