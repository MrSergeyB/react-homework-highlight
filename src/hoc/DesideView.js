import React from "react";
import Popular from "../components/Popular";
import New from "../components/New";

const DesideView = (props) => (WrappedComponent) => {
  class NewComponent extends React.Component {
    render() {
      const {view} = this.props;
      
      if (view > 1000) {
        return <Popular />;
      } else {
        return <New />;
      }
      return <WrappedComponent />;
    }
  }

  return NewComponent;
};

export default DesideView;
