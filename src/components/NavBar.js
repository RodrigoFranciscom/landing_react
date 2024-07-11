import React from 'react';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body d-flex flex-wrap justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand text-light">Start Bootstrap</a>
        <div className='links'>
          <div className=" collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;