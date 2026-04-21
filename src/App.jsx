import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Counter from './components/Counter';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="art-app art-app-onepage">
        <div className="art-mobile-top-bar"></div>
        <div className="art-app-wrapper">
          <Header />
          <div className="art-app-container" style={{ marginTop: '60px' }}> {/* Add margin-top to push content below header */}
            <Sidebar />
            <Routes>
              <Route path="/" element={
                <div className="art-content">
                  <div className="art-curtain"></div>
                  <div className="art-top-bg" style={{ backgroundColor: '#a19db4' }}>
                    <div className="art-top-bg-overlay"></div>
                  </div>
                  <div className="transition-fade" id="swup">
                    <div id="scrollbar" className="art-scroll-frame">
                      <div className="container-fluid">
                        <Banner />
                        <Counter />
                        <Services />
                        <Testimonials />
                        <div className="row p-30-0">
                          <div className="col-lg-6">
                            <WorkHistory />
                          </div>
                          <div className="col-lg-6">
                            <Education />
                          </div>
                        </div>
                        <Contact />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;