'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Burger from './UI/Burger';

const Header = () => {
  const pathname = usePathname();

  const linkClass =
    pathname === '/' ? 'header-nav-link' : 'header-nav-link is-white';

  const buttonClass =
    pathname === '/' ? 'btn-outline-dark' : 'btn-outline-white';

  return (
    <>
      <header className="section-header">
        <div className="header-wrapper">
          <div className="header-logo">
            <Link href="/">
              <Image
                src="/assets/img/logo.png"
                alt="logo"
                width="174"
                height="43"
              />
            </Link>
          </div>
          <div className="header-container">
            <div className="header-area">
              {/* <!-- Header Top --> */}
              <div className="header-top">
                <div className="header-top-left-side">
                  <ul className="header-info-list">
                    <li>
                      <Image
                        src="assets/img/icons/icon-orange-map-pin-fill.svg"
                        alt="icon-orange-map-pin-fill"
                        width="18"
                        height="19"
                      />
                      <address>1200 Main St. Santa Rosa, CA 93541</address>
                    </li>
                    <li>
                      <Image
                        src="assets/img/icons/icon-orange-message-2-fill.svg"
                        alt="icon-orange-message-2-fill"
                        width="18"
                        height="18"
                      />
                      <a href="mailto:youremail@mail.com">youremail@mail.com</a>
                    </li>
                    <li>
                      <Image
                        src="assets/img/icons/icon-orange-calendar-schedule-fill.svg"
                        alt="icon-orange-calendar-schedule-fill"
                        width="18"
                        height="19"
                      />
                      <span>Mon - Sat 8:00 - 17:30</span>
                    </li>
                  </ul>
                </div>
                <div className="header-top-right-side">
                  <span>Follow Us:</span>
                  <div className="header-social-links">
                    <a
                      href="http://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="http://www.pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                    <a
                      href="http://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="http://www.x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Header Top --> */}

              <div className="horizontal-line is-1"></div>

              {/* <!-- Header Bottom --> */}
              <div className="header-bottom">
                {/* <!-- Header Menu --> */}
                <nav className="header-nav d-none d-lg-block">
                  <ul className="header-nav-list">
                    <li className="header-nav-item has-submenu">
                      <Link href="/" className={linkClass}>
                        Home
                      </Link>
                      {/* <ul className="dropdown-menu-list">
                      <li className="dropdown-menu-item">
                        <a href="index.html" className="dropdown-menu-link">
                          Home 1
                        </a>
                      </li>
                      <li className="dropdown-menu-item">
                        <a href="index-2.html" className="dropdown-menu-link">
                          Home 2
                        </a>
                      </li>
                      <li className="dropdown-menu-item">
                        <a href="index-3.html" className="dropdown-menu-link">
                          Home 3
                        </a>
                      </li>
                    </ul> */}
                    </li>
                    <li className="header-nav-item has-submenu">
                      <a href="#" className={linkClass}>
                        Pages
                      </a>
                      <ul className="dropdown-menu-list">
                        <li className="dropdown-menu-item">
                          <Link href="/about" className="dropdown-menu-link">
                            About
                          </Link>
                        </li>
                        {/* <li className="dropdown-menu-item">
                        <a href="pricing.html" className="dropdown-menu-link">
                          Pricing
                        </a>
                      </li>
                      <li className="dropdown-menu-item">
                        <a href="teams.html" className="dropdown-menu-link">
                          Teams
                        </a>
                      </li>
                      <li className="dropdown-menu-item">
                        <a
                          href="team-details.html"
                          className="dropdown-menu-link"
                        >
                          Team Details
                        </a>
                      </li>
                      <li className="dropdown-menu-item">
                        <a href="faqs.html" className="dropdown-menu-link">
                          FAQ’s
                        </a>
                      </li> */}
                      </ul>
                    </li>
                    <li className="header-nav-item has-submenu">
                      <a href="#" className={linkClass}>
                        Projects
                      </a>
                      <ul className="dropdown-menu-list">
                        <li className="dropdown-menu-item">
                          <Link href="/projects" className="dropdown-menu-link">
                            Projects
                          </Link>
                        </li>
                        <li className="dropdown-menu-item">
                          <Link
                            href="/project-details"
                            className="dropdown-menu-link"
                          >
                            Project Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="header-nav-item has-submenu">
                    <a href="#" className={linkClass}>
                      Services
                    </a>
                    <ul className="dropdown-menu-list">
                      <li className="dropdown-menu-item">
                        <a href="services.html" className="dropdown-menu-link">
                          Services
                        </a>
                      </li>
                      <li className="dropdown-menu-item">
                        <a
                          href="service-details.html"
                          className="dropdown-menu-link"
                        >
                          Service Details
                        </a>
                      </li>
                    </ul>
                  </li> */}
                    <li className="header-nav-item has-submenu">
                      <a href="#" className={linkClass}>
                        News
                      </a>
                      <ul className="dropdown-menu-list">
                        <li className="dropdown-menu-item">
                          <Link href="/blog" className="dropdown-menu-link">
                            News
                          </Link>
                        </li>
                        <li className="dropdown-menu-item">
                          <Link
                            href="/blog-details"
                            className="dropdown-menu-link"
                          >
                            News Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-nav-item">
                      <Link href="/contact" className={linkClass}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* <!-- Header Menu --> */}

                {/* <!-- Header Event --> */}
                <ul className="header-event">
                  <li>
                    {/* <!-- Search Button --> */}
                    <button
                      className="text-dark"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#searchBar"
                      aria-controls="searchBar"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    {/* <!-- Search Button --> */}
                  </li>
                  <li className="d-none d-xxl-block">
                    {/* <!-- Header Phone --> */}
                    <div>
                      <i className="fa-solid fa-phone"></i>
                      <a href="tel:+1332455533" className="ps-2">
                        +1 3324 55 533
                      </a>
                    </div>
                    {/* <!-- Header Phone --> */}
                  </li>
                  <li>
                    {/* <!-- Link Block --> */}
                    <Link
                      href="/contact"
                      className={`btn ms-xxl-5 d-none d-xl-inline-block ${buttonClass}`}
                      // className="btn btn-outline-dark ms-xxl-5 d-none d-xl-inline-block"
                    >
                      Lets talk
                    </Link>
                    {/* <!-- Link Block --> */}
                  </li>

                  <li>
                    {/* <!-- Responsive Offcanvas Menu Button --> */}

                    <Burger />

                    {/* <!-- Responsive Offcanvas Menu Button --> */}
                  </li>
                </ul>
                {/* <!-- Header Event --> */}
              </div>
              {/* Header Bottom  */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
