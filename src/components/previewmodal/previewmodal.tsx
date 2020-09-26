import React from 'react';
import { connect } from 'react-redux';
import './previewmodal.css';

interface Props {
  preview?: string
  dispatch: any
}

function PreviewModal(props: Props) {
  
  var onClickClose = () => props.dispatch({ type: "app:preview-close" });
  var className = "preview-container " + (props.preview ? "active" : "hidden");

  return <div
    className={className}
    onClick={onClickClose}
  >
    <div className="preview-modal">
      <button className="close" aria-label="close">&times;</button>
      <img src={props.preview || ""} alt="" />
    </div>
  </div>
}

var mapState = (state:any) => state.app;

export default connect(mapState)(PreviewModal);