import React from 'react'
import {Link } from "react-router-dom";


export default function Navbar() {
    
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/" ><b>EXPRESS PARCEL</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/confirm">Company <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/confirm">Our Services <span className="sr-only">(current)</span></Link>
      </li>
      
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Track Shipment" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}