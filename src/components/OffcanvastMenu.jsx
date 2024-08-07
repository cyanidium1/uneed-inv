'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const OffcanvastMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className={`offcanvas-backdrop pointer-events-auto ${isOpen ? 'show' : 'fade'}`}
        ></div>
      )}
      {/* // ...::: Offcanvast Menu Start:::... */}
      <div
        className={`offcanvas offcanvas-start block-bg-dark ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasManu"
        aria-labelledby="offcanvasManu"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="offcanvas-body">
          <Link
            onClick={onClose}
            href="/"
            className="d-flex justify-content-center mb-4"
          >
            <Image
              src="/assets/img/logo-orange.png"
              alt="logo"
              width="128"
              height="35"
              className="img-fluid"
            />
          </Link>

          <nav className="category-menu">
            <Accordion allowZeroExpanded>
              <AccordionItem uuid={0}>
                <AccordionItemHeading>
                  <AccordionItemButton>Demo</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* <ul className="subcategory">
                    <li> */}
                  <Link onClick={onClose} href="/">
                    Home
                  </Link>
                  {/* </li>
                  </ul> */}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid={1}>
                <AccordionItemHeading>
                  <AccordionItemButton>Pages</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col">
                    <div>
                      <Link onClick={onClose} href="/about">
                        About
                      </Link>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid={2}>
                <AccordionItemHeading>
                  <AccordionItemButton>Projects</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <Link onClick={onClose} href="/projects">
                        Projects
                      </Link>
                    </div>
                    <div>
                      <Link onClick={onClose} href="/project-details">
                        Projects Details
                      </Link>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid={3}>
                <AccordionItemHeading>
                  <AccordionItemButton>News</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <Link onClick={onClose} href="/blog">
                        News
                      </Link>
                    </div>
                    <div>
                      <Link onClick={onClose} href="/blog-details">
                        News Details
                      </Link>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem uuid={4}>
                <AccordionItemHeading>
                  <AccordionItemButton>Contact Us</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col">
                    <div>
                      <Link onClick={onClose} href="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </nav>

          <div className="social-list justify-content-center mt-3">
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
      {/* // ...::: Offcanvast Menu End:::... */}

      {/* // ...::: Offcanvas Search Start:::... */}
      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="searchBar"
        aria-labelledby="searchBarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 mx-auto">
                <h5 className="offcanvas-title mb-2" id="searchBarLabel">
                  Search by keyword
                </h5>
                <form action="#" method="get" className="position-relative">
                  <input
                    type="search"
                    placeholder="Search here"
                    className="form-input pe-5"
                    required
                  />
                  <button className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // ...::: Offcanvas Search End:::... */}
    </>
  );
};

export default OffcanvastMenu;
