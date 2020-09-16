import React from 'react'
import { useHistory } from 'react-router-dom'

import { connect } from "react-redux";
import { logoutUser } from "../data/actions/auth.actions";


function NavItemsComponent(props) {
    const history = useHistory();
    return (
      <div></div>);
  }
  
  const mapDispatchToProps = {
    logoutUser
  }
  
  export default connect(null, mapDispatchToProps)(NavItemsComponent);