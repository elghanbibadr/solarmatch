'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return null; // This component does not render anything
};

export default AosInit;
