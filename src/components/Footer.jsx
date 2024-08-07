'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    // <!-- ...:::Footer Section Start:::... -->
    <>
      <footer className="section-footer">
        <div className="background-dark position-relative z-1">
          <div className="section-space section-space-xlarge-top">
            <div className="footer-top">
              <div className="container">
                <div className="row justify-content-between gy-5">
                  <div className="col-lg-4">
                    <div className="footer-widget">
                      <div className="footer-about">
                        <Link href="/" className="footer-logo">
                          <Image
                            src="/assets/img/logo.png"
                            alt="logo"
                            width="174"
                            height="43"
                          />
                        </Link>
                        <p>
                          A construction company is a business entity that
                          specializes in the planning, development and execution
                          of construction projects. These projects can range
                          from residential.
                        </p>

                        <ul className="footer-info-list">
                          <li>
                            <Image
                              src="/assets/img/icons/icon-white-chat.svg"
                              alt="icon-white-message-2-fill"
                              width="18"
                              height="18"
                            />
                            <a href="mailto:youremail@mail.com">
                              youremail@mail.com
                            </a>
                          </li>
                          <li>
                            <Image
                              src="/assets/img/icons/icon-white-map-pin-fill.svg"
                              alt="icon-white-map-pin-fill"
                              width="18"
                              height="19"
                            />
                            <address>
                              1200 Main St. Santa Rosa, CA 93541
                            </address>
                          </li>
                          <li>
                            <Image
                              src="/assets/img/icons/icon-white-calendar-schedule-fill.svg"
                              alt="icon-white-calendar-schedule-fill"
                              width="18"
                              height="19"
                            />
                            <span>Mon - Sat 8:00 - 17:30</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <div className="footer-widget">
                      <h3 className="footer-title">Company</h3>
                      <ul className="footer-nav">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        {/* <li>
                          <a href="services.html">Our Services</a>
                        </li>
                        <li>
                          <a href="faqs.html">FAQ’s Pages</a>
                        </li> */}
                        <li>
                          <Link href="/blog">Blog & News</Link>
                        </li>
                        {/* <li>
                          <a href="teams.html">Our Teams</a>
                        </li> */}
                        <li>
                          <Link href="/projects">Our Projects</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <div className="footer-widget">
                      <h3 className="footer-title">Our Services</h3>
                      {/* <ul className="footer-nav">
                        <li>
                          <a href="service-details.html">
                            Build Craft Solutions
                          </a>
                        </li>
                        <li>
                          <a href="service-details.html">
                            ProBuild Innovations
                          </a>
                        </li>
                        <li>
                          <a href="service-details.html">
                            Summit Builders Group
                          </a>
                        </li>
                        <li>
                          <a href="service-details.html">
                            Prime Build Contractors
                          </a>
                        </li>
                        <li>
                          <a href="service-details.html">
                            Pinnacle Pro Con Builders
                          </a>
                        </li>
                        <li>
                          <a href="service-details.html">
                            Integrity Construction
                          </a>
                        </li>
                        <li>
                          <a href="service-details.html">Solid Foundation</a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  <div className="col-md-auto col-lg-3">
                    <div className="footer-widget">
                      <h3 className="footer-title">Our Services</h3>
                      <p>Get daily tips from Konsta</p>
                      <form action="#" method="post" className="footer-form">
                        <input
                          type="text"
                          name="footer-name"
                          id="footer-name"
                          placeholder="Your name"
                          required
                        />
                        <input
                          type="email"
                          name="footer-email"
                          id="footer-email"
                          placeholder="Your email"
                          required
                        />
                        <button type="submit">Subscribe Now</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="copyright-text">
                     Konsta. All Rights Reserved By <a href="#">4damsthemes</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-abstruct">
            <Image
              src="/assets/img/abstract/footer-abstruct-1.svg"
              alt="footer-abstruct-1"
              width="90"
              height="112"
            />
            <Image
              src="/assets/img/abstract/footer-abstruct-2.svg"
              alt="footer-abstruct-2"
              width="251"
              height="71"
            />
            <Image
              src="/assets/img/abstract/footer-abstruct-3.svg"
              alt="footer-abstruct-3"
              width="119"
              height="82"
            />
          </div>
        </div>
      </footer>
      <button id="scrollTopBtn" title="Go to top">
        Top
      </button>
    </>
  );
};

export default Footer;
