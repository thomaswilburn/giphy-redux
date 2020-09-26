import React from 'react';
import './App.css';
import SearchBar from './components/searchbar/searchbar.tsx';
import PreviewGrid from './components/previewgrid/previewgrid.tsx';
import InfiniteFooter from './components/infinitefooter/infinitefooter.tsx';
import PreviewModal from './components/previewmodal/previewmodal.tsx';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <React.Fragment>
      <SearchBar />
      <PreviewGrid />
      <InfiniteFooter />
      <PreviewModal />
    </React.Fragment>
  }
}

export default connect()(App);
