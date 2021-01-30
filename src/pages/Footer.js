import React from 'react';

const Footer = () => {
      return (
                <div style={{backgroundColor:'black'}} class="container">
                      <div class=" mt-5 row">
                            <div class="text-center my-4 col-12 col-sm-12 col-md-5 col-lg-5">
                                  <img width="30%" class="pb-4" src="" alt=""/>
                                        <div class="text-center">
                                              <h3 className = "text-secondary">A trustworthy exchange site</h3>
                                              </div>
                                        </div>
                              <div class="text-center my-4 col-12 col-sm-12 col-md-2 col-lg-2">
                                    <ul class="list-unstyled text-secondary">
                                    <li>Features</li>
                                    <li>Enterprise</li>
                                    <li>Pricing</li>
                                    </ul>
                              </div>
                              <div class="text-center my-4 col-12 col-sm-12 col-md-2 col-lg-2">
                              <ul class="list-unstyled text-secondary">
                              <li>Blog</li>
                              <li>Help Center</li>
                              <li>Contact Us</li>
                              <li>Status</li>
                              </ul>
                              </div>
                              <div class="text-center my-4 col-12 col-sm-12 col-md-2 col-lg-2">
                              <ul class="list-unstyled text-secondary">
                              <li>About Us</li>
                              <li>Terms of Service</li>
                              <li>Security</li>
                              <li>Login</li>
                              </ul>
                              </div>
                        </div>
                  </div>  
      );
};

export default Footer;