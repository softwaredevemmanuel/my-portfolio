import React from 'react';
import './WorkHistory.css';

function WorkHistory() {
  const workHistory = [
    {
      title: 'Software Engineer',
      company: 'Ehizua Hub',
      period: 'May 2021 – Present',
      description: [
        'Built and developed a platforms which uses extensible plugin architecture to handle credential management for endpoints requiring authorization, signing of request parsing the data to a structured format.',
        'The platform handles scheduling of offline execution of task, asynchronous task management, script development environment, dynamic deployment of task, temporary storage of result data and proactive monitoring and alerting.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Supreme House',
      period: 'Aug 2020 – May 2021',
      description: [
        'Designed and develop multiple web-based applications to manage orders, inventory, vendors using HTML, CSS, React, Express as well as MongoDB',
        'Developed and maintained database modules including stored procedures, triggers and views.',
        'Created multiple database-driven JSP/HTML/JavaScript application which reduced development time by more than 50%'
      ]
    },
    {
      title: 'STEM ROBOTICS TUTOR',
      company: 'Drobots Nigeria',
      period: 'Apr 2017 – Aug 2020',
      description: [
        'Experienced STEM Robotics tutor with a passion for inspiring students to explore the exciting world of robotics. Skilled in designing engaging curriculum, fostering hands-on learning experiences, and cultivating problem-solving skills.'
      ]
    }
  ];

  return (
    <>
      <div className="art-section-title">
        <div className="art-title-frame">
          <h4>Work History</h4>
        </div>
      </div>

      <div className="art-timeline">
        {workHistory.map((work, index) => (
          <div key={index} className="art-timeline-item">
            <div className="art-timeline-mark-light"></div>
            <div className="art-timeline-mark"></div>
            <div className="art-a art-timeline-content">
              <div className="art-card-header">
                <div className="art-left-side">
                  <h5>{work.title}</h5>
                  <div className="art-el-suptitle mb-15">{work.company}</div>
                </div>
                <div className="art-right-side">
                  <span className="art-date">{work.period}</span>
                </div>
              </div>
              <p>
                {work.description.map((item, i) => (
                  <React.Fragment key={i}>
                    • {item}<br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkHistory;