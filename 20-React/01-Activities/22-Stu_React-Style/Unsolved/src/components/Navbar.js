import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  navbar: {
    background: 'red',
    color: 'white',
    fontSizr: '100px',
  }
}

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <div style={styles.navbar}>
    <nav className="navbar">
      <a href="/">Welcome</a>
    </nav>
    </div>
  );
}

export default Navbar;
