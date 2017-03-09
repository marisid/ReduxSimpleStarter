import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'Starting Value' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} />
      </div>
    );
    // ES6 syntax
    // return <input onChange={event => console.log(event.target.value)}/>;
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
