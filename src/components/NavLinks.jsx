import React from 'react'
import { Link } from 'react-router-dom';
import logoAndIcon from '../assets/images/logoAndIcon.png';

function NavLinks(){
  let navStyles = {
    textColor: 'white !important',
    textAlign: 'center'
  }

  const rightNav = {
    float: 'right',
    paddingRight: '15px',
    marginRight: '5px',
  }

  const centerNav = {
    margin: '0 10px',
  }

  const icon = {
    height: '60px',
    width: '60px',
    float: 'left',
  }

  const logoName = {
    float: 'left',
    height: '30px',
    width: '190px',
  }

  return(
    <div style={navStyles}>
    <div>

    <Link to="/"><img style={logoName} src={logoAndIcon} alt='icon'/></Link>
    <Link class='link' style={centerNav} to="/features">FEATURES ▽</Link>
    <Link class='link' style={centerNav} to="/templates">TEMPLATES ▽</Link>
    <Link class='link' style={centerNav} to="/support">SUPPORT ▽</Link>
    <Link class='getStartedHover' style={rightNav} to="/get-started"><span class='getStartedLink'>GET STARTED</span></Link>
    <Link class='link' style={rightNav} to="/login">LOG IN</Link>
    </div>
    </div>
  );
}

export default NavLinks;
