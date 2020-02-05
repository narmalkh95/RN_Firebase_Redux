import React from 'react';
import AuthRoute from "../routes/AuthRoute";
import {compose} from "redux";
import {connect} from "react-redux";


const ProtectedScreen = Comp => (props) => {
  if (!props.user) {
    return <AuthRoute/>
  } else {
    return (
      <Comp {...props}/>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      user: state.user.user
  }
};

const composedProtectedScreen = compose(
  connect(mapStateToProps, null),
  ProtectedScreen
);


export default composedProtectedScreen;
