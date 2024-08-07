import Image from 'next/image';
import Link from 'next/link';
const CtaSection = () => {
  return (
    <>
      <section className="section-cta">
        <div className="container">
          <div className="cta-block background-blue">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center">
                  <h2 className="text-white">
                    Are You Ready To Get Started Your Project With Us?
                  </h2>
                  <p className="text-white mt-2 mb-4">
                    Everything we create building with our expert team member
                    from 2000.
                  </p>
                  <Link href="/projects" className="btn btn-white">
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="cta-image-block">
              <Image
                src="/assets/img/images/th-3/cta-image.png"
                alt="cta-image"
                width="261"
                height="336"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
