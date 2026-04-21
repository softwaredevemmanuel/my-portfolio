import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'img/portfolio/ecommerce.jpg',
      description: 'Full-stack e-commerce solution with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'img/portfolio/banking.jpg',
      description: 'Secure mobile banking application for iOS and Android',
      technologies: ['React Native', 'Redux', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management System',
      category: 'web',
      image: 'img/portfolio/taskmanager.jpg',
      description: 'Collaborative task management platform for teams',
      technologies: ['Django', 'React', 'PostgreSQL', 'Docker'],
      link: '#'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: 'img/portfolio/fitness.jpg',
      description: 'Health and fitness tracking application',
      technologies: ['Flutter', 'Firebase', 'REST API'],
      link: '#'
    },
    {
      id: 5,
      title: 'AI Chatbot',
      category: 'web',
      image: 'img/portfolio/chatbot.jpg',
      description: 'Intelligent customer service chatbot',
      technologies: ['Python', 'TensorFlow', 'React', 'WebSockets'],
      link: '#'
    },
    {
      id: 6,
      title: 'Inventory Management',
      category: 'web',
      image: 'img/portfolio/inventory.jpg',
      description: 'Warehouse inventory management system',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      link: '#'
    },
    {
      id: 7,
      title: 'Social Media Dashboard',
      category: 'web',
      image: 'img/portfolio/social.jpg',
      description: 'Analytics dashboard for social media management',
      technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      id: 8,
      title: 'Food Delivery App',
      category: 'mobile',
      image: 'img/portfolio/food.jpg',
      description: 'On-demand food delivery mobile application',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      link: '#'
    },
    {
      id: 9,
      title: 'Learning Management System',
      category: 'web',
      image: 'img/portfolio/lms.jpg',
      description: 'Online course platform with video streaming',
      technologies: ['Django', 'React', 'AWS', 'Redis'],
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  return (
    <div className="art-content">
      <div className="art-curtain"></div>
      <div className="art-top-bg" style={{ backgroundColor: '#150664' }}>
        <div className="art-top-bg-overlay"></div>
      </div>
      
      <div className="transition-fade" id="swup">
        <div id="scrollbar" className="art-scroll-frame">
          <div className="container-fluid">
            {/* Portfolio Header */}
            <div className="row p-60-0 p-lg-30-0 p-md-15-0">
              <div className="col-lg-12">
                <div className="art-a art-banner portfolio-banner">
                  <div className="art-banner-overlay">
                    <div className="art-banner-title">
                      <h1 className="mb-15">
                        My <span>Portfolio</span>
                      </h1>
                      <div className="art-lg-text art-code mb-25">
                        &lt;<i>code</i>&gt; Here are some of my recent works &lt;/<i>code</i>&gt;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="portfolio-filter">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                        onClick={() => setFilter(cat.id)}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="container-fluid">
              <div className="row portfolio-grid">
                {filteredProjects.map(project => (
                  <div key={project.id} className="col-lg-4 col-md-6">
                    <div className="art-a portfolio-item">
                      <div className="portfolio-image">
                        <img src={project.image} alt={project.title} />
                        <div className="portfolio-overlay">
                          <div className="portfolio-links">
                            <a href={project.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                            <button className="portfolio-link" data-toggle="modal" data-target={`#modal-${project.id}`}>
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-content">
                        <h5>{project.title}</h5>
                        <p>{project.description}</p>
                        <div className="portfolio-tech">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="art-a art-card cta-section">
                    <div className="text-center">
                      <h3>Have a Project in Mind?</h3>
                      <p>Let's work together to create something amazing</p>
                      <a href="/contact" className="art-btn art-btn-md">
                        <span>Contact Me</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="container-fluid">
              <footer>
                <div className="art-copy">© 2022 SoftWareDevEmma</div>
                <div>
                  By:&#160;
                  <a href="" target="_blank" rel="noopener noreferrer">Okereke Emmanuel</a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;