
import React from 'react';

function Support() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Support</h1>
      <p>Welcome to the Support page! Here you’ll find resources to assist you with any issues or questions.</p>
      <div className="row">
        <div className="col-md-6">
          <h4>Contact Us</h4>
          <p>Email: support@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="col-md-6">
          <h4>FAQs</h4>
          <ul className="list-group">
            <li className="list-group-item">How to reset my password?</li>
            <li className="list-group-item">Where can I find user documentation?</li>
            <li className="list-group-item">How to contact technical support?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;
