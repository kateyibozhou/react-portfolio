import React, { useEffect, useRef } from 'react';

const AnimatedServiceSVG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const paths = svg.querySelectorAll('path animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          paths.forEach(path => path.beginElement());
          observer.unobserve(svg);
        }
      });
    });

    observer.observe(svg);

    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={svgRef} width="134" height="60" viewBox="0 0 134 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.91825 27.5L4.17347 27.07C4.17379 27.0702 4.17411 27.0704 4.17442 27.0706L4.17347 27.07L3.91825 27.5ZM3.91825 27.5L4.17347 27.93C4.17379 27.9298 4.1741 27.9296 4.17442 27.9294L4.17347 27.93L3.91825 27.5ZM51.7574 18.9848C51.7701 18.9926 51.7828 19.0003 51.7955 19.0078L66.1022 27.5L51.7955 35.9922C51.7828 35.9997 51.7701 36.0074 51.7574 36.0152L35.5 46.0612L19.2426 36.0152C19.2299 36.0074 19.2172 35.9997 19.2045 35.9922L4.89782 27.5L19.2045 19.0078C19.2172 19.0003 19.2299 18.9926 19.2426 18.9848L35.5 8.93879L51.7574 18.9848ZM66.8265 27.07L66.8254 27.0707L66.8265 27.07Z" stroke="#FF7F50" stroke-width="5" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="12s" fill="freeze" begin="indefinite" />
      </path>
      <path d="M66.9183 27.5L67.1735 27.07C67.1738 27.0702 67.1741 27.0704 67.1744 27.0706L67.1735 27.07L66.9183 27.5ZM66.9183 27.5L67.1735 27.93C67.1738 27.9298 67.1741 27.9296 67.1744 27.9294L67.1735 27.93L66.9183 27.5ZM114.757 18.9848C114.77 18.9926 114.783 19.0003 114.796 19.0078L129.102 27.5L114.796 35.9922C114.783 35.9997 114.77 36.0074 114.757 36.0152L98.5 46.0612L82.2426 36.0152C82.2299 36.0074 82.2172 35.9997 82.2045 35.9922L67.8978 27.5L82.2045 19.0078C82.2172 19.0003 82.2299 18.9926 82.2426 18.9848L98.5 8.93879L114.757 18.9848ZM129.827 27.07L129.825 27.0707L129.827 27.07Z" stroke="#FF7F50" stroke-width="5" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="12s" fill="freeze" begin="indefinite" />
      </path>
    </svg>
  );
};

export default AnimatedServiceSVG;

