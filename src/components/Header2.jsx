import React from 'react';
import NavLinks from './NavLinks'

function Header2(){

  const headerStyles2 = {
    display: 'inlineBlock',
    fontFamily: 'Helvetica',
  }

  const wordSpacing = {
    margin: '0 50px',
    color: 'rgba(0,0,0,.5)'
  }

  return(
    <div className="secondHeader" styles={headerStyles2}>
      <span style={wordSpacing}>About Us</span>
      <span style={wordSpacing}>Careers</span>
      <span style={wordSpacing}>Our Team</span>
      <span style={wordSpacing}>Locations</span>
    </div>
  );
}

export default Header2;
