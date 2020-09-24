import React from 'react';
import { connect } from 'react-redux';
import './preview.css';

class PreviewGrid extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onClickPreview() {

  }

  render() {
    var { gifs } = this.props;
    if (!gifs || !gifs.length) {
      return <div className="error">No results found</div>
    }

    console.log(gifs[0]);

    return <div className="preview-grid">
      {gifs.map(g => <img src={g.images.downsized_still.url} key={g.id} />)}
    </div>
  }
}

var mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(PreviewGrid);