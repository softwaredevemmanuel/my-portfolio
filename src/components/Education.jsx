import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      degree: 'B.Eng in Polymer Engineering',
      institution: 'Federal University of Technology Owerri',
      period: '2006 - 2013'
    },
    {
      degree: 'B.Eng in Chemical Engineering',
      institution: 'University of Lagos',
      period: '2015 - 2016'
    }
  ];

  return (
    <>
      <div className="art-section-title">
        <div className="art-title-frame">
          <h4>Education</h4>
        </div>
      </div>

      <div className="art-timeline art-gallery">
        {education.map((edu, index) => (
          <div key={index} className="art-timeline-item">
            <div className="art-timeline-mark-light"></div>
            <div className="art-timeline-mark"></div>
            <div className="art-a art-timeline-content">
              <div className="art-card-header">
                <div className="art-left-side">
                  <h5>{edu.degree}</h5>
                  <div className="art-el-suptitle mb-15">{edu.institution}</div>
                </div>
                <div className="art-right-side">
                  <span className="art-date">{edu.period}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="art-timeline-item">
          <div className="art-timeline-mark-light"></div>
          <div className="art-timeline-mark"></div>
          <div className="art-a art-timeline-content">
            <div className="art-card-header">
              <div className="art-left-side">
                <h5 className="mb-15">CERTIFICATIONS</h5>
                <h5>Software Engineering</h5>
                <div className="art-el-suptitle mb-15">Duke University Durham</div>
                <div className="text-white">In Collaboration with Coursera</div>
              </div>
              <div className="art-right-side">
                <span className="art-date">2019 - 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;