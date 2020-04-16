import React from "react";
import Popular from "../components/Popular";
import New from "../components/New";

const DesideView = (WrappedComponent) => {
  class NewComponent extends React.Component {
    render() {
      if (this.props.views > 1000) {
        return (
          <Popular>
            <WrappedComponent {...this.props} />
          </Popular>
        );
      } else {
        return (
          <New>
            <WrappedComponent {...this.props} />
          </New>
        );
      }
    }
  }

  return NewComponent;
};

export default DesideView;
