import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';

const Nav = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar__container'>
          <ul className='navbar__left'>
            <div className='navbar__left-logo'>
              <h2>TNP.O</h2>
            </div>
          </ul>
          {toggle ? (
            <ul className='navbar__right'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Service</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Skill</a>
              </li>
              <li>
                <a href='#'>Portfolio</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Context</a>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='toggle' onClick={() => setToggle(!toggle)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
