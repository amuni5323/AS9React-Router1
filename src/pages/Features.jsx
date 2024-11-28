
import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
  return (
    <div>
      <h1>Features</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/features/1" className="btn btn-primary">Cool Feature 1</Link>
        </li>
        <li className="list-group-item">
          <Link to="/features/2" className="btn btn-primary">Cool Feature 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Features;
