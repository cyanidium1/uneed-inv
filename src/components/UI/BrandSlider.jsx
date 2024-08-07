'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const BrandSlider = () => {
  const brands = [
    {
      src: '/assets/img/images/th-1/brand-1.png',
      alt: 'brand-1',
      width: 145,
      height: 30,
    },
    {
      src: '/assets/img/images/th-1/brand-2.png',
      alt: 'brand-2',
      width: 93,
      height: 30,
    },
    {
      src: '/assets/img/images/th-1/brand-3.png',
      alt: 'brand-3',
      width: 112,
      height: 30,
    },
    {
      src: '/assets/img/images/th-1/brand-4.png',
      alt: 'brand-4',
      width: 77,
      height: 30,
    },
    {
      src: '/assets/img/images/th-1/brand-5.png',
      alt: 'brand-5',
      width: 112,
      height: 30,
    },
    {
      src: '/assets/img/images/th-1/brand-6.png',
      alt: 'brand-6',
      width: 116,
      height: 30,
    },
    {
      src: '/assets/img/images/th-1/brand-7.png',
      alt: 'brand-7',
      width: 157,
      height: 30,
    },
    {
      src: '/assets/img/images/th-1/brand-8.png',
      alt: 'brand-8',
      width: 189,
      height: 30,
    },
  ];

  return (
    <div className="overflow-hidden">
      <Marquee
        speed={50}
        pauseOnHover={true}
        autoFill={true}
        className="flex items-center"
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-6" // Используем mx-4 для создания отступов между изображениями
            style={{ marginRight: '130px' }} // Задаем фиксированное расстояние между изображениями
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={brand.height}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandSlider;
