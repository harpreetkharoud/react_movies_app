import React, { Component } from 'react'

import Shows from '../layout/Shows'

class SearchContainer extends Component {
  state = {
    search_results: null,
    message: "Please enter a search"
  }

  updateSearchResults = (searchResults) => {
    this.setState({
        search_results: searchResults
    })
  }

  resetResultsMessage = () => {
    this.setState({
      message: "Enter a search"
    })
  }

  showInTypingMessage = () => {
    this.setState({
      message: "Start a search"
    })
  }

  render() {
    const { search_results, message } = this.state;
    
    if (search_results) {
      if (search_results.length > 0) {
        return (
          <div>
            <Shows shows={search_results} />
          </div>
        );
      }
      else {
        return (
          <div>
            <p>Sorry, there were no results</p>
          </div>
        );
      }
    }
    else {
      return (
        <div>
          <p>{message}</p>
        </div>
      );
    }
  }
}

export default SearchContainer
