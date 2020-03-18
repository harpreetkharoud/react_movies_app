import axios from 'axios'

import { SEARCH_URL } from '../config/api_config'

export const getShows = async (category, apiUrl) => {
  const url = apiUrl.replace("{CATEGORY}",category)


    const response = await axios.get(url)
    return response.data.results.map(result => {
      return mapShow(result)
    })
 
}

export const searchContent = async (category, searchText) => {
  const url = SEARCH_URL.replace("{CATEGORY}",category).replace("{SEARCH_TEXT}",searchText)


  
    const response = await axios.get(url)
    return response.data.results.map(result => {
      return mapShow(result)
    })
  } 


  class ShowClass {

    constructor(id, title, date, popularity, overview, poster) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.popularity = popularity;
        this.overview = overview;
        this.poster = poster;
    }
  
  }
  


const mapShow = (result) => {
  let showclass = new ShowClass()
  showclass.id = result.id
  showclass.popularity = result.popularity
  showclass.overview = result.overview
  showclass.poster = result.poster_path
  
  if (result.title){
    showclass.title = result.title
  }
  else if (result.first_air_date) {
    showclass.date = result.first_air_date
  } else {
    showclass.date = result.release_date
  }
  return showclass
}
