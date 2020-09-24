import React from 'react';
import { connect } from 'react-redux';
import './preview.css';
import { Image, Gif } from '../../app/store/types';

interface Props {
  gifs?: Array<Image>,
  dispatch: any
}

class PreviewGrid extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};

    this.onClickPreview = this.onClickPreview.bind(this);
    this.onClickMore = this.onClickMore.bind(this);
  }

  onClickPreview() {

  }

  onClickMore() {
    this.props.dispatch({ type: "LOAD_MORE" });
  }

  render() {

    var content = <div className="error">No results found</div>;

    var { gifs } = (this.props as Props);

    if (gifs && gifs.length) {
      content = <div className="image-grid">
        {gifs.map((g: Image) => <img alt="" src={g.images["downsized_still"].url} key={g.id} />)}
      </div>
    }

    return <div className="preview-grid">
      {content}
      <button className="load-more" onClick={this.onClickMore}>Load more</button>
    </div>;
  }
}

// this type annotation is a hack
var mapState = (state: any): any => ({ ...state })

export default connect(mapState)(PreviewGrid);