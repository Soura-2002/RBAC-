import React from 'react'
import PropTypes from 'prop-types'
import logo from './RBAC.png';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt='logo'height='50px'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/roles">Roles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>{props.text}</b></label>
      </div>
    </div>
  </div>
</nav>
  )
}
Navbar.prototype={
  title:PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps={
  aboutText:"Apne bare me bol"
}