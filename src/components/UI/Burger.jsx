'use client';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import OffcanvastMenu from '../OffcanvastMenu';
import dynamic from 'next/dynamic';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <MediaQuery query="(max-width: 1024px)">
      {(isMobile) =>
        isMobile && (
          <div>
            <Hamburger toggled={isOpen} toggle={toggleMenu} color="white" />
            <OffcanvastMenu isOpen={isOpen} onClose={toggleMenu} />
          </div>
        )
      }
    </MediaQuery>
  );
};

export default Burger;
