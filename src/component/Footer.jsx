import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer className="bg-white text-dark py-4 mt-auto  ">
        <hr className="bg-light" class="mx-5"/>
      <div className="container">
        <div className="row">
        
          <div className="col-md-4">
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/features/cool-stuff"
                  className={({ isActive }) =>
                    isActive ? 'text-primary text-decoration-underline' : ' text-decoration-underline'
                  }
                >
                  Cool stuff
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/features/random"
                  className={({ isActive }) =>
                    isActive ? 'text-primary text-decoration-underline' : 'text-secondary text-decoration-underline'
                  }
                >
                  Random feature
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/features/team"
                  className={({ isActive }) =>
                    isActive ? 'text-primary text-decoration-underline' : 'text-secondary text-decoration-underline'
                  }
                >
                  Team feature
                </NavLink>
              </li>
            </ul>
          </div>

       
          <div className="col-md-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    isActive ? 'text-primary text-decoration-underline' : 'text-secondary text-decoration-underline'
                  }
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources/name"
                  className={({ isActive }) =>
                    isActive ? 'text-primary text-decoration-underline' : 'text-secondary text-decoration-underline'
                  }
                >
                  Resources name
                </NavLink>
              </li>
            </ul>
          </div>

         
          <div className="col-md-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/about/team"
                  className={({ isActive }) =>
                    isActive ? 'text-primary text-decoration-underline' : 'text-secondary text-decoration-underline'
                  }
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/location"
                  className={({ isActive }) =>
                    isActive ? 'text-primary text-decoration-underline' : 'text-secondary text-decoration-underline'
                  }
                >
                  Location
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
