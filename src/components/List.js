import React from "react";
import Video from "./Video";
import Article from "./Article";
import Popular from "./Popular";
import New from "./New";

function List(props) {
  return props.list.map((item) => {
    if (item.type === "video") {
      if (item.views > 1000) {
        return (
          <Popular>
            <Video {...item} />
          </Popular>
        );
      } else if (item.views <= 100) {
        return (
          <New>
            {" "}
            <Video {...item} />{" "}
          </New>
        );
      } else {
        return <Video {...item} />;
      }
    } else if (item.type === "article") {
      if (item.views > 1000) {
        return (
          <Popular>
            <Article {...item} />
          </Popular>
        );
      } else if (item.views <= 100) {
        return (
          <New>
            <Article {...item} />
          </New>
        );
      } else {
        return <Article {...item} />;
      }
    }
  });
}

export default List;
