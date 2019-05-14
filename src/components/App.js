import React, {Component} from 'react';

import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';


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
   <React.Fragment style{{background: '#0f0c29', background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'}}>
    <div className="ui container" style={{marginTop: '20px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList images={this.state.images}/>
    </div>
   </React.Fragment>
  )
}
}

export default App;
