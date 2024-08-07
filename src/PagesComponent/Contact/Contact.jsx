import Image from 'next/image';
import CtaSection from '@/Components/CtaSection';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
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
                          Contact Us
                        </li>
                      </ol>
                    </nav>
                    <div className="breadcrumb-content">
                      <h2 className="text-white">
                        Pinnacle Innovations Builders: Redefining Construction
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
                        src="/assets/img/images/th-1/breadcrumb-img-12.png"
                        alt="breadcrumb-img-12"
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

        {/* <!-- ...:::Contact Form Section Start:::... --> */}
        <section className="section-contact-form">
          <div className="section-space">
            <div className="container ">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <Image
                    src="/assets/img/images/th-1/contact.jpg"
                    alt="contact"
                    width="614"
                    height="685"
                    className="img-responsive"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="section-block">
                    <h2>Contact With Us</h2>
                  </div>

                  {/* <!-- Contact Form --> */}
                  <form
                    action="https://formspree.io/f/{form_id}"
                    method="get"
                    className="form-form"
                  >
                    <div className="form-field-wrapper">
                      <div className="row align-items-center gy-3">
                        <div className="col-lg-3 col-xxl-2">
                          <label htmlFor="contact-name" className="form-label">
                            Your name
                          </label>
                        </div>
                        <div className="col-lg-9 col-xxl-10">
                          <input
                            type="text"
                            id="contact-name"
                            name="contact-name"
                            className="form-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="row align-items-center gy-3">
                        <div className="col-lg-3 col-xxl-2">
                          <label htmlFor="contact-email" className="form-label">
                            Your email
                          </label>
                        </div>
                        <div className="col-lg-9 col-xxl-10">
                          <input
                            type="email"
                            id="contact-email"
                            name="contact-email"
                            className="form-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="row align-items-center gy-3">
                        <div className="col-lg-3 col-xxl-2">
                          <label htmlFor="contact-tel" className="form-label">
                            Phone
                          </label>
                        </div>
                        <div className="col-lg-9 col-xxl-10">
                          <input
                            type="tel"
                            id="contact-tel"
                            name="contact-tel"
                            className="form-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="row align-items-center gy-3">
                        <div className="col-lg-3 col-xxl-2">
                          <label htmlFor="contact-site" className="form-label">
                            Website
                          </label>
                        </div>
                        <div className="col-lg-9 col-xxl-10">
                          <input
                            type="text"
                            id="contact-site"
                            name="contact-site"
                            className="form-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="row align-items-center gy-3">
                        <div className="col-lg-3 col-xxl-2">
                          <label
                            htmlFor="contact-interest"
                            className="form-label"
                          >
                            Interested
                          </label>
                        </div>
                        <div className="col-lg-9 col-xxl-10">
                          <select
                            name="contact-interest"
                            id="contact-interest"
                            className="form-input"
                          >
                            <option value="web-development">
                              Web Development
                            </option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="digital-marketing">
                              Digital Marketing
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row align-items-start gy-3">
                        <div className="col-lg-3 col-xxl-2">
                          <label
                            htmlFor="contact-message"
                            className="form-label"
                          >
                            Message
                          </label>
                        </div>
                        <div className="col-lg-9 col-xxl-10">
                          <textarea
                            name="contact-message"
                            id="contact-message"
                            className="form-input is-text-area"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="row align-items-start gy-3">
                        <div className="col offset-lg-3 offset-xl-2">
                          <button type="submit" className="btn btn-primary">
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* <!-- Contact Form --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Contact Form Section End:::... --> */}

        {/* <!-- ...:::Contact Info Section Start:::... --> */}
        <section className="section-contact-info">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-4">
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <h3>Contact Us</h3>
                    <ul className="contact-info-meta-list">
                      <li>
                        <strong>Toll Free:</strong>{' '}
                        <a href="tel:+0123456789">+012 345 6789</a>
                      </li>
                      <li>
                        <strong>Email Us:</strong>{' '}
                        <a href="mailto:yourmail@mail.com">yourmail@mail.com</a>
                      </li>
                      <li>
                        <strong>Fax Number: </strong>{' '}
                        <a href="tel:+0123456789">+012 345 6789</a>
                      </li>
                    </ul>
                  </li>
                  <li className="contact-info-item">
                    <h3>Our Address</h3>
                    <ul className="contact-info-meta-list">
                      <li>
                        <address>
                          Yukon, Inc.201 West Hilton Street, Suite ZY
                          113Fayetteville, NY 13066-1313
                        </address>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-xl-8">
                <iframe
                  className="g-map-block"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Contact Info Section End:::... --> */}
      </main>
      {/* <!-- Main Wrapper --> */}
      {/* 
    <!-- CTA Section Start --> */}
      <CtaSection />
      {/* <!-- CTA Section Start --> */}
    </>
  );
};

export default Contact;
