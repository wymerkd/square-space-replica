import React from 'react';
import NavLinks from './NavLinks'

function Header(){

  const headerStyles = {
    paddingTop: '40px',
    paddingLeft: '20px',
    backgroundColor: 'black',
    height: '100px',
    position: 'absolute',
    zIndex: '1',
    width: '100vw',
  }

  return(
    <div style={headerStyles}>
      <NavLinks/>
    </div>
  );
}

export default Header;
