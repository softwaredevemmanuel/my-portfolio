import React, { useEffect, useState } from 'react';
import './Preloader.css';

function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="art-preloader">
      <div className="art-preloader-content">
        <h4>SoftwareDevEmma</h4>
        <div className="art-preloader-load">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;