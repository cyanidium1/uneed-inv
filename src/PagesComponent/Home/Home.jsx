import Image from 'next/image';
import Link from 'next/link';
import BrandSlider from '@/Components/UI/BrandSlider';
import TestimonialSection from '@/Components/TestimonialSection';

export default function HomePage() {
  return (
    <>
      {/* // <!-- Main Wrapper --> */}
      <main className="main-wrapper">
        {/* <!-- ...:::Hero Section Start:::... --> */}
        <section className="section-hero">
          <div className="position-relative z-1 overflow-hidden">
            <div className="hero-container">
              <div className="hero-area hero-area--1">
                <div className="hero-content-block hero-content-block--1">
                  <h1>Build Your Dream Buildings For Future</h1>
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination.
                  </p>
                  <Link href="/" className="btn btn-primary">
                    View Our Services
                  </Link>
                </div>
                <div className="hero-image-block hero-image-block--1">
                  <Image
                    src="/assets/img/images/th-1/hero-img-1.png"
                    alt="hero-img-1"
                    width="501"
                    height="516"
                    className="img-fluid"
                  />
                  <Image
                    src="/assets/img/images/th-1/hero-img-bg-shape.png"
                    alt="hero-img-bg-shape"
                    width="565"
                    height="649"
                    className="hero-shape-img hero-shape-img--1"
                  />
                </div>
              </div>
            </div>

            <div className="hero-bottom">
              <div className="container">
                <div className="row">
                  <div className="col position-relative">
                    <Image
                      src="/assets/img/images/th-1/hero-banner-img.png"
                      alt="hero-banner-img"
                      width="1320"
                      height="563"
                      className="img-cover"
                    />
                    <Image
                      src="/assets/img/abstract/doodles.svg"
                      alt="doodles"
                      width="182"
                      height="126"
                      className="position-absolute z-1 end-0 bottom-0 mb-5 d-none d-md-inline-block"
                    />
                  </div>
                </div>
              </div>
              <div className="hero-stripe-1"></div>
              <Image
                src="/assets/img/abstract/construction-cart.svg"
                alt="construction-cart"
                height="137"
                width="91"
                className="abstract-img-hero--1"
              />
            </div>
          </div>
        </section>
        {/* <!-- ...:::Hero Section Start:::... --> */}
        {/* <!-- ...:::About Section Start:::... --> */}
        <section className="section-about">
          <div className="section-space">
            <div className="container">
              <div className="row">
                <div className="col-xl-10 justify-items-center">
                  <h2 className="jos">
                    Construction company are responsible for overseeing & and
                    managing all aspects of a construction project. This
                    includes planning, scheduling, budgeting, and coordination
                    of resources.
                  </h2>

                  <div className="horizontal-line is-1 my-5"></div>

                  {/* <!-- Counter Up Block --> */}
                  <div className="row justify-content-between gy-3">
                    <div className="jos col-auto">
                      <div className="countup-text" data-module="countup">
                        <span className="start-number" data-countup-number="63">
                          63
                        </span>
                        m
                      </div>
                      <span>Trusted By People</span>
                    </div>
                    <div className="jos col-auto">
                      <div className="countup-text" data-module="countup">
                        <span className="start-number" data-countup-number="34">
                          34
                        </span>
                        +
                      </div>
                      <span>Years Of Business</span>
                    </div>
                    <div className="jos col-auto">
                      <div className="countup-text" data-module="countup">
                        <span className="start-number" data-countup-number="5">
                          5
                        </span>
                        k+
                      </div>
                      <span>Trusted By People</span>
                    </div>
                    <div className="jos col-auto">
                      <div className="countup-text" data-module="countup">
                        <span className="start-number" data-countup-number="39">
                          39
                        </span>
                        +
                      </div>
                      <span>Our Team Member</span>
                    </div>
                  </div>
                  {/* <!-- Counter Up Block --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::About Section End:::... --> */}
        {/* <!-- ...:::Why-us Section Start:::... --> */}
        <section className="section-why-us">
          <div className="section-space-bottom">
            <div className="container">
              <div className="row gy-5 flex-column-reverse flex-lg-row align-items-center">
                <div className="col-lg-5 col-xxl-7">
                  <Image
                    src="/assets/img/images/th-1/why-us-img.png"
                    alt="why-us-img"
                    className="jos img-fluid"
                    data-jos_animation="fade-right"
                    width="760"
                    height="640"
                  />
                </div>
                <div className="col-lg-7 col-xxl-5 ps-lg-5">
                  <div className="section-block">
                    <h2 className="jos section-title">
                      Engineering Excellence, Constructing Tomorrow: Konsta
                      Builders
                    </h2>
                    <p className="jos section-text">
                      A construction company is a business entity that
                      specializes in the planning, development, and execution of
                      construction projects. These projects can range from
                      residential, commercial buildings to infrastructure such
                      as roads, bridges, and utilities.
                    </p>
                  </div>

                  {/* <!-- Contant List --> */}
                  <ul className="content-list">
                    <li className="jos">
                      <h3>
                        <Image
                          src="/assets/img/icons/icon-orange-doc.svg"
                          alt="icon-orange-doc"
                          width="36"
                          height="36"
                        />
                        Best House Renovation
                      </h3>
                      <p>
                        Amount a lender is willing to lend to financing your
                        purchase as fact in your ratio of debt to income, among
                        other things.
                      </p>
                    </li>
                    <li className="jos">
                      <h3>
                        <Image
                          src="/assets/img/icons/icon-orange-home.svg"
                          alt="icon-orange-doc"
                          width="36"
                          height="36"
                        />
                        Quality Always Matters
                      </h3>
                      <p>
                        Amount a lender is willing to lend to financing your
                        purchase as fact in your ratio of debt to income, among
                        other things.
                      </p>
                    </li>
                  </ul>
                  {/* <!-- Contant List --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Why-us Section End:::... --> */}
        {/* <!-- ...:::Services Section Start:::... --> */}
        <div className="section-services">
          <div className="section-space-bottom">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="section-bg-dark service-wrapper--1">
                    <div className="row gy-5">
                      <div className="col-lg-6">
                        {/* <!-- Service List --> */}
                        <ul className="service-list-text">
                          <li className="jos">
                            <Link href="/">
                              Integrity Construction
                              <span>
                                <i className="fa-sharp fa-light fa-arrow-right-long"></i>
                              </span>
                            </Link>
                          </li>
                          <li className="jos">
                            <Link href="/">
                              Property Maintenance
                              <span>
                                <i className="fa-sharp fa-light fa-arrow-right-long"></i>
                              </span>
                            </Link>
                          </li>
                          <li className="jos">
                            <Link href="/">
                              Virtual Design & Build
                              <span>
                                <i className="fa-sharp fa-light fa-arrow-right-long"></i>
                              </span>
                            </Link>
                          </li>
                          <li className="jos">
                            <Link href="/">
                              General Construction
                              <span>
                                <i className="fa-sharp fa-light fa-arrow-right-long"></i>
                              </span>
                            </Link>
                          </li>
                          <li className="jos">
                            <Link href="/">
                              Roof Solar Panels
                              <span>
                                <i className="fa-sharp fa-light fa-arrow-right-long"></i>
                              </span>
                            </Link>
                          </li>
                        </ul>
                        {/* <!-- Service List --> */}
                      </div>
                      <div className="col-lg-6">
                        <div className="service-block-right">
                          <p className="jos text-color-light">
                            A construction company is a business entity that
                            specializes in the planning, development, and
                            execution of construction projects. These projects
                            can range from residential.
                          </p>
                          <Link href="/" className="jos btn-text-icon is-blue">
                            More Details
                            <span>
                              <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                            </span>
                          </Link>
                          <div className="jos service-img">
                            <Image
                              src="/assets/img/images/th-1/service-img.png"
                              alt="service-img"
                              width="512"
                              height="517"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 ps-5">
                    <Link href="/" className="btn-text-icon is-orange">
                      More Details
                      <span>
                        <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ...:::Services Section End:::... --> */}
        <BrandSlider />
        {/* <!-- ...:::Why-us Section Start:::... --> */}
        <section className="section-why-us">
          <div className="position-relative z-1">
            <div className="section-space">
              <div className="container">
                <div className="row gy-5 flex-column-reverse flex-lg-row align-items-center">
                  <div className="col-lg-5 col-xxl-6">
                    <Image
                      src="/assets/img/images/th-1/why-us-img-2.png"
                      alt="why-us-img"
                      className="jos img-fluid"
                      width="648"
                      height="580"
                    />
                  </div>
                  <div className="col-lg-7 col-xxl-6 ps-lg-5">
                    <div className="section-block">
                      <h2 className="jos section-title">
                        Build Your Better Home With Professional Trusted
                        Services
                      </h2>
                      <p className="jos section-text">
                        A construction company is a business entity that
                        specializes in the planning, development, and execution
                        of construction projects.
                      </p>
                    </div>

                    {/* <!-- Horizontal Line --> */}
                    <div className="horizontal-line is-1 mb-5"></div>
                    {/* <!-- Horizontal Line --> */}

                    {/* <!-- Contant List --> */}
                    <ul className="content-list">
                      <li className="jos">
                        <h3>
                          <Image
                            src="/assets/img/icons/icon-orange-check.svg"
                            alt="icon-orange-check"
                            width="119"
                            height="82"
                          />
                          Always support from our expert from member
                        </h3>
                        <p>
                          Pellentesque vestibulum, nisi quis posuere pharetra,
                          ligula mauris ultricies metus, vel malesuada leo urna
                          et neque. Donec aliquet sed mauris nec porta
                        </p>
                      </li>
                      <li className="jos">
                        <h3>
                          <Image
                            src="/assets/img/icons/icon-orange-check.svg"
                            alt="icon-orange-check"
                            width="119"
                            height="82"
                          />
                          High Quality Work & Satisfaction Guarantee
                        </h3>
                        <p>
                          Pellentesque vestibulum, nisi quis posuere pharetra,
                          ligula mauris ultricies metus, vel malesuada leo urna
                          et neque. Donec aliquet sed mauris nec porta
                        </p>
                      </li>
                    </ul>
                    {/* <!-- Contant List --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Abstruct Image --> */}
            <Image
              src="/assets/img/abstract/absturct-1.svg"
              alt="absturct-1"
              width="119"
              height="82"
              className="why-us-abstruct--1"
            />
            <Image
              src="/assets/img/abstract/absturct-2.svg"
              alt="absturct-2"
              width="106"
              height="92"
              className="why-us-abstruct--2"
            />
          </div>
        </section>
        {/* <!-- ...:::Why-us Section End:::... --> */}
        {/* <!-- ...:::Project Section Start:::... --> */}
        <section className="section-project">
          <div className="project-showcase-block">
            <div className="container">
              <div className="row">
                <div className="jos col-12 col-md-6 col-lg-4">
                  <div className="project-showcase-single-item">
                    <div className="project-number">01</div>
                    <div className="project-bottom-content">
                      <div className="project-tags">
                        <Link
                          href="/project-details"
                          className="project-tag-link"
                        >
                          Web Application
                        </Link>
                        <Link
                          href="/project-details"
                          className="project-tag-link"
                        >
                          Elicitation
                        </Link>
                      </div>
                      <h2 className="text-white">Medical Office</h2>
                    </div>
                  </div>
                </div>
                <div className="jos col-12 col-md-6 col-lg-4">
                  <div className="project-showcase-single-item">
                    <div className="project-number">02</div>
                    <div className="project-bottom-content">
                      <div className="project-tags">
                        <Link
                          href="/project-details"
                          className="project-tag-link"
                        >
                          Web Application
                        </Link>
                        <Link
                          href="/project-details"
                          className="project-tag-link"
                        >
                          Elicitation
                        </Link>
                      </div>
                      <h2 className="text-white">Residential Office</h2>
                    </div>
                  </div>
                </div>
                <div className="jos col-12 col-md-6 col-lg-4">
                  <div className="project-showcase-single-item">
                    <div className="project-number">03</div>
                    <div className="project-bottom-content">
                      <div className="project-tags">
                        <Link
                          href="/project-details"
                          className="project-tag-link"
                        >
                          Web Application
                        </Link>
                        <Link
                          href="/project-details"
                          className="project-tag-link"
                        >
                          Elicitation
                        </Link>
                      </div>
                      <h2 className="text-white">House Extension</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project Image Background --> */}
            <Image
              src="/assets/img/images/th-1/project-bg-1.jpg"
              alt="project-bg-1"
              width="1920"
              height="699"
              className="project-background"
            />
          </div>
        </section>
        {/* <!-- ...:::Project Section End:::... --> */}
        {/* <!-- ...:::Testimonial Section Start:::... --> */}
        <TestimonialSection />
        {/* <!-- ...:::Testimonial Section End:::... --> */}
        {/* <!-- ...:::Working Progress Section Start:::... --> */}
        <section className="work-progress">
          <div className="section-space-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="section-block">
                    <h2 className="jos section-title text-center">
                      Our Working Plan With Best Experience
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ul className="work-progress-list">
                    <li
                      className="jos"
                      data-jos_animation="fade-right"
                      data-jos_delay="0"
                    >
                      <div className="work-progress-icon">
                        <Image
                          src="/assets/img/icons/icon-work-process-1.svg"
                          alt="icon-work-process-1"
                          width="32"
                          height="32"
                        />
                        <Image
                          src="/assets/img/icons/icon-work-process-1-hover.svg"
                          alt="icon-work-process-1"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div className="work-progress-content">
                        <h3>Product Research</h3>
                        <p>
                          Amount a lender is willing to lend to financing your
                          purchase as fact in your ratio of debt to income,
                          among other things.
                        </p>
                      </div>
                      <div className="work-progress-number">01</div>
                    </li>
                    <li
                      className="jos"
                      data-jos_animation="fade-right"
                      data-jos_delay="0.3"
                    >
                      <div className="work-progress-icon">
                        <Image
                          src="/assets/img/icons/icon-work-process-2.svg"
                          alt="icon-work-process-2"
                          width="32"
                          height="32"
                        />
                        <Image
                          src="/assets/img/icons/icon-work-process-2-hover.svg"
                          alt="icon-work-process-2"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div className="work-progress-content">
                        <h3>General Contract</h3>
                        <p>
                          Amount a lender is willing to lend to financing your
                          purchase as fact in your ratio of debt to income,
                          among other things.
                        </p>
                      </div>
                      <div className="work-progress-number">02</div>
                    </li>
                    <li
                      className="jos"
                      data-jos_animation="fade-right"
                      data-jos_delay="0.6"
                    >
                      <div className="work-progress-icon">
                        <Image
                          src="/assets/img/icons/icon-work-process-3.svg"
                          alt="icon-work-process-3"
                          width="32"
                          height="32"
                        />
                        <Image
                          src="/assets/img/icons/icon-work-process-3-hover.svg"
                          alt="icon-work-process-3"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div className="work-progress-content">
                        <h3>Project Planning</h3>
                        <p>
                          Amount a lender is willing to lend to financing your
                          purchase as fact in your ratio of debt to income,
                          among other things.
                        </p>
                      </div>
                      <div className="work-progress-number">03</div>
                    </li>
                    <li
                      className="jos"
                      data-jos_animation="fade-right"
                      data-jos_delay="0.9"
                    >
                      <div className="work-progress-icon">
                        <Image
                          src="/assets/img/icons/icon-work-process-4.svg"
                          alt="icon-work-process-4"
                          width="32"
                          height="32"
                        />
                        <Image
                          src="/assets/img/icons/icon-work-process-4-hover.svg"
                          alt="icon-work-process-4"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div className="work-progress-content">
                        <h3>Start Your Design</h3>
                        <p>
                          Amount a lender is willing to lend to financing your
                          purchase as fact in your ratio of debt to income,
                          among other things.
                        </p>
                      </div>
                      <div className="work-progress-number">04</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Working Progress Section End:::... --> */}
        {/* <!-- ...:::Team Section Start:::... --> */}
        <section className="section-team">
          <div className="relative z-1">
            <div className="background-orange container-outer-background have-triangle-shape">
              <div className="section-space-top">
                <div className="container">
                  <div className="row justify-content-between align-items-center gy-4 mb-5">
                    <div className="jos col-12 col-sm-10 col-md-8 col-lg-6">
                      <h2 className="section-title text-white">
                        Meet With Our Expert Team Member In Working
                      </h2>
                    </div>
                    <div className="jos col-auto">
                      <Link href="/" className="btn btn-dark">
                        View All Member
                      </Link>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      {/* <!-- Team List --> */}
                      <ul className="team-list--1">
                        <li className="jos team-item">
                          <div className="team-thumbnails">
                            <Image
                              src="/assets/img/images/th-1/team-img-1.jpg"
                              alt="team-img-1"
                              width="424"
                              height="392"
                              className="img-cover"
                            />

                            <div className="team-social-links">
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

                          <div className="team-content">
                            <span>Industrial Engineer</span>
                            <h3>Richard Jackson</h3>
                            <p>
                              Amount a lender is willing lend to financing your
                              purchase as fact in your ratio of debt to income,
                              among other things.
                            </p>
                          </div>
                        </li>
                        <li className="jos team-item">
                          <div className="team-thumbnails">
                            <Image
                              src="/assets/img/images/th-1/team-img-2.jpg"
                              alt="team-img-2"
                              width="424"
                              height="392"
                              className="img-cover"
                            />

                            <div className="team-social-links">
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

                          <div className="team-content">
                            <span>Industrial Engineer</span>
                            <h3>Michael Anderson</h3>
                            <p>
                              Amount a lender is willing lend to financing your
                              purchase as fact in your ratio of debt to income,
                              among other things.
                            </p>
                          </div>
                        </li>
                        <li className="jos team-item">
                          <div className="team-thumbnails">
                            <Image
                              src="/assets/img/images/th-1/team-img-3.jpg"
                              alt="team-img-3"
                              width="424"
                              height="392"
                              className="img-cover"
                            />

                            <div className="team-social-links">
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

                          <div className="team-content">
                            <span>Industrial Engineer</span>
                            <h3>Jennifer Brown</h3>
                            <p>
                              Amount a lender is willing lend to financing your
                              purchase as fact in your ratio of debt to income,
                              among other things.
                            </p>
                          </div>
                        </li>
                      </ul>
                      {/* <!-- Team List --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Team Section End:::... --> */}
        {/* <!-- ...:::Blog Section Start:::... --> */}
        <section className="section-blog">
          <div className="section-space section-space-xlarge-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 mx-auto">
                  <div className="section-block">
                    <h2 className="jos section-title text-center">
                      Update With Our Latest Trends & Insights
                    </h2>
                  </div>
                </div>

                <div className="col-12">
                  <ul className="blog-list--1">
                    <li className="jos blog-item">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                          <div className="blog-left">
                            <div className="blog-post-meta">
                              <a href="#">
                                <Image
                                  src="/assets/img/icons/icon-orange-user.svg"
                                  alt="icon-orange-user"
                                  width="16"
                                  height="16"
                                />
                                Admin
                              </a>
                              <a href="#">
                                <Image
                                  src="/assets/img/icons/icon-orange-chat.svg"
                                  alt="icon-orange-chat"
                                  width="16"
                                  height="16"
                                />
                                Comment
                              </a>
                            </div>
                            <Link href="/blog-details" className="blog-title">
                              Super Bowl ad features a literally striking visual
                              full self-driving
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="blog-center">
                            <p>
                              We used analyzing your request and formulating the
                              task according to your exacts needs to find the
                              most relevent solution
                            </p>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="blog-right">
                            <Link href="/blog-details">
                              <span>
                                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="jos blog-item">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                          <div className="blog-left">
                            <div className="blog-post-meta">
                              <a href="#">
                                <Image
                                  src="/assets/img/icons/icon-orange-user.svg"
                                  alt="icon-orange-user"
                                  width="16"
                                  height="16"
                                />
                                Admin
                              </a>
                              <a href="#">
                                <Image
                                  src="/assets/img/icons/icon-orange-chat.svg"
                                  alt="icon-orange-chat"
                                  width="16"
                                  height="16"
                                />
                                Comment
                              </a>
                            </div>
                            <Link href="/blog-details" className="blog-title">
                              Top 12 tips to building your home awesome in the
                              last year of 2024
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="blog-center">
                            <p>
                              We used analyzing your request and formulating the
                              task according to your exacts needs to find the
                              most relevent solution
                            </p>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="blog-right">
                            <Link href="/blog-details">
                              <span>
                                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="jos blog-item">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                          <div className="blog-left">
                            <div className="blog-post-meta">
                              <a href="#">
                                <Image
                                  src="/assets/img/icons/icon-orange-user.svg"
                                  alt="icon-orange-user"
                                  width="16"
                                  height="16"
                                />
                                Admin
                              </a>
                              <a href="#">
                                <Image
                                  src="/assets/img/icons/icon-orange-chat.svg"
                                  alt="icon-orange-chat"
                                  width="16"
                                  height="16"
                                />
                                Comment
                              </a>
                            </div>
                            <Link href="/blog-details" className="blog-title">
                              How to satisfied to your own property with your
                              happy family to stay
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="blog-center">
                            <p>
                              We used analyzing your request and formulating the
                              task according to your exacts needs to find the
                              most relevent solution
                            </p>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="blog-right">
                            <Link href="/blog-details">
                              <span>
                                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Blog Section End:::... --> */}
      </main>
    </>
  );
}
