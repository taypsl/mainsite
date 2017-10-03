import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import ccscLogo from '../../img/ccsc-logo.svg';
import ccscLogoSm from '../../img/ccsc-logo-sm.svg';
// import ReactSVG from 'react-svg';


/* 
<img className="Menu-logo-img"
  alt='Contra Costa Superior Courts logo'
  src={ ccscLogo }
/>

<img className="Menu-logo-img-sm"
  alt='Contra Costa Superior Courts logo'
  src={ ccscLogoSm }
/>
*/
function Navbar(props) {
  return (
    <div className='Menu'>
        <div className='Menu-logo'>
          <img
            alt='Contra Costa Superior Courts logo'
            className='Menu-logo-img'
            src={ccscLogo}
          />
          <img
            alt='Contra Costa Superior Courts logo'
            className='Menu-logo-img-sm'
            src={ccscLogoSm}
          />
          
        </div>
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/portal'
          >
            My Portal
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/forms'
          >
            Forms
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/faqs'
          >
            FAQs
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/locations'
          >
            Find a Courthouse
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/contact-us'
          >
            Contact
          </NavLink>
        </div>
      </div>
  );
}

export default Navbar;