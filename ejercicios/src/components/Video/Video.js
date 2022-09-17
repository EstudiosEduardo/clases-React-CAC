import React, { Component } from "react";
import "./Video.css";

export default class Video extends Component {
  render() {
    return (
      <video
        width="320"
        height="240"
        controls
        src="https://www.youtube.com/embed/videoseries?list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6"
      ></video>
    );
  }
}
