import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render () {
    return (
      <div className="col-md-12">
        <input
          value={this.state.term}
          onChange={(e) => {
            this.setState({ term: e.target.value });
            this.props.onSearchInput(this.state.term);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
