import React, { useState, useEffect } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(2);
  
  const testimonials = [
    {
      name: 'Mr Peter',
      title: 'Developer',
      company: 'Managing Director Upskill Ehizua Hub',
      text: '"An exceptional fullstack developer, Mr Emmanuel has consistently impressed us with their expertise and dedication. His exceptional technical expertise, problem-solving skills, and dedication have been instrumental in delivering top-notch projects. He consistently exceed expectations and contribute significantly to our success."',
      image: 'img/testimonials/Peter.jpeg',
      rating: 4
    },
    {
      name: 'Mr Matthias Ehizua A.',
      title: 'CEO Founder',
      company: 'Ehizua Hub',
      text: '"The epitome of excellence! The best instructor of the year 2022 Ehizua Hub. His dedication, expertise, and outstanding problem-solving skills have significantly contributed to our success. A true asset to the team, he consistently go above and beyond, exceeding expectations. Well-deserved!"',
      image: 'img/testimonials/Mathaiahs.webp',
      rating: 5
    },
    {
      name: 'Mrs Taiwo',
      title: 'Managing Director',
      company: 'Delphi Int School',
      text: '"Mr Emmanuel is an exceptional STEM teacher who brings passion, expertise, and innovation to the classroom. His dedication to inspiring students in science, technology, engineering, and math is unparalleled. His teaching methods foster creativity, critical thinking, and problem-solving skills, preparing students for success in the STEM field."',
      image: 'img/testimonials/images.jpeg',
      rating: 5
    }
  ];

  // Handle responsive slides per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerPage(1);
      } else {
        setSlidesPerPage(2);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Group testimonials based on slidesPerPage
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += slidesPerPage) {
    groupedTestimonials.push(testimonials.slice(i, i + slidesPerPage));
  }

  return (
    <div className="">
      <div className="row">
        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Recommendations</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="manual-carousel">
            <button className="carousel-nav prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="carousel-container">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {groupedTestimonials.map((group, groupIndex) => (
                  <div key={groupIndex} className="carousel-slide-group">
                    {group.map((testimonial, index) => (
                      <div key={index} className="carousel-slide">
                        <div className="art-a art-testimonial">
                          <div className="testimonial-body">
                            <img className="art-testimonial-face" src={testimonial.image} alt={testimonial.name} />
                            <h5>{testimonial.name} | {testimonial.title}</h5>
                            <div className="art-el-suptitle mb-15">{testimonial.company}</div>
                            <div className="mb-15">{testimonial.text}</div>
                          </div>
                          <div className="art-testimonial-footer">
                            <div className="art-left-side">
                              <ul className="art-star-rate">
                                {[...Array(5)].map((_, i) => (
                                  <li key={i} className={i < testimonial.rating ? '' : 'art-empty-item'}>
                                    <i className="fas fa-star"></i>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <button className="carousel-nav next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="carousel-dots">
            {groupedTestimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;