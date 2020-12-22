import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Meg from "../../images/megy.gif";
import "./style.css"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="Megy" src={Meg} alt='Furusato' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
              Discover
          </NavLink>
          <NavLink to='/services' activeStyle>
            Polls
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Discussion
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Waifus
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
