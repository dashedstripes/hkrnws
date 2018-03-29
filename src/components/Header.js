import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="navbar b-t-red c-b-light-gray">
        <div className="navbar__button" id="navbarButton">
          <div className="navbar__button-line"></div>
          <div className="navbar__button-line"></div>
          <div className="navbar__button-line"></div>
        </div>
        <div className="navbar__inner">
          <Link to='/' className="navbar__logo">hkrnws</Link>
          <div className="navbar__collapse" id="navbarCollapse">
            <ul className="nav">
              <li>

              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
