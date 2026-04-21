import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 6;
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, []);

  return (
    
    <div className="row p-30-0">
      <div className="col-md-3 col-6">
        <div className="art-counter-frame">
          <div className="art-counter-box">
            <span className="art-counter">{count}</span>
            <span className="art-counter-plus">+</span>
          </div>
          <h6>Years Experience</h6>
        </div>
      </div>
    </div>
  );
}

export default Counter;