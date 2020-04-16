import React from "react";
import DesideView from "../hoc/DesideView";

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        title={props.title}
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

export default DesideView(Video);
