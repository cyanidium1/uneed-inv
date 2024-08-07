import CtaSection from '@/Components/CtaSection';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
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
                          Our Projects
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
                        src="/assets/img/images/th-1/breadcrumb-img-4.png"
                        alt="breadcrumb-img-4"
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

        {/* <!-- ...:::Project Section Start:::... --> */}
        <section className="section-project">
          <div className="section-space-top">
            <div className="container-custom">
              <div className="row">
                <div className="col-12">
                  {/* <!-- Project List --> */}
                  <ul className="project-list--3">
                    <li className="project-single-item">
                      <Image
                        src="/assets/img/images/th-3/projects-img-1.jpg"
                        alt="projects-img-1"
                        width="536"
                        height="548"
                        className="img-responsive"
                      />

                      <div className="project-slider-content">
                        <div className="project-tags mt-lg-5">
                          <Link href="/projects" className="project-tag-link">
                            House Extension
                          </Link>
                          <Link href="/projects" className="project-tag-link">
                            Elicitation
                          </Link>
                        </div>
                        <h3 className="text-white">
                          Kitchen remodeling in Hollywood Hills, CA
                        </h3>
                        <div className="horizontal-line is-2 my-3"></div>
                        <p className="text-white opcity-75">
                          A construction company is a business entity that
                          specializes in the planning, development.
                        </p>
                      </div>

                      <Link
                        href="/project-details"
                        className="project-round-button"
                      >
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="project-single-item">
                      <Image
                        src="/assets/img/images/th-3/projects-img-2.jpg"
                        alt="projects-img-2"
                        width="536"
                        height="548"
                        className="img-responsive"
                      />

                      <div className="project-slider-content">
                        <div className="project-tags mt-lg-5">
                          <Link href="/projects" className="project-tag-link">
                            House Extension
                          </Link>
                          <Link href="/projects" className="project-tag-link">
                            Elicitation
                          </Link>
                        </div>
                        <h3 className="text-white">
                          Cascades Casino Delta Construction
                        </h3>
                        <div className="horizontal-line is-2 my-3"></div>
                        <p className="text-white opacity-75">
                          A construction company is a business entity that
                          specializes in the planning, development.
                        </p>
                      </div>

                      <Link
                        href="/project-details"
                        className="project-round-button"
                      >
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="project-single-item">
                      <Image
                        src="/assets/img/images/th-3/projects-img-3.jpg"
                        alt="projects-img-3"
                        width="536"
                        height="548"
                        className="img-responsive"
                      />

                      <div className="project-slider-content">
                        <div className="project-tags mt-lg-5">
                          <Link href="/projects" className="project-tag-link">
                            House Extension
                          </Link>
                          <Link href="/projects" className="project-tag-link">
                            Elicitation
                          </Link>
                        </div>
                        <h3 className="text-white">
                          Home Roffing in Hollywood Hills, CA
                        </h3>
                        <div className="horizontal-line is-2 my-3"></div>
                        <p className="text-white opacity-75">
                          A construction company is a business entity that
                          specializes in the planning, development.
                        </p>
                      </div>

                      <Link
                        href="/project-details"
                        className="project-round-button"
                      >
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="project-single-item">
                      <Image
                        src="/assets/img/images/th-3/projects-img-4.jpg"
                        alt="projects-img-4"
                        width="536"
                        height="548"
                        className="img-responsive"
                      />

                      <div className="project-slider-content">
                        <div className="project-tags mt-lg-5">
                          <Link href="/projects" className="project-tag-link">
                            Design
                          </Link>
                          <Link href="/projects" className="project-tag-link">
                            Architecture
                          </Link>
                        </div>
                        <h3 className="text-white">
                          Tea Forest Company’s Interior Design
                        </h3>
                        <div className="horizontal-line is-2 my-3"></div>
                        <p className="text-white opacity-75">
                          A construction company is a business entity that
                          specializes in the planning, development.
                        </p>
                      </div>

                      <Link
                        href="/project-details"
                        className="project-round-button"
                      >
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="project-single-item">
                      <Image
                        src="/assets/img/images/th-3/projects-img-5.jpg"
                        alt="projects-img-5"
                        width="536"
                        height="548"
                        className="img-responsive"
                      />

                      <div className="project-slider-content">
                        <div className="project-tags mt-lg-5">
                          <Link href="/projects" className="project-tag-link">
                            Planning
                          </Link>
                          <Link href="/projects" className="project-tag-link">
                            Architecture
                          </Link>
                        </div>
                        <h3 className="text-white">
                          Planning For A Interior & Architecture
                        </h3>
                        <div className="horizontal-line is-2 my-3"></div>
                        <p className="text-white opacity-75">
                          A construction company is a business entity that
                          specializes in the planning, development.
                        </p>
                      </div>

                      <Link
                        href="/project-details"
                        className="project-round-button"
                      >
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="project-single-item">
                      <Image
                        src="/assets/img/images/th-3/projects-img-6.jpg"
                        alt="projects-img-6"
                        width="536"
                        height="548"
                        className="img-responsive"
                      />

                      <div className="project-slider-content">
                        <div className="project-tags mt-lg-5">
                          <Link href="/projects" className="project-tag-link">
                            Repair
                          </Link>
                          <Link href="/projects" className="project-tag-link">
                            Construction
                          </Link>
                        </div>
                        <h3 className="text-white">
                          Home Design in Hollywood Hills, CA
                        </h3>
                        <div className="horizontal-line is-2 my-3"></div>
                        <p className="text-white opacity-75">
                          A construction company is a business entity that
                          specializes in the planning, development.
                        </p>
                      </div>

                      <Link
                        href="/project-details"
                        className="project-round-button"
                      >
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- Project List --> */}

                  {/* <!-- Pagination --> */}
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- Pagination --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Project Section End:::... --> */}
      </main>
      {/* <!-- Main Wrapper --> */}

      {/* <!-- CTA Section Start --> */}
      <CtaSection />
      {/* <!-- CTA Section Start --> */}
    </div>
  );
};

export default Projects;
