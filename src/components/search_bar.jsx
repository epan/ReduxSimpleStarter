import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange (term) {
    console.log('props from SearchBar', this.props);
    this.setState({term});
    this.props.onSearchInput(term);
  }

  render () {
    return (
      <div className="col-md-12">
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
