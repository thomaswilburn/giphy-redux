import React from 'react';
import './App.css';
import SearchBar from './components/searchbar/index.tsx';
import PreviewGrid from './components/previewgrid/index.tsx';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch({ type: "LOAD_TRENDING" });
  }

  render() {
    return <React.Fragment>
      <SearchBar />
      <PreviewGrid />
    </React.Fragment>
  }
}

export default connect()(App);
