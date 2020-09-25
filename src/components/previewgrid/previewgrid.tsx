import React from 'react';
import { connect } from 'react-redux';
import './preview.css';
import { Image } from '../../app/store/types';

interface Stream {
  images: Array<Image>
}

interface Props {
  stream: Stream,
  dispatch: any
}

class PreviewGrid extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};

    this.onClickPreview = this.onClickPreview.bind(this);
  }

  onClickPreview() {

  }

  render() {

    var content = <div className="error">No results found</div>;

    var { images } = this.props.stream;

    if (images && images.length) {
      content = <div className="image-grid">
        {images.map((g: Image) => <img alt="" src={g.images.downsized.url} key={g.id} />)}
      </div>
    }

    return <div className="preview-grid">
      {content}
    </div>;
  }
}

// this type annotation is a hack
var mapState = (state: any): any => ({ ...state })

export default connect(mapState)(PreviewGrid);