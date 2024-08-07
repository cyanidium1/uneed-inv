'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Import necessary Swiper modules
import { Navigation } from 'swiper/modules';

const TestimonialSection = () => {
  return (
    <div>
      <section className="section-testimonial">
        <div className="section-space-bottom">
          <div className="container">
            <div className="row gy-4 justify-content-between align-items-center">
              <div className="col-xl-6">
                <h2 className="jos section-title">
                  What People Say About Our Construction Company
                </h2>
              </div>
              <div className="col-xl-5">
                <p className="jos section-text mt-0">
                  Construction company are responsible for overseeing & and
                  managing all aspects of a construction project. This includes
                  planning, scheduling, budgeting, and coordination of
                  resources.
                </p>
              </div>
            </div>

            <div className="row g-0 mt-5">
              <div className="col-3 d-none d-xl-block">
                <div className="testimonial-bg-orange">
                  <Image
                    src="/assets/img/images/th-1/testimonial-img.png"
                    alt="testimonial-img"
                    width="303"
                    height="429"
                  />
                </div>
              </div>
              <div className="col-12 col-xl-9">
                <div className="testimonial-area--1 relative">
                  {/* <!-- Slider main container --> */}
                  <Swiper
                    modules={[Navigation]} // Connect navigation module
                    spaceBetween={30} // Space between slides
                    loop={true}
                    navigation={{
                      prevEl: '.testimonial-button-prev',
                      nextEl: '.testimonial-button-next',
                    }}
                    className="testimonial-slider-1"
                  >
                    {/* <!-- Slides --> */}
                    <SwiperSlide>
                      <div className="testimonial-block-item--1">
                        <div className="review-star flex space-x-1">
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                        </div>
                        <blockquote>
                          Voluptatem accusantium doloremqu laudantium, totam rem
                          aperiam, eaque ipsa quae ab illo dolore inventore
                          veritatis et quasi architectoiy beatae set vitae dicta
                          sunt explicabo. Nemo enim ipsam amy dolor sit
                          voluptatem quia voluptas sit aspernatur aut oditit aut
                          fugit, 
                        </blockquote>

                        <div className="testimonial-user-info flex items-center mt-4">
                          <Image
                            src="/assets/img/images/th-1/testimonial-user-1.png"
                            alt="testimonial-user-1"
                            width="55"
                            height="56"
                          />
                          <div className="testimonial-user-content ml-4">
                            <div className="testimonial-user-name font-bold">
                              William Smith
                            </div>
                            <span className="text-gray-500">02 Days ago</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <!-- Additional Slides --> */}
                    <SwiperSlide>
                      <div className="testimonial-block-item--1">
                        <div className="review-star flex space-x-1">
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                          <Image
                            src="/assets/img/icons/icon-orange-star.svg"
                            alt="icon-orange-star"
                            width="25"
                            height="25"
                          />
                        </div>
                        <blockquote>
                          Voluptatem accusantium doloremqu laudantium, totam rem
                          aperiam, eaque ipsa quae ab illo dolore inventore
                          veritatis et quasi architectoiy beatae set vitae dicta
                          sunt explicabo. Nemo enim ipsam amy dolor sit
                          voluptatem quia voluptas sit aspernatur aut oditit aut
                          fugit, 
                        </blockquote>

                        <div className="testimonial-user-info flex items-center mt-4">
                          <Image
                            src="/assets/img/images/th-1/testimonial-user-1.png"
                            alt="testimonial-user-1"
                            width="55"
                            height="56"
                          />
                          <div className="testimonial-user-content ml-4">
                            <div className="testimonial-user-name font-bold">
                              William Smith
                            </div>
                            <span className="text-gray-500">02 Days ago</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* <!-- Navigation buttons --> */}
                  <div className="testimonial-button-block absolute bottom-0 right-0 flex space-x-2 mt-4">
                    <div className="testimonial-button-prev bg-blue-600 text-white p-2 rounded flex justify-center items-center">
                      <Image
                        src="/assets/img/icons/icon-white-long-left-arrow.svg"
                        alt="icon-white-long-left-arrow"
                        width="30"
                        height="30"
                      />
                    </div>
                    <div className="testimonial-button-next bg-blue-600 text-white p-2 rounded flex justify-center items-center">
                      <Image
                        className="cursor-pointer"
                        src="/assets/img/icons/icon-white-long-right-arrow.svg"
                        alt="icon-white-long-right-arrow"
                        width="30"
                        height="30"
                      />
                    </div>
                  </div>

                  <div className="triangle-tl-shape"></div>
                  <div className="triangle-br-shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
