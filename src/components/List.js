import React from "react";
import Article from "./Article";
import Video from "./Video";

function List(props) {
  return props.list.map((item, id) => {
    switch (item.type) {
      case "video":
        return <Video key={id} {...item} />;

      case "article":
        return <Article key={id} {...item} />;
      default:
        return null;
    }
  });
}

export default List;
