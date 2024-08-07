import CtaSection from '@/Components/CtaSection';
import Image from 'next/image';
import Link from 'next/link';

const ProjectDetails = () => {
  return (
    <div>
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
                          Project Details
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
                        src="/assets/img/images/th-1/breadcrumb-img-5.png"
                        alt="breadcrumb-img-5"
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

        {/* <!-- ...:::Service Details Section Start:::... --> */}
        <section className="section-service-details">
          <div className="section-space-top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-12 col-md-6 col-lg-7 col-xl-9">
                  <Image
                    src="/assets/img/images/th-1/project-details-hero-img.jpg"
                    alt="service-details-hero-img"
                    width="984"
                    height="523"
                    className="img-cover"
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-3">
                  <div className="project-details-info">
                    <h3>Project Information</h3>
                    <ul className="project-details-info-list">
                      <li>
                        <strong>Client:</strong> William John
                      </li>
                      <li>
                        <strong>Start Date:</strong> 12 June 2023
                      </li>
                      <li>
                        <strong>End Date:</strong> William John
                      </li>
                      <li>
                        <strong>Category:</strong> Business Consulting
                      </li>
                      <li>
                        <strong>Website:</strong> www.konsta.com
                      </li>
                      <li>
                        <strong>Organized By:</strong> Konsta
                      </li>
                      <li>
                        <strong>Location:</strong> 250 Main Street, 67/T, New
                        York, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row gy-4 mt-2">
                <div className="col-lg-6 col-xl-7">
                  <div className="text-rich-text">
                    <h2>Develop Comprehensive</h2>
                    <p>
                      Wed a little help from our friends from time to time.
                      Although we offer the one-stop convenience of annery
                      integrated range of legal, financial services under one
                      roof, there are occasions when our clients areaneed
                      specia- list advice beyond the scope of our own expertise.
                    </p>
                    <p>
                      Although we offer the one-stop convenience of annery
                      integrated range of legal, financial services under one
                      roof, there are occasions when our clients areaneed
                      specia- list advice beyond the scope of our own expertise.
                      That’s why we’ve developed close working relationships
                      with a number of strategic partner.
                    </p>
                    <p>
                      Although we offer the one-stop convenience of annery
                      integrated range of legal, financial services under one
                      roof, there are occasions when our clients areaneed
                      specia- list advice beyond.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                  {/* <!-- Contant List --> */}
                  <ul className="content-list">
                    <li className="jos">
                      <h3>
                        <Image
                          src="/assets/img/icons/icon-orange-check.svg"
                          alt="icon-orange-check"
                          width="29"
                          height="29"
                        />
                        SEO & SMM Services
                      </h3>
                      <p>
                        Build long-term relationships with your clients based on
                        a trust, open communication, and mutual.
                      </p>
                    </li>
                    <li className="jos">
                      <h3>
                        <Image
                          src="/assets/img/icons/icon-orange-check.svg"
                          alt="icon-orange-check"
                          width="29"
                          height="29"
                        />
                        User Experience
                      </h3>
                      <p>
                        Build long-term relationships with your clients based on
                        a trust, open communication, and mutual.
                      </p>
                    </li>
                    <li className="jos">
                      <h3>
                        <Image
                          src="/assets/img/icons/icon-orange-check.svg"
                          alt="icon-orange-check"
                          width="29"
                          height="29"
                        />
                        Engagement Analysis
                      </h3>
                      <p>
                        Build long-term relationships with your clients based on
                        a trust, open communication, and mutual.
                      </p>
                    </li>
                  </ul>
                  {/* <!-- Contant List --> */}
                </div>
              </div>
              <div className="row gy-4">
                <div className="col-12">
                  <div className="content-2-grid-reverse gap-60 mt-5">
                    <div className="default-content-block">
                      <div className="section-block">
                        <h2>Modern Service Standard</h2>
                        <p className="section-text">
                          Globally optimize highly efficient solution whereas
                          open-source application. Completely strategize quality
                          internal or “organic” sources for virtual e-business.
                          Phosfluorescently re-engineer enterprise markets via
                          value-added networks.{' '}
                        </p>
                      </div>

                      <ul className="content-list-2">
                        <li>Vivamus ac dolor dapibus, pharetra lorem ac</li>
                        <li>
                          Donec purus mi, commodo id commodo vel, imperdiet ut
                          mauris.
                        </li>
                        <li>
                          Mauris a nibh sed libero fermentum aliquet. Quisque
                          sit amet faucibus magna.
                        </li>
                        <li>
                          Pellentesque aliquet est massa, sit amet tempor mi
                          auctor nec.
                        </li>
                      </ul>
                    </div>
                    <div className="default-img-block">
                      <Image
                        src="/assets/img/images/th-1/service-details-inner-img-2.jpg"
                        alt="service-details-inner-img-1"
                        width="553"
                        height="449"
                        className="img-fluid"
                      />

                      <div className="position-absolute d-flex align-items-center justify-content-center">
                        <Image
                          src="/assets/img/abstract/video-button-outer.svg"
                          alt="video-button-outer"
                          width="128"
                          height="128"
                          className="video-button-outer"
                        />

                        <a
                          data-fslightbox="gallery"
                          href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                          className="video-btn"
                          aria-label="video-play"
                        >
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Service Details Section End:::... --> */}
      </main>
      {/* <!-- Main Wrapper --> */}

      {/* <!-- CTA Section Start --> */}
      <CtaSection />
      {/* <!-- CTA Section Start --> */}
    </div>
  );
};

export default ProjectDetails;
