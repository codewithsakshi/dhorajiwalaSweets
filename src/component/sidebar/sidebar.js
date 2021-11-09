import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id='header'>
      <div className='header container'>
        <div className='nav-bar'>
          <div className='brand'>
            <Link to='hero' smooth={true} spy={true}>
              <span>s</span>akshi <span>m</span>ittal
            </Link>
          </div>
          <nav className='nav-list'>
            <div className='hamburger' onClick={handleClick}>
              <div className='bar'></div>
            </div>
            <ul
              className={`header-links ${isVisible === true ? 'active' : ''}`}
            >
              <li>
                <Link
                  to='hero'
                  className='link'
                  smooth={true}
                  onClick={handleClick}
                  spy={true}
                  data-after='home'
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to='projects'
                  className='link'
                  smooth={true}
                  spy={true}
                  data-after='projects'
                  onClick={handleClick}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='about'
                  className='link'
                  smooth={true}
                  onClick={handleClick}
                  spy={true}
                  data-after='about'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='contact'
                  smooth={true}
                  className='link'
                  spy={true}
                  data-after='contact'
                  onClick={handleClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}