import React, { useEffect } from "react";
import { Route, Redirect, Switch, useHistory, NavLink } from "react-router-dom";

import Header from "../shared/components/header/Header"
import MenuBar from "./menu"

import "./dashboard.routes.scss";

const DashboardRoutes = () => {
  const history = useHistory();
  return (
    <>
      <Header />
    <div className="light-version">
    {/* <div id="preloader">
        <div className="preload-content">
            <div id="dream-load"></div>
        </div>
    </div> */}

    
    <section className="hero-section ai3 relative" id="home">
       <div className="overlay"></div>
        <div className="hero-section-content">
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 col-md-12">
                        <div className="welcome-content text-left">
                            <div className="promo-section">
                                <h3 className="special-head g-text">Creative Business Solutions</h3>
                            </div>
                            <h1 className="bold w-text wow fadeInUp" data-wow-delay="0.2s">Creative Digital Agency with Modern Designes.</h1>
                            <p className="wow fadeInUp g-text" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores, voluptate, tempora dolorem fugiat fuga autem .</p>
                            <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                <a href="#" className="btn dream-btn mr-3">get started</a>
                                <a href="#" className="btn dream-btn"> learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="clearfix"></div>
    <div className="parttns">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                    <img src="img/partners/1.png" alt=""/>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                    <img src="img/partners/2.png" alt=""/>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                    <img src="img/partners/3.png" alt=""/>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                    <img src="img/partners/4.png" alt=""/>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                    <img src="img/partners/5.png" alt=""/>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                    <img src="img/partners/6.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    <section className="our_services_area section-padding-100-0 " id="services">
        <div className="container">
            
            <div className="section-heading text-center">
                <div className="top-sec-h justify-content-center fadeInUp" data-wow-delay="0.2s">Our Services</div>
                <h2 className="d-blue bold fadeInUp" data-wow-delay="0.3s">Our Special Services</h2>
                <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="service_single_content text-left mb-100 fadeInUp" data-wow-delay="0.2s">
|                        <div className="service_icon max">
                            <img src="img/icons/s1.png" alt=""/>
                        </div>
                        <h6 className="d-blue bold">Fundemental nature of creativity and collaboration</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="service_single_content text-left mb-100 fadeInUp" data-wow-delay="0.3s">
                        <div className="service_icon max">
                            <img src="img/icons/s2.png" alt=""/>
                        </div>
                        <h6 className="d-blue bold">Successful collaboration still depends on trust</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="service_single_content text-left mb-100 fadeInUp" data-wow-delay="0.4s">
                        <div className="service_icon max">
                            <img src="img/icons/s3.png" alt=""/>
                        </div>
                        <h6 className="d-blue bold">The improved work-life integration has enabled</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section className="about-us-area section-padding-0-0">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-sm-12">
                    <div className="welcome-meter mt-s fadeInUp" data-wow-delay="0.7s">
                        <img src="img/core-img/about.png" className="doted" alt=""/>
                    </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
                    <div className="who-we-contant mt-s">
                        <div className="top-sec-h fadeInUp" data-wow-delay="0.2s">Collaboration</div>
                        <h4 className="bl-text fadeInUp" data-wow-delay="0.3s">Team Members Collaboration in real time life</h4>
                        <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor</p>
                        <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!</p>
                        
                        <a className="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section className="about-us-area section-padding-100-0">
        <div className="container">
            <div className="row align-items-center">
                
                <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
                    <div className="who-we-contant">
                        <div className="top-sec-h fadeInUp" data-wow-delay="0.2s">Reporting</div>
                        <h4 className="bl-text fadeInUp" data-wow-delay="0.3s">Right people, Right tools</h4>
                        <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor</p>
                        <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!</p>
                        
                        <a className="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-sm-12">
                    <div className="welcome-meter mt-s fadeInUp" data-wow-delay="0.7s">
                        <img src="img/core-img/about1.png" className="doted" alt=""/>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section className="about-us-area section-padding-100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-sm-12">
                    <div className="welcome-meter mt-s fadeInUp" data-wow-delay="0.7s">
                        <img src="img/core-img/about2.png" className="doted" alt=""/>
                    </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
                    <div className="who-we-contant mt-s">
                        <div className="top-sec-h fadeInUp" data-wow-delay="0.2s">Insight</div>
                        <h4 className="bl-text fadeInUp" data-wow-delay="0.3s">Creative Digital Agency with Modern Designes.</h4>
                        <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor</p>
                        <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!</p>
                        
                        <a className="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="about-us-area trial-bg section-padding-100 clearfix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-sm-12">
                    <img src="img/core-img/trial.png" alt=""/>
                </div>
                <div className="col-12 col-lg-6 col-sm-12">
                    <div className="who-we-contant mt-s">
                        <div className="top-sec-h wow fadeInUp" data-wow-delay="0.2s">Free Trial</div>
                        <h4 className="w-text fadeInUp" data-wow-delay="0.3s">Get started with a free trail</h4>
                        <p className="w-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cum dolore temporibus esse explicabo magni excepturi.</p>
                        <div className="subscribe-section has-shadow mt-30">
                            <div className="input-wrapper">
                                <i className="fa fa-home"></i>
                                <input type="email" placeholder="Enter your Email"/>
                            </div>
                            <button className="btn dream-btn mt-30 mt-sm-15 ml-15">subscribe</button>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    </section>
    <section className="how section-padding-100-70 relative hex-pat-2" >
        <div className="container">
            <div className="section-heading text-center">
                <div className="top-sec-h wow fadeInUp" data-wow-delay="0.2s">Working Steps</div>
                <h2 className="wow fadeInUp d-blue bold" data-wow-delay="0.3s" >How it works</h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="service_single_content box-shadow text-center mb-100 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="how_icon">
                            <img src="img/icons/h1.png" className="colored-icon" alt=""/>
                        </div>
                        <h6>Add Your Business Problem</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="service_single_content box-shadow text-center mb-100 wow wow fadeInUp" data-wow-delay="0.3s">
                        <div className="how_icon">
                            <img src="img/icons/h2.png" className="colored-icon" alt=""/>
                        </div>
                        <h6>Analysis Work Results</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="service_single_content box-shadow text-center mb-100 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="how_icon">
                            <img src="img/icons/h3.png" className="colored-icon" alt=""></img>
                        </div>
                        <h6>Monitor Business Growth</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="features section-padding-0-100">
        <div className="container">
            <div className="section-heading text-center">
                <div className="top-sec-h wow fadeInUp" data-wow-delay="0.2s">Our Features</div>
                <h2 className="d-blue bold wow fadeInUp" data-wow-delay="0.3s">Our core Features</h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
            <div className="row align-items-center">
                <div className="service-img-wrapper how col-lg-6 col-md-12 col-sm-12">
                    <div className="image-box">
                        <img src="img/core-img/about3.png" className="center-block img-responsive phone-img" alt=""></img>
                    </div>
                </div>
                <div className="services-column col-lg-6 col-md-12 col-xs-12">
                    <div className="services-block-four">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src="img/svg/1.svg" alt=""/>
                            </div>
                            <h3><a href="#">Note All important Tasks</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae.</div>
                        </div>
                    </div>
                    <div className="services-block-four">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src="img/svg/2.svg" alt=""/>
                            </div>
                            <h3><a href="#">Manage Users with life state</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aut repudiandae harum, fugit.</div>
                        </div>
                    </div>
                    <div className="services-block-four" style={{marginBottom : 0}}>
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src="img/svg/3.svg" alt=""/>
                            </div>
                            <h3><a href="#">Assign Tasks & Track Progress</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores, ducimus animi a..</div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </section>
    <div className="clearfix"></div>
    <section className="pricing section-padding-100-70" style={{background : '#edf6fd', 'id' : 'pricing'}}>
        <div className="container">
            <div className="section-heading text-center">
                <div className="top-sec-h wow fadeInUp" data-wow-delay="0.2s">Pricing plans</div>
                <h2 className="d-blue bold fadeInUp" data-wow-delay="0.3s">Our Pricing Plans</h2>
                <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>
            <div className="row no-gutters">
                <div className="col-lg-4 col-md-6">
                    <div className="single_price_table_content text-center wow fadeInUp" data-wow-delay="0.2s">
                        <div className="price_table_text">
                            <h5>Begginer</h5>
                            <h1>Free</h1>
                            <p>Always</p>
                        </div>
                        <div className="table_text_details">
                            <p>250GB Bandwidth</p>
                            <p>08 Email Account</p>
                            <p>Unlimited Database </p>
                            <p>10GB Free Disk </p>
                            <p>24/7 Support</p>
                        </div>
                        <div className="table_btn mt-50">
                            <a href="#" className="btn dream-btn">Start</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_price_table_content active text-center wow fadeIn" data-wow-delay="0.3s">
                        <div className="price_table_text">
                            <h5>Business</h5>
                            <h1>$24.99</h1>
                            <p>Per Month</p>
                        </div>
                        <div className="table_text_details">
                            <p>250GB Bandwidth</p>
                            <p>08 Email Account</p>
                            <p>Unlimited Database </p>
                            <p>10GB Free Disk </p>
                            <p>24/7 Support</p>
                        </div>
                        <div className="table_btn mt-50">
                            <a href="#" className="btn dream-btn">Start</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_price_table_content text-center wow fadeInUp" data-wow-delay="0.4s">
                        <div className="price_table_text">
                            <h5>professional</h5>
                            <h1>$84.99</h1>
                            <p>Per Month</p>
                        </div>
                        <div className="table_text_details">
                            <p>250GB Bandwidth</p>
                            <p>08 Email Account</p>
                            <p>Unlimited Database </p>
                            <p>10GB Free Disk </p>
                            <p>24/7 Support</p>
                        </div>
                        <div className="table_btn mt-50">
                            <a href="#" className="btn dream-btn">Start</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   <div className="footer-bg">
        <section className="clients_testimonials_area bg-img section-padding-100-0" id="test">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-center">
                            <div className="top-sec-h wow fadeInUp" data-wow-delay="0.2s">Our Testimonials</div>
                            <h2 className="d-blue bold bl-text wow fadeInUp" data-wow-delay="0.3s">Loved By Our Clients</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cotainer-fluid">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                    <div className="col-12 col-md-10 col-xs-10 offset-xs-1">
                        <div className="client_slides owl-carousel">
                            <div className="single-testimonial text-center">
                                <div className="testimonial_image">
                                    <img src="img/test-img/1.jpg" alt=""/>
                                </div>
                                <div className="testimonial-description">
                                    <div className="testimonial_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magni, quisquam, accusantium dolores atque, doloribus odit minus maiores sunt mollitia consequatur, soluta quasi.</p>
                                    </div>
                                    <div className="admin_text">
                                        <h5>Sunny Khan</h5>
                                        <p>Head of Design, Company CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-testimonial text-center">
                                <div className="testimonial_image">
                                    <img src="img/test-img/2.jpg" alt=""/>
                                </div>
                                <div className="testimonial-description">
                                    <div className="testimonial_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.</p>
                                    </div>
                                    <div className="admin_text">
                                        <h5>Ajoy Das</h5>
                                        <p>Head of Idea, Company CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-testimonial text-center">
                                <div className="testimonial_image">
                                    <img src="img/test-img/3.jpg" alt=""/>
                                </div>
                                <div className="testimonial-description">
                                    <div className="testimonial_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et delectus, nam repudiandae repellat id placeat molestias consequuntur, laudantium dolorem nesciunt sit.</p>
                                    </div>
                                    <div className="admin_text">
                                        <h5>Jebin Khan</h5>
                                        <p>Head of Marketing, Company CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer-area bg-img" style={{backgroundImage : 'url(img/core-img/pattern.png)'}}>
            <div className="contact_us_area section-padding-100-0" id="contact">
                <div className="container">
                    <div className="call-us-sec">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-9">
                                <div className= "text-left">
                                    <h3 className="g-text fadeInUp" data-wow-delay="0.3s">So What is Next?</h3>
                                    <h2 className="bold w-text mb-0">Are You Ready? Let’S Work!</h2>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3">
                                <a className="btn dream-btn more-btn fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="footer-content-area spec">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 col-lg-4 col-md-6">
                            <div className="footer-copywrite-info">
                                <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                                    <div className="footer-logo">
                                        <a href="#"><img src="img/core-img/logo.png" alt="logo"/> Nadrix </a>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.</p>
                                </div>
                                <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6">
                            <div className="contact_info_area d-sm-flex justify-content-between">
                                <div className="contact_info mt-x text-center fadeInUp" data-wow-delay="0.3s">
                                    <h5>PRIVACY & TOS</h5>
                                    <a href=""><p>Advertiser Agreement</p></a>
                                    <a href=""><p>Acceptable Use Policy</p></a>
                                    <a href=""><p>Privacy Policy</p></a>
                                    <a href=""><p>Technology Privacy</p></a>
                                    <a href=""><p>Developer Agreement</p></a>
                                </div>
                            </div>
                        </div>
                          
                        <div className="col-12 col-lg-2 col-md-6 ">
                            <div className="contact_info_area d-sm-flex justify-content-between">
                                <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                                    <h5>NAVIGATE</h5>
                                    <a href=""><p>Advertisers</p></a>
                                    <a href=""><p>Developers</p></a>
                                    <a href=""><p>Resources</p></a>
                                    <a href=""><p>Company</p></a>
                                    <a href=""><p>Connect</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 ">
                            <div className="contact_info_area d-sm-flex justify-content-between">
                                <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.4s">
                                    <h5>CONTACT US</h5>
                                    <p>Mailing Address:xx00 E. Union Ave</p>
                                    <p>Suite 1100. Denver, CO 80237</p>
                                    <p>+999 90932 627</p>
                                    <p>support@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </footer>
    </div>
    {/* <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/dzsparallaxer.js"></script>
    <script src="js/jquery.syotimer.min.js"></script>
    <script src="js/script.js"></script> */}
</div>
   
    </>
  );
};


export default DashboardRoutes;