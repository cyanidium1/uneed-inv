import Image from 'next/image';
import CtaSection from '@/Components/CtaSection';
import Link from 'next/link';
const BlogDetails = () => {
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
                          Blog Details
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
                        src="/assets/img/images/th-1/breadcrumb-img-9.png"
                        alt="breadcrumb-img-9"
                        width={748}
                        height={395}
                        className="img-responsive"
                      />
                      <Image
                        src="/assets/img/abstract/doodles.svg"
                        alt="doodles"
                        width={124}
                        height={86}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bradecrumb-shape">
                <Image
                  src="/assets/img/abstract/breadcrumb-bg-shape.svg"
                  alt="breadcrumb-bg-shape"
                  width={203}
                  height={232}
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ...:::Breadcrumb Section End:::... --> */}

        {/* <!-- ...:::Blog Details Section Start:::... --> */}
        <section className="section-blog">
          <div className="section-space-top">
            <div className="container">
              <div className="row gy-5">
                <div className="col-lg-8">
                  {/* <!-- Blog Details Hero Image --> */}
                  <div className="mb-4">
                    <Image
                      src="/assets/img/images/th-1/blog-details-img.jpg"
                      alt="blog-details-img"
                      width={872}
                      height={453}
                      className="img-cover rounded-12"
                    />
                  </div>
                  {/* <!-- Blog Details Hero Image --> */}

                  {/* <!-- Blog Post Meta --> */}
                  <div className="blog-post-meta">
                    <a href="#">
                      <Image
                        src="/assets/img/icons/icon-orange-user.svg"
                        alt="icon-orange-user"
                        width={16}
                        height={16}
                      />
                      Admin
                    </a>
                    <a href="#">
                      <Image
                        src="/assets/img/icons/icon-orange-chat.svg"
                        alt="icon-orange-chat"
                        width={16}
                        height={16}
                      />
                      Comment
                    </a>
                  </div>
                  {/* <!-- Blog Post Meta --> */}

                  {/* <!-- Blog Title --> */}
                  <h2 className="my-4">
                    Super Bowl ad features a striking visual full self-driving
                    for you
                  </h2>
                  {/* <!-- Blog Title --> */}

                  {/* <!-- Blog Details --> */}
                  <div className="text-rich-text">
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
                    <p>
                      Although we offer the one-stop convenience of annery
                      integrated range of legal, financial services under one
                      roof, there are occasions when our clients areaneed
                      specia- list advice beyond the scope of our own expertise.
                      That’s why we’ve developed close working relationships
                      with a number of strategic partner.
                    </p>
                    <div className="row align-items-center gx-5">
                      <div className="col-lg-6">
                        <div className="text-center">
                          <Image
                            src="/assets/img/images/th-1/blog-inner-img.jpg"
                            alt="blog-inner-img"
                            width={424}
                            height={401}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h3>
                          As global macroeconomic conditions worsen funding
                          slowdown continues
                        </h3>
                        <p>
                          Although we offer the one-stop convenience of annery
                          integrated range of legal, financial services under
                          one roof, there are occasions when our clients
                          areaneed specia- list advice beyond the scope of our
                          own
                        </p>
                        <ul className="content-list-2">
                          <li>
                            Totam nihil sequi ipsum illo perspiciatis temporibus
                          </li>
                          <li>
                            Sotam reiciendis quam minus inventore sint rem{' '}
                          </li>
                          <li>
                            Motam reiciendis quam minus inventore sint rem
                          </li>
                          <li>
                            Aaepe aliquid voluptate dicta fuga dolor error
                          </li>
                        </ul>
                      </div>
                    </div>
                    <figure>
                      <blockquote>
                        “Step into the dynamic realm of business innovation with
                        our insightful blog, a gateway to the ever-evolving
                        landscape of entrepreneurship. Immerse yourself in the
                        journey of disruption and creativity as we navigate
                        through industry”
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="blockquote-footer">John Smith</span>
                          <Image
                            src="/assets/img/icons/icon-blue-square-quote.svg"
                            alt="icon-yellow-square-quote"
                            width={30}
                            height={30}
                          />
                        </div>
                      </blockquote>
                    </figure>

                    <h4>
                      The Consulting Process Unveiled Initial Consultation
                    </h4>
                    <p>
                      Although we offer the one-stop convenience of annery
                      integrated range of legal, financial services under one
                      roof, there are occasions when our clients areaneed
                      specia- list advice beyond the scope of our own
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
                  {/* <!-- Blog Details --> */}

                  {/* <!-- Blog Comment --> */}
                  <div className="mt-5">
                    <h3 className="section-title mb-4">Comments 02</h3>

                    <ul className="comment-list">
                      <li className="comment-item">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div className="d-flex align-items-center column-gap-3">
                            <div className="comment-user-img">
                              <Image
                                src="/assets/img/images/th-1/comment-user-1.jpg"
                                alt="comment-user-1"
                                width={60}
                                height={60}
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <div className="comment-user-name">
                                Elizabeth White
                              </div>
                              <span className="comment-user-date">
                                09 Days ago
                              </span>
                            </div>
                          </div>
                          <button className="btn btn-sm btn-primary">
                            Reply
                          </button>
                        </div>
                        <p>
                          Transfer details Choose the amount you want to send
                          abroad, select how your receiver wants to get the
                          money, and lastly, how you want to pay. You will
                          always see our fees upfront,
                        </p>

                        <ul className="comment-reply">
                          <li className="comment-item comment-reply-item">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <div className="d-flex align-items-center column-gap-3">
                                <div className="comment-user-img">
                                  <Image
                                    src="/assets/img/images/th-1/comment-user-2.jpg"
                                    alt="comment-user-2"
                                    width={60}
                                    height={60}
                                    className="rounded-circle"
                                  />
                                </div>
                                <div>
                                  <div className="comment-user-name">
                                    Laura Martinez
                                  </div>
                                  <span className="comment-user-date">
                                    09 Days ago
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p>
                              Bushwick post-ironic af fixie, wayfarers kombucha
                              direct trade air plant meditation palo santo
                              asymmetrical salvia blue bottle. 3 wolf moon
                              subway tile fam,
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Blog Comment --> */}

                  {/* <!-- Blog Comment Form --> */}
                  <div className="mt-5">
                    <h3 className="section-title mb-4">Leave A Comment</h3>

                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group mb-4">
                            <label htmlFor="name">Name*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-4">
                            <label htmlFor="email">Email*</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="message">Message*</label>
                        <textarea
                          id="message"
                          className="form-control"
                          rows="4"
                          placeholder="Your Comment"
                        ></textarea>
                      </div>
                      <div className="form-group mb-4">
                        <button type="submit" className="btn btn-primary">
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <!-- Blog Comment Form --> */}
                </div>
                <div className="col-lg-4">
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
        </section>
        {/* <!-- ...:::Blog Details Section End:::... --> */}
      </main>
      {/* <!-- CTA Section Start --> */}
      <CtaSection />
      {/* <!-- CTA Section Start --> */}
    </>
  );
};

export default BlogDetails;
