import React, { useEffect } from "react";
import { Route , Redirect } from "react-router-dom";

import DashboardRoutes from "./dashboard.routes";
import Login from "../pages/authentication/Login"

import { connect } from "react-redux";
import { checkLogin } from "../data/actions/auth.actions";

const PrimaryRoutes = ({ checkLogin, authInfo }) => {

    useEffect(() => {
        if (authInfo.loggedIn === undefined) checkLogin()
    })

    return (<Route><DashboardRoutes/></Route>);
};

const mapStateToProps = (globalState) => ({
  authInfo: globalState.authReducer,
});

const mapDispatchToProps = {
  checkLogin,
};


export default connect(mapStateToProps, mapDispatchToProps)(PrimaryRoutes);