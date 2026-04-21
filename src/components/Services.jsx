import './Services.css';

function Services() {
  const services = [
    {
      title: 'Software Engineering',
      description: 'A software engineer with over 6 years of experience in developing robust, highly scalable applications. Knowledgeable and skilled software development professional offering advanced abilities in a wide range of programming languages, including Python, JavaScript. I am able to quickly understand requirements for new systems and create robust code.'
    },
    {
      title: 'IOS & Android App Development',
      description: 'Highly skilled React Native developer with 4 years of experience in creating robust and efficient mobile applications. Proficient in leveraging React Native\'s cross-platform capabilities to deliver exceptional user experiences on both iOS and Android platforms. Demonstrated expertise in translating complex UI/UX designs into clean and scalable code.'
    },
    {
      title: 'Web Development',
      description: 'A web developer highly skilled in designing and implementing innovative, user-centric websites and web applications. Proficient in front-end and back-end technologies, adept at creating responsive layouts and ensuring seamless user experiences across various platforms and devices.'
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>My Services</h4>
            </div>
          </div>
        </div>
        
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="art-a art-service-icon-box">
              <div className="art-service-ib-content">
                <h5 className="mb-15 head">{service.title}</h5>
                <div className="mb-15">{service.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;