import React from 'react'
import { Route, Redirect, Switch, useHistory, NavLink, Link } from "react-router-dom";

import { connect } from "react-redux";

const MenuBar = ({authInfo}) => {
    return (
 <div></div>  );
}

const mapStateToProps = (globalState) => ({
    authInfo: globalState.authReducer,
  });

  export default connect(mapStateToProps)(MenuBar);
