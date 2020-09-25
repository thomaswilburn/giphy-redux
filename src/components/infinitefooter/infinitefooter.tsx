import React from 'react';
import { connect } from 'react-redux';
import './infinitefooter.css';

interface Reference {
  current: HTMLElement
}

interface Props {
  dispatch: any
}

interface State {
  ref: Reference
}

interface Observer {
  ref: any,
  observer: any
}

class InfiniteFooter extends React.Component<Props, State> implements Observer {
  ref: any
  observer: any

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
    this.observer = new IntersectionObserver(([ entry ]) => {
      if (entry.isIntersecting) {
        this.props.dispatch({ type: "giphy:continue" })
      }
    });
  }

  componentDidMount() {
    this.observer.observe(this.ref.current as HTMLElement);
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