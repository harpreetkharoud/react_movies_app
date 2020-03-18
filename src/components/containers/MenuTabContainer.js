import React, { Component } from 'react'

import { searchContent } from '../../services/api';
import { MOVIES_URL, SHOWS_URL } from '../../config/api_config'

import { MenuTab, a11yProps } from '../layout/MenuTab';
import Search from '../forms/Search';

import SearchContainer from './SearchContainer';
import ShowsContainer from './ShowsContainer';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class MenuTabContainer extends Component {
  state = {
    search_results: [],
    value: 0,
  }
  search_category = "movie"
  searchText = ""

  constructor(props) {
     super(props);
     this.searchResultRef = React.createRef()
  }

  handleChange = (event, value) => {
    this.setState( (state) => ({value}));
  };

  handleSearch = () => {
    if (this.searchText !== "") {
      searchContent(this.search_category, this.searchText).then(searchResponse => {
        this.setState({
          search_results: searchResponse
        })
        this.searchResultRef.current.updateSearchResults(this.state.search_results)
        this.setState({
          value: 1
        })
      })
    }
  }

  handleSearchText = (key, value) => {
    this.searchText = value
    if (this.searchText !== "")
      this.searchResultRef.current.showInTypingMessage()
    else
      this.searchResultRef.current.resetResultsMessage()
  }
  
  handleCategoryChange = (key, value) => {
    this.search_category = value
  }

  render() {
    return (
      <div>
        <Search
          onInputChange={this.handleSearchText}
          onChangeCategory={this.handleCategoryChange}
          onSearch={this.handleSearch}
          category={this.search_category}
        />
        <div className='tab-container'>
          <AppBar position="static">
          <Tabs 
              className="TabIndicator"
            value={this.state.value} 
            onChange={this.handleChange} 
            variant="fullWidth"
            centered
            aria-label="simple tabs example">
            <Tab label="MOVIES" {...a11yProps(0)} />
            <Tab label="SEARCH RESULTS" {...a11yProps(1)} />
            <Tab label="TV SHOWS" {...a11yProps(2)} />
          </Tabs>
          </AppBar>
          <MenuTab value={this.state.value} index={0}>
          <ShowsContainer 
            category={"now_playing"} 
            api_url={MOVIES_URL} 
            categories={['now_playing', 'popular', 'top_rated', 'upcoming']} />
          </MenuTab>
          <MenuTab value={this.state.value} index={1}>
          <SearchContainer 
            ref={this.searchResultRef} 
            shows={this.state.search_results}
          />
          </MenuTab>
          <MenuTab value={this.state.value} index={2}>
          <ShowsContainer 
            category={"airing_today"} 
            api_url={SHOWS_URL} 
            categories={['airing_today', 'on_the_air', 'popular', 'top_rated']} />
          </MenuTab>
        </div>
      </div>
    )
  }
}

export default MenuTabContainer;
