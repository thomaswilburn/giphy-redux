import React from 'react';
import { connect } from 'react-redux';
import './infinitefooter.css';

interface Props {
  dispatch: any
}

interface State {
  ref: React.Reference
}

class InfiniteFooter extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.observer = new IntersectionObserver(([ entry ]) => {
      if (entry.isIntersecting) {
        this.props.dispatch({ type: "giphy:continue" })
      }
    });
  }

  componentDidMount() {
    this.observer.observe(this.ref.current);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.ref.current);
  }

  render() {
    return <div className="infinite-footer" ref={this.ref}>
      Just a moment...
    </div>
  }
}

export default connect()(InfiniteFooter);