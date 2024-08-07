import Image from 'next/image';
import CtaSection from '@/Components/CtaSection';
import Link from 'next/link';

const Blog = () => {
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
                          Our Blog
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
                        src="/assets/img/images/th-1/breadcrumb-img-8.png"
                        alt="breadcrumb-img-8"
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

        {/* <!-- ...:::Blog Section Start:::... --> */}
        <div className="section-blog">
          <div className="section-space-top">
            <div className="container">
              <div className="row gy-5">
                <div className="col-lg-8">
                  {/* <!-- Blog List --> */}
                  <ul className="blog-list--3">
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
                      <Link href="blog-details" className="blog-thumbnail">
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
                        Building Blocks: Insights from the Construction Site
                      </Link>
                      <Link href="/blog-details" className="blog-thumbnail">
                        <Image
                          src="/assets/img/images/th-2/blog-thumbnail-4.jpg"
                          alt="blog-thumbnail-4"
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
                        Blueprints & Breakthroughs: Exploring Construction
                        Innovation
                      </Link>
                      <Link href="/blog-details" className="blog-thumbnail">
                        <Image
                          src="/assets/img/images/th-2/blog-thumbnail-5.jpg"
                          alt="blog-thumbnail-5"
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
                        Constructive Chronicles: Stories from the Building Site
                      </Link>
                      <Link href="/blog-details" className="blog-thumbnail">
                        <Image
                          src="/assets/img/images/th-2/blog-thumbnail-6.jpg"
                          alt="blog-thumbnail-6"
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
                <div className="col-lg-4">
                  {/* <!-- Sidebar --> */}
                  <aside className="aside-block">
                    {/* <!-- Sidebar List --> */}
                    <ul className="sidebar-list">
                      {/* <!-- Sidebar Item --> */}
                      <li className="siderbar-item">
                        <h4 className="sidebar-title">Search</h4>
                        <form
                          action="#"
                          method="get"
                          className="position-relative"
                        >
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
                      </li>
                      {/* <!-- Sidebar Item --> */}

                      {/* <!-- Sidebar Item --> */}
                      <li className="siderbar-item">
                        <h4 className="sidebar-title">Categories</h4>
                        <ul className="category-list">
                          <li className="category-item">
                            <Link href="/blog">Digital Marketing</Link>
                            <span>09</span>
                          </li>
                          <li className="category-item">
                            <Link href="/blog">Business Policy</Link>
                            <span>12</span>
                          </li>
                          <li className="category-item">
                            <Link href="/blog">Optimization</Link>
                            <span>02</span>
                          </li>
                          <li className="category-item">
                            <Link href="/blog">Analog Marketing</Link>
                            <span>23</span>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- Sidebar Item --> */}

                      {/* <!-- Sidebar Item --> */}
                      <li className="siderbar-item">
                        <h4 className="sidebar-title">Recent Posts</h4>
                        <ul className="recent-post-list">
                          <li className="recent-post-item">
                            <Link
                              href="/blog-details"
                              className="recent-post-img-link"
                            >
                              <Image
                                src="/assets/img/images/th-1/blog-thumbnail-small-1.jpg"
                                alt="blog-thumbnail-small-1"
                                width="110"
                                height="92"
                                className="img-cover rounded-12"
                              />
                            </Link>
                            <div className="recent-post-content">
                              <Link
                                href="/blog-details"
                                className="recent-post-link"
                              >
                                Business consulting for it
                              </Link>

                              {/* <!-- Blog Post Meta --> */}
                              <div className="blog-post-meta">
                                <a
                                  href="#"
                                  className="blog-post-meta-single-block"
                                >
                                  <div className="post-meta-icon">
                                    <i className="fa-sharp fa-regular fa-calendar-range"></i>
                                  </div>
                                  09 August, 2023
                                </a>
                              </div>
                              {/* <!-- Blog Post Meta --> */}
                            </div>
                          </li>
                          <li className="recent-post-item">
                            <Link
                              href="/blog-details"
                              className="recent-post-img-link"
                            >
                              <Image
                                src="/assets/img/images/th-1/blog-thumbnail-small-2.jpg"
                                alt="blog-thumbnail-small-2"
                                width="110"
                                height="92"
                                className="img-cover rounded-12"
                              />
                            </Link>
                            <div className="recent-post-content">
                              <Link
                                href="/blog-details"
                                className="recent-post-link"
                              >
                                Financial problem for your
                              </Link>

                              {/* <!-- Blog Post Meta --> */}
                              <div className="blog-post-meta">
                                <a
                                  href="#"
                                  className="blog-post-meta-single-block"
                                >
                                  <div className="post-meta-icon">
                                    <i className="fa-sharp fa-regular fa-calendar-range"></i>
                                  </div>
                                  09 August, 2023
                                </a>
                              </div>
                              {/* <!-- Blog Post Meta --> */}
                            </div>
                          </li>
                          <li className="recent-post-item">
                            <Link
                              href="/blog-details"
                              className="recent-post-img-link"
                            >
                              <Image
                                src="/assets/img/images/th-1/blog-thumbnail-small-3.jpg"
                                alt="blog-thumbnail-small-3"
                                width="110"
                                height="92"
                                className="img-cover rounded-12"
                              />
                            </Link>
                            <div className="recent-post-content">
                              <Link
                                href="/blog-details"
                                className="recent-post-link"
                              >
                                How to grow your market
                              </Link>

                              {/* <!-- Blog Post Meta --> */}
                              <div className="blog-post-meta">
                                <a
                                  href="#"
                                  className="blog-post-meta-single-block"
                                >
                                  <div className="post-meta-icon">
                                    <i className="fa-sharp fa-regular fa-calendar-range"></i>
                                  </div>
                                  09 August, 2023
                                </a>
                              </div>
                              {/* <!-- Blog Post Meta --> */}
                            </div>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- Sidebar Item --> */}

                      {/* <!-- Sidebar Item --> */}
                      <li className="siderbar-item">
                        <h4 className="sidebar-title">Tags</h4>
                        <ul className="tag-list">
                          <li className="tag-item">
                            <a href="#" className="btn btn-tag">
                              Marketing
                            </a>
                          </li>
                          <li className="tag-item">
                            <a href="#" className="btn btn-tag">
                              Business
                            </a>
                          </li>
                          <li className="tag-item">
                            <a href="#" className="btn btn-tag">
                              Education
                            </a>
                          </li>
                          <li className="tag-item">
                            <a href="#" className="btn btn-tag">
                              Optimization
                            </a>
                          </li>
                          <li className="tag-item">
                            <a href="#" className="btn btn-sm btn-tag">
                              Creator
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- Sidebar Item --> */}
                    </ul>
                    {/* <!-- Sidebar List --> */}
                  </aside>
                  {/* <!-- Sidebar --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ...:::Blog Section End:::... --> */}
      </main>
      {/* <!-- Main Wrapper --> */}
      {/* <!-- CTA Section Start --> */}
      <CtaSection />
      {/* <!-- CTA Section Start --> */}
    </>
  );
};

export default Blog;
