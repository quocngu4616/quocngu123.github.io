import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer_content container">
                        <div className="footer_top row">
                            <ul className="col  footer__item">
                                <li className="fotter__list-item">
                                    <a className="footer__text-bold" href="https://www.facebook.com/">
                                        Udemy for Business
                      </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="footer__text-bold" href="https://www.facebook.com/">
                                        Teach on Udemy
                          </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="https://www.facebook.com">
                                        Udemy app
                              </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="https://www.facebook.com">
                                        About us
                                  </a>
                                </li>
                            </ul>
                            <ul className="col  footer__item">
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="https://www.facebook.com">
                                        Careers
                                        </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="https://www.facebook.com">
                                        Blog
                                            </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="https://www.facebook.com">
                                        Help and Support
                                                </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="https://www.facebook.com">
                                        Affiliate
                                                    </a>
                                </li>
                            </ul>
                            <ul className="col  footer__item">
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="https://www.facebook.com">
                                        Sitemap
                                                          </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="https://www.facebook.com">
                                        Popular courses
                                                              </a>
                                </li>
                            </ul>

                        </div>
                        <div className="footer_bot row">
                            <div className=" footer__bot--left col-md-6 col-sm-12 ">
                                <img className="footer_img" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt />
                                <span className="Copyright">NguyenChuQuocNgu © 2020 Udemy, Inc.</span>
                            </div>
                            {/* <div className=" footer__bot--right col-md-6  col-sm-12">
                  <div className="footer_bot_info d-flex">
                    <a className="mr-3" href="https://www.facebook.com/">
                      Terms
                                                                                  </a>
                    <a href="https://www.facebook.com/">
                      Privacy Policy and Cookie Policy
                                                                                    </a>
                  </div>
                </div> */}
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
