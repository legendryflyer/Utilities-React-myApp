import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    // <div>
    //   i am a navbar
    // </div>
    // <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">{props.title}</a>
    // <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //   <span className="navbar-toggler-icon"></span>
    // </button>
    // <button type="button" className="btn btn-secondary ">Enable Dark Mode</button>
    //   </div>
    // </nav>
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtilities</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleSwitch} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}


// Navbar.defaultProps={
//   title: 'My App'
// }


