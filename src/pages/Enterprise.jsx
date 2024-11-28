import React from "react";

function Enterprise() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Enterprise Solutions</h1>
        <p className="fs-3 fw-light text-muted">
          Explore our enterprise solutions designed for your business needs.
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <p className="text-center">
            Our enterprise solutions are crafted to scale with your business. We offer tailored services to fit your specific needs. Our goal is to help you grow and streamline operations with cutting-edge tools and expert support.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 mb-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Scalable Solutions</h5>
              <p className="card-text">
                Tailored solutions designed to grow with your business, ensuring efficiency and scalability.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Expert Support</h5>
              <p className="card-text">
                Our dedicated support team is available to help you navigate and optimize your enterprise systems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Advanced Tools</h5>
              <p className="card-text">
                Equip your business with advanced tools that increase productivity, collaboration, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enterprise;
