'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const AwardSlider = () => {
  const awards = [
    {
      src: '/assets/img/images/th-2/award-img-1.png',
      alt: 'award-img-1',
      width: 94,
      height: 100,
    },
    {
      src: '/assets/img/images/th-2/award-img-2.png',
      alt: 'award-img-2',
      width: 121,
      height: 100,
    },
    {
      src: '/assets/img/images/th-2/award-img-3.png',
      alt: 'award-img-3',
      width: 181,
      height: 100,
    },
    {
      src: '/assets/img/images/th-2/award-img-4.png',
      alt: 'award-img-4',
      width: 146,
      height: 100,
    },
    {
      src: '/assets/img/images/th-2/award-img-5.png',
      alt: 'award-img-5',
      width: 105,
      height: 100,
    },
    {
      src: '/assets/img/images/th-2/award-img-6.png',
      alt: 'award-img-6',
      width: 121,
      height: 100,
    },
    {
      src: '/assets/img/images/th-2/award-img-7.png',
      alt: 'award-img-7',
      width: 150,
      height: 100,
    },
    {
      src: '/assets/img/images/th-2/award-img-8.png',
      alt: 'award-img-8',
      width: 120,
      height: 100,
    },
  ];

  return (
    <div>
      <section className="section-award-slider">
        <div className="section-space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="section-block">
                  <h2 className="section-title text-center">
                    Award Winning Company
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Slider main container --> */}
          <div className="award-slider mt-4">
            <Marquee
              speed={50}
              pauseOnHover={true}
              autoFill={true}
              className="flex items-center"
            >
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6"
                  style={{ marginRight: '130px' }}
                >
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={award.width}
                    height={award.height}
                    className="img-fluid"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardSlider;
