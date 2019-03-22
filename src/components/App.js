import React, {Component} from 'react';
import axios from "axios";

import SearchBar from './SearchBar';




 class App extends Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID bff7a6b08cbaafc84b4c5e73289b0b608c00d4655c6a6cd931b16322234bdf91"
      }
    });
  }

  render() {
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
  
    </div>
  )
}
}

export default App;