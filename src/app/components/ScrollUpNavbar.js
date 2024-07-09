'use client'
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
console.log(window.scrollY)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsVisible((isScrollingUp && currentScrollPos > 100) || currentScrollPos < 110);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`fixed w-full transition-transform duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-16'}`}>
      {/* Your navbar content */}
      <div className="bg-gray-800 text-white p-4">
        Navbar Content
      </div>
    </nav>
  );
};

export default Navbar;
