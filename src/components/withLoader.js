import React from "react";
import Spinner from "./Spinner"


 
const withLoader = WrappedComponent => {
  class WithLoader extends React.Component {
    render() {
      return (
      

        this.props.isLoading ? (
          <Spinner/>
        ) : (
          <WrappedComponent {...this.props} />
        )
      );
    }
  }
  return WithLoader;
};

export default withLoader;
