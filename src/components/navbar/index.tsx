import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3><strong>Where in the world?</strong></h3>
      <h5><FontAwesomeIcon icon={faMoon} fixedWidth={true} />Dark Mode</h5>
    </nav>
  )
}