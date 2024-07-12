import React, { useEffect, useRef } from 'react';

const AnimatedServiceDesignSVG = () => {
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
      <path d="M32.9163 52.965C32.0198 47.586 28.4612 42.9335 23.3318 40.7155C25.6473 38.8338 27.1297 35.9649 27.1297 32.7555C27.1297 27.1015 22.5299 22.5015 16.8757 22.5015C11.2217 22.5015 6.62167 27.1013 6.62167 32.7555C6.62167 35.9647 8.10392 38.834 10.4195 40.7155C5.29302 42.9325 1.73202 47.5835 0.835018 52.965L0.0258182 57.8183C-0.144492 58.8398 0.545718 59.8058 1.56702 59.9761C2.58852 60.1466 3.55452 59.4562 3.72482 58.4349L4.53362 53.5816C5.54337 47.5236 10.7336 43.1266 16.8751 43.1266C23.0166 43.1266 28.2071 47.5235 29.2166 53.5816L30.0254 58.4349C30.1782 59.3521 30.9727 60.0021 31.8727 60.0019C33.0365 60.0019 33.9143 58.9579 33.7244 57.8183L32.9163 52.965ZM16.8758 26.2515C20.4622 26.2515 23.3798 29.1691 23.3798 32.7555C23.3798 36.3418 20.4622 39.2595 16.8758 39.2595C13.2895 39.2595 10.3718 36.3419 10.3718 32.7555C10.3718 29.1691 13.2896 26.2515 16.8758 26.2515Z"
        stroke="#FF7F50" stroke-width="2" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="12s" fill="freeze" begin="indefinite" />
      </path>
      <path d="M45 8.25474C41.2918 6.11234 36.5625 8.77429 36.5625 13.125C36.5625 18.9815 43.947 22.2135 44.2615 22.3485C44.733 22.5507 45.2672 22.5507 45.7387 22.3485C46.0531 22.2138 53.4377 18.9817 53.4377 13.125C53.4378 8.77639 48.7107 6.11104 45.0001 8.25474H45ZM45.0004 18.5422C43.2297 17.6032 40.3127 15.5479 40.3127 13.1247C40.3127 11.3972 42.4562 10.596 43.5941 11.8861C44.3402 12.7318 45.6603 12.7318 46.4062 11.8861C47.5443 10.5956 49.6877 11.3976 49.6877 13.1247C49.6875 15.5489 46.7685 17.6048 45.0004 18.5422Z"
        stroke="#FF7F50" stroke-width="2" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="12s" fill="freeze" begin="indefinite" />
      </path>
      <path d="M52.5 0H37.5C33.3645 0 30 3.36445 30 7.5V33.75C30 35.2908 31.7646 36.1766 33 35.25L40 30H52.5C56.6356 30 60 26.6356 60 22.5V7.5C60 3.36445 56.6356 0 52.5 0ZM56.25 22.5C56.25 24.5678 54.5678 26.25 52.5 26.25H39.375C38.9693 26.25 38.5744 26.3816 38.25 26.625L33.75 30L33.7502 7.5C33.7502 5.43225 35.4324 3.75 37.5002 3.75H52.5002C54.5679 3.75 56.2502 5.43225 56.2502 7.5L56.25 22.5Z"
        stroke="#FF7F50" stroke-width="2" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="12s" fill="freeze" begin="indefinite" />
      </path>
    </svg>
  );
};

export default AnimatedServiceDesignSVG;