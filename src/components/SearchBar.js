import React, { Component } from 'react'

export default class SearchBar extends Component {
  onInputChange(event) {
      console.log(event.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input type="text" onChange={this.onInputChange}/>
                </div>
            </form>
        </div>
      </React.Fragment>
    );
  }
}
