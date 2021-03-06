import React, { Component } from 'react'

export default class SearchBar extends Component {
 state = {
     term: ''
 }

 onFormSubmit = (event) => {
     event.preventDefault();
     this.props.onSubmit(this.state.term);

 } 

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label><h2>Image Search</h2></label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value.toLowerCase()})}/>
                </div>
            </form>
        </div>
      </React.Fragment>
    );
  }
}
