import Image from 'next/image';
import Link from 'next/link';
import BrandSlider from '@/Components/UI/BrandSlider';
import AwardSlider from '@/Components/UI/AwardSlider';
import TestimonialSection from '@/Components/TestimonialSection';
const About = () => {
  return (
    <div>
      {/* <!-- Main Wrapper --> */}
      <main className="main-wrapper">
        {/* <!-- ...:::Breadcrumb Section Start:::... --> */}
        <section className="section-breadcrumb">
          <div className="background-dark">
            <div className="position-relative z-1">
              <div className="breadcrumb-space">
                <div className="breadcrumb-container">
                  <div className="breadcrumb-right-block">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          About Us
                        </li>
                      </ol>
                    </nav>
                    <div className="breadcrumb-content">
                      <h2 className="text-white">
                        Elevate Construct: Building Dreams, One Structure at a
                        Time
                      </h2>
                      <p>
                        A construction company is a business entity that for
                        this specializes in the planning, development.
                      </p>
                      <Link
                        href="/contact"
                        className="btn-text-icon is-orange-white"
                      >
                        Contact With Us
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="breadcrumb-left-block">
                    <div className="breadcrumb-img">
                      <Image
                        src="/assets/img/images/th-1/breadcrumb-img-1.png"
                        alt="breadcrumb-img-1"
                        width="748"
                        height="395"
                        className="img-responsive"
                      />
                      <Image
                        src="/assets/img/abstract/doodles.svg"
                        alt="doodles"
                        width="124"
                        height="86"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bradecrumb-shape">
                <Image
                  src="/assets/img/abstract/breadcrumb-bg-shape.svg"
                  alt="breadcrumb-bg-shape"
                  width="203"
                  height="232"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Breadcrumb Section End:::... --> */}

        {/* <!-- ...:::Why-us Section Start:::... --> */}
        <section className="section-why-us">
          <div className="position-relative z-1">
            <div className="section-space">
              <div className="container">
                <div className="row gy-5 flex-column-reverse flex-lg-row align-items-center">
                  <div className="col-lg-5 col-xxl-6">
                    <Image
                      src="/assets/img/images/th-2/why-us-img-1.png"
                      alt="why-us-img"
                      width="648"
                      height="619"
                      className="jos img-fluid"
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
                            width={29}
                            height={29}
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
                            width={29}
                            height={29}
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

                    <div className="mt-5">
                      <Link href="/about" className="btn btn-orange">
                        More About Konsta
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Why-us Section End:::... --> */}

        {/* <!-- ...:::About Section Start:::... --> */}
        <section className="section-about">
          <div className="section-space-bottom">
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

        {/* <!-- ...:::Why-choose Section Start:::... --> */}
        <section className="section-why-choose">
          <div className="section-space-bottom">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-6 col-xxl-8">
                  <Image
                    src="/assets/img/images/th-2/why-us-img-2.png"
                    alt="why-us-img-2"
                    width="872"
                    height="508"
                    className="img-cover"
                  />
                </div>
                <div className="col-lg-6 col-xxl-4">
                  <div className="why-us-block--2">
                    <ul>
                      <li>
                        <div className="content-top">
                          <Image
                            src="/assets/img/icons/icon-white-award.svg"
                            alt="icon-white-award"
                            width="58"
                            height="50"
                          />
                          <h3>We Are A Award Winning Company</h3>
                        </div>
                        <p>
                          We are <b>100+</b> professional software is the that
                          engineers with more is a than.
                        </p>
                      </li>
                      <li>
                        <div className="content-top">
                          <Image
                            src="/assets/img/icons/icon-orange-salary.svg"
                            alt="icon-orange-salary"
                            width="58"
                            height="50"
                          />
                          <h3>633,56+ Solution Solved Now</h3>
                        </div>
                        <p>
                          We are 100+ professional software is that engineers
                          with more is a than.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Why-choose Section End:::... --> */}

        {/* <!-- ...:::Brand Slider Section Start:::... --> */}
        <div className="section-brand-slider">
          <div className="section-space-bottom">
            <BrandSlider />
          </div>
        </div>
        {/* <!-- ...:::Brand Slider Section End:::... --> */}

        {/* <!-- ...:::Why-us Section Start:::... --> */}
        <section className="section-why-us">
          <div className="section-space-bottom">
            <div className="container">
              <div className="row gy-5 flex-column-reverse flex-lg-row align-items-center">
                <div className="col-lg-5 col-xxl-7">
                  <Image
                    src="/assets/img/images/th-1/why-us-img.png"
                    alt="why-us-img"
                    width={760}
                    height={640}
                    className="jos img-fluid"
                    data-jos_animation="fade-right"
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

                  {/* <!-- Content List --> */}
                  <ul className="content-list">
                    <li className="jos">
                      <h3>
                        <Image
                          src="/assets/img/icons/icon-orange-doc.svg"
                          alt="icon-orange-doc"
                          width={36}
                          height={36}
                        />{' '}
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
                          width={36}
                          height={36}
                        />{' '}
                        Quality Always Matters
                      </h3>
                      <p>
                        Amount a lender is willing to lend to financing your
                        purchase as fact in your ratio of debt to income, among
                        other things.
                      </p>
                    </li>
                  </ul>
                  {/* <!-- Content List --> */}
                </div>
              </div>
            </div>
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

        {/* <!-- ...:::Award-Slider Section Start:::... --> */}
        <AwardSlider />

        {/* <!-- ...:::Testimonial Section Start:::... --> */}
        <TestimonialSection />
        {/* <!-- ...:::Testimonial Section End:::... --> */}

        {/* <!-- ...:::Team Section Start:::... --> */}
        <section className="section-team">
          <div className="relative z-1">
            <div className="background-orange container-outer-background have-triangle-shape">
              <div className="section-space-top">
                <div className="container">
                  <div className="row justify-content-between align-items-center gy-4 mb-5">
                    <div className="jos col-12 col-sm-10 col-md-8 col-lg-6">
                      <h2 className=" section-title text-white">
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
              <div className="row justify-content-between align-items-center g-4">
                <div className="col-sm-10 col-md-7 col-xxl-5">
                  <h2 className="section-title">
                    Update With Our Latest Trends & Insights
                  </h2>
                </div>
                <div className="col-auto">
                  <Link href="/blog" className="btn btn-orange">
                    View All News
                  </Link>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  {/* <!-- Blog List --> */}
                  <ul className="blog-list--2">
                    <li className="jos blog-item">
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
                        Create your digital branding with expert team member
                      </Link>
                      <Link href="/blog-details" className="blog-thumbnail">
                        <Image
                          src="/assets/img/images/th-2/blog-thumbnail-1.jpg"
                          alt="blog-thumbnail-1"
                          width="374"
                          height="268"
                          className="img-responsive"
                        />
                      </Link>

                      <p>
                        Our mission is to deliver creative and innovative that
                        solutions that help businesses succeed.
                      </p>
                      <Link
                        href="/blog-details"
                        className="btn-text-icon is-orange"
                      >
                        More Details
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="jos blog-item">
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
                        How to build up your building with top rated
                        construction company
                      </Link>
                      <Link href="/blog-details" className="blog-thumbnail">
                        <Image
                          src="/assets/img/images/th-2/blog-thumbnail-2.jpg"
                          alt="blog-thumbnail-2"
                          width="374"
                          height="268"
                          className="img-responsive"
                        />
                      </Link>

                      <p>
                        Our mission is to deliver creative and innovative that
                        solutions that help businesses succeed.
                      </p>
                      <Link
                        href="/blog-details"
                        className="btn-text-icon is-orange"
                      >
                        More Details
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="jos blog-item">
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
                        Grow your building with high safety for your next
                        generation
                      </Link>
                      <Link href="/blog-details" className="blog-thumbnail">
                        <Image
                          src="/assets/img/images/th-2/blog-thumbnail-3.jpg"
                          alt="blog-thumbnail-3"
                          width="374"
                          height="268"
                          className="img-responsive"
                        />
                      </Link>

                      <p>
                        Our mission is to deliver creative and innovative that
                        solutions that help businesses succeed.
                      </p>
                      <Link
                        href="/blog-details"
                        className="btn-text-icon is-orange"
                      >
                        More Details
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- Blog List --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Blog Section End:::... --> */}
      </main>
      {/* <!-- Main Wrapper --> */}
    </div>
  );
};

export default About;
