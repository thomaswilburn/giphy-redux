import React from 'react';
import { connect } from 'react-redux';

interface State {
  search: string
}

interface Props {
  dispatch?: any
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      search: ""
    };

    this.onClickedSearch = this.onClickedSearch.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(e: React.SyntheticEvent) {
    var search = (e.target as HTMLInputElement).value;
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