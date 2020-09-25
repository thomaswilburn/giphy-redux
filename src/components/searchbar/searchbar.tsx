import React from 'react';
import { connect } from 'react-redux';
import './searchbar.css';

interface State {
  search: string
}

interface Props {
  dispatch?: any
  loading: boolean,
  query: string
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      search: ""
    };

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onClickedSearch = this.onClickedSearch.bind(this);
    this.onClickedClear = this.onClickedClear.bind(this);
  }

  onChangeSearch(e: React.SyntheticEvent) {
    var search = (e.target as HTMLInputElement).value;
    this.setState({ search });
  }

  onClickedSearch() {
    var { dispatch } = this.props;
    dispatch({ type: "search:query", payload: this.state.search });
    dispatch({ type: "giphy:search" });
  }

  onClickedClear() {
    var { dispatch } = this.props;
    dispatch({ type: "search:clear" });
    dispatch({ type: "giphy:trending" });
  }

  render() {

    return (
      <header className="search-bar">
        { this.props.loading ? "⌛" : "😐"}
        <input
          value={this.state.search}
          placeholder="Search Giphy"
          onChange={this.onChangeSearch}
        />
        <button className="search-button" onClick={this.onClickedSearch}>Search</button>
        <button className="clear-button" onClick={this.onClickedClear}>Clear</button>
      </header>
    );
  }
}

var mapState = (state: any): any => ({ ...state.app });

export default connect(mapState)(SearchBar);