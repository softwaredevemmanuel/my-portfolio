import React from 'react';
import './Sidebar.css';
import profile from '../assets/48366297.jpeg';

function Sidebar() {
  // const skills = [
  //   { name: 'Python', value: 90 },
  //   { name: 'Go Lang', value: 85 },
  //   { name: 'JavaScript', value: 88 }
    
  // ];

  const knowledgeList = [
    'Python', 'Go Lang', 'JavaScript', 'C#', 'DevOps', 'Node Js', 'Fast API', 'React', 'Docker', 'Git', 'AWS', 'Selenium', 'Testing', 'Postman', 'HTML5', 'CSS', 'Tailwind', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Linux', 'Agile Methodologies', 'Scrum', 'CI/CD', 'Microservices', 'RESTful APIs', 'GraphQL', 'Cloud Computing', 'Serverless Architecture', 'Unit Testing', 'Integration Testing', 'Performance Optimization', 'Code Review', 'Version Control (Git)', 'Continuous Integration/Continuous Deployment (CI/CD)', 'Containerization (Docker)', 'Orchestration (Kubernetes)', 'Monitoring and Logging', 'Security Best Practices', 'Agile Methodologies (Scrum, Kanban)', 'Project Management Tools (Jira, Trello)', 'Collaboration Tools (Slack, Microsoft Teams)', 'Problem-Solving Skills', 'Communication Skills'
  ];

  return (
    <div className="art-info-bar">
      <div className="art-info-bar-frame">
        {/* Fixed Header Section - This part stays still */}
        <div className="art-info-bar-header-fixed">
          <div className="art-info-bar-header">
            <div className="art-info-bar-btn">
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>

          <div className="art-header">
            <div className="art-avatar">
              <a href="img/face-11.JPG" className="art-avatar-curtain">
                <img src={profile} alt="avatar" />
                <i className="fas fa-expand"></i>
              </a>
              <div className="art-lamp-light">
                <div className="art-available-lamp"></div>
              </div>
            </div>
            <h5 className="art-name mb-10">
              <a href="index.html">Okereke Emmanuel</a>
            </h5>
            <div className="art-sm-text">
              Managing Director / Software Engineer <br />Ehizua Hub Nigeria
            </div>
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div id="scrollbar2" className="art-scroll-frame">
          <div className="art-table p-15-15 shadow-lg">
            <ul>
              <li><h6>Country:</h6><span>Nigeria</span></li>
              <li><h6>City:</h6><span>Lagos</span></li>
              <li><h6>Working:</h6><span>Remotely</span><br /><span> / Onsite</span></li>
            </ul>
          </div>

          <div className="art-ls-divider shadow-lg"></div>

          <div>
            <h5 className="text-center p-2 art-table">Major Skills</h5>
          </div>
          
          {/* <div className="art-lang-skills p-30-15">
            {skills.map((skill, index) => (
              <div key={index} className="art-lang-skills-item">
                <div className="progress-circle" data-value={skill.value}>
                  <div className="progress-ring">
                    <svg width="80" height="80">
                      <circle cx="40" cy="40" r="35" fill="none" stroke="#e0e0e0" strokeWidth="4"/>
                      <circle 
                        cx="40" cy="40" r="35" fill="none" 
                        stroke="#fff" strokeWidth="4"
                        strokeDasharray={`${2 * Math.PI * 35 * skill.value / 100} ${2 * Math.PI * 35}`}
                        strokeDashoffset={2 * Math.PI * 35 * 0.25}
                        transform="rotate(-90 40 40)"
                      />
                    </svg>
                    <span className="progress-value">{skill.value}%</span>
                  </div>
                </div>
                <h6>{skill.name}</h6>
              </div>
            ))}
          </div> */}

          <div className="art-ls-divider"></div>

          <ul className="art-knowledge-list p-15-0">
            {knowledgeList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="art-ls-divider"></div>

          <div className="art-links-frame p-15-15">
            <a href="/RESUME.pdf" className="art-link" download>
              Download cv <i className="fas fa-download"></i>
            </a>
          </div>
        </div>

        {/* Fixed Social Section - This stays at bottom */}
        <div className="art-ls-social-fixed">
          <div className="art-ls-social">
            <a href="https://www.linkedin.com/in/okereke-emmanuel-169331134/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <span>Linkedin</span>
            </a>
            <a href="https://x.com/esaxdlegend" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="https://github.com/softwaredevemmanuel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <span>Github</span>
            </a>
            <a href="https://www.instagram.com/earlyinnovatorslab/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;