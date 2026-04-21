import React, { useEffect, useRef } from 'react';
import './Banner.css';

function Banner() {
  const textRef = useRef(null);

  useEffect(() => {
    const words = ['ios and android applications.', 'UI mockups.', 'web interfaces.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        currentText = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (textRef.current) {
        textRef.current.textContent = currentText;
      }
      
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
        return;
      }
      
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    };
    
    typeEffect();
  }, []);

  return (
    
    <div className="row p-60-0 p-lg-30-0 p-md-15-0">
      <div className="col-lg-12">
        <div className="art-a art-banner">
          <div className="art-banner-back"></div>
          <div className="art-banner-dec"></div>
          <div className="art-banner-overlay">
            <div className="art-banner-title">
              <h1 className="mb-15">
                <span>H</span>ello World!!
              </h1>
              <div className="art-lg-text art-code mb-25">
                &lt;<i>code</i>&gt; I build/design
                <span className="txt-rotate" ref={textRef}></span>&lt;/<i>code</i>&gt;
              </div>
              <div className="art-buttons-frame">
                <a href="img/RESUME.pdf" className="art-btn art-btn-md" target="_blank" rel="noopener noreferrer">
                  <span>View My CV</span>
                </a>
                <a href="https://github.com/softwaredevemmanuel" className="art-btn art-btn-md mb-3" target="_blank" rel="noopener noreferrer">
                  <span>GitHub Profile</span>
                </a>
                <a href="https://linkedin.com/in/okereke-emmanuel-169331134" className="art-btn art-btn-md" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;