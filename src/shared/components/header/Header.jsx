import React from "react";
import { connect } from 'react-redux'
import { logoutUser } from "../../../data/actions/auth.actions";
import "./Header.scss";
import logo from '../../../assets/images/neatheat-logo.png'

const Header = ({ requireBackground, title, logoutUser }) => {
  return (
  <div>
    <header className="header-area fadeInDown" data-wow-delay="0.2s">
        <div className="classy-nav-container light breakpoint-off dark left">
            <div className="container">
                <nav className="classy-navbar light justify-content-between" id="dreamNav">
                    <a className="nav-brand light" href="#"><img src="img/core-img/logo.png" alt="logo"/> Nadrix</a>

                    <div className="classy-navbar-toggler demo">
                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                    <div className="classy-menu">
                        <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                        </div>
                        <div className="classynav">
                            <ul id="nav">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="contact-us.html">Contact</a></li>
                            </ul>
                            <a href="#" className="btn login-btn ml-50">Log in</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  </div>);
};

const mapStateToProps = (globalState) => ({
  authInfo: globalState.authReducer.authInfo
})

const mapDispatchToProps = ({
  logoutUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
