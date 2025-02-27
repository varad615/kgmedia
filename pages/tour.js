import { useEffect } from 'react';

const Tour = () => {
  useEffect(() => {
    // Load the krpano script
    const krpanoScript = document.createElement('script');
    krpanoScript.src = '/krpano/tour.js';
    document.body.appendChild(krpanoScript);

    return () => {
      // Clean up the script if the component is unmounted
      document.body.removeChild(krpanoScript);
    };
  }, []);

  return (
    <div>
      <iframe
        src="/krpano/tour.html"
        width="100%"
        height="100vh"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Tour;
