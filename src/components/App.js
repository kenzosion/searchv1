import React, {Component} from 'react';

import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';
import AppCSS from './App.css';


 class App extends Component {
  state = {
    images: []
  }
  
   onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({images: response.data.results});
  };

  render() {
  return (
    <div className="ui container containerColor" style={{marginTop: '20px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList images={this.state.images}/>
    </div>
  )
}
}

export default App;
