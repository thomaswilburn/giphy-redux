import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };

    [
      "onClickedSearch",
      "onChangeSearch"
    ].forEach(f => this[f] = this[f].bind(this));
  }

  onChangeSearch(e) {
    var search = e.target.value;
    this.setState({ search });
  }

  onClickedSearch() {
    var { dispatch } = this.props;
    dispatch({ type: "SEARCH", payload: this.state.search });
  }

  render() {
    return (
      <header className="search-bar">
        <input
          value={this.state.search}
          placeholder="Search Giphy"
          onChange={this.onChangeSearch}
        />
        <button className="search-button" onClick={this.onClickedSearch}>Search</button>
      </header>
    );
  }
}

export default connect()(SearchBar);