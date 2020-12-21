import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">LoopLAB</Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse" >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/explore" className="nav-link">Explore</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to="/share" className="nav-link">Share</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
