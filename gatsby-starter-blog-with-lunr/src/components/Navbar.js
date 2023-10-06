import React, { useState } from "react";
import { Link } from "gatsby";
import SearchForm from './searchForm';
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import styled from 'styled-components';

/* Style for the dropdown menu */

const NavbarItems = styled.ul`
  li {
    margin-bottom: 0;
  }

  a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active {
    color: #f65e0a;
  }

`;

const TopDropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background-color: #fff; /* Background color for the dropdown */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  min-width: max-content;
  padding: 5px 0 5px 0;
`;

const TopDropdownWrapper = styled.div`
  position: relative;

  &:hover ${TopDropdownMenu} {
    display: block;
  }

  li.navbar-item {
    margin-bottom: 0;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font: inherit;
    display: flex;
    align-items: center;
    color: hsl(0, 0%, 29%);
  }

  button:hover {
    color: #f65e0a;
  }

  li {
    margin-bottom: 0;
  }

  a {
    color: hsl(0, 0%, 29%);
    text-decoration: none;
    padding: 2px 20px 2px 20px;
  }

  a:hover {
    color: #f65e0a; 
  }

  .chevron {
    margin-left: 0.5rem;
    transform: rotate(90deg);
  }
`;

const SubDropdownMenu = styled.ul`
  display: none;
  position: absolute;
  left: 170px; /* Position to the right of the parent */
  top: 0; /* Align with the top of the parent */
  background-color: #fff; /* Background color for the dropdown */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  min-width: max-content;
  padding: 5px 0 5px 0;
`;

const SubDropdownWrapper = styled.div`
  position: relative;

  &:hover ${SubDropdownMenu} {
    display: block;
  }

  li.navbar-item {
    margin-bottom: 0;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font: inherit;
    display: flex;
    align-items: center;
    color: hsl(0, 0%, 29%);
  }

  &:hover button {
    color: #f65e0a;
  }

  li {
    margin-bottom: 0;
  }

  a {
    color: hsl(0, 0%, 29%);
    text-decoration: none;
    padding: 2px 20px 2px 20px;
  }

  a:hover {
    color: #f65e0a;
  }

  .chevron {
    margin-left: 0.5rem;
    transform: rotate(90deg);
  }
`;


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/welcome" className="navbar-item" title="Logo">
            <img src={logo} alt="Bravura" style={{ width: "200px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <NavbarItems id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/configuration/quick-start">
              Quick Start
            </Link>
            </li>
	    <li className="navbar-item" style={{padding: "0px"}}>
	      <TopDropdownWrapper>
	        <button>
	          Documentation 
	  	  <span className="chevron">&gt;</span>
	        </button>
	        <TopDropdownMenu>
	  	  <li className="navbar-item" style={{padding: "0px"}}>
                    <Link to="/architecture">Architecture</Link>
	  	  </li>
		  <li className="navbar-item" style={{padding: "0px"}}>
	            <SubDropdownWrapper>
	              <button style={{ padding: '2px 40px 2px 20px' }}>
                        Configuration &gt;
                      </button>
	              <SubDropdownMenu>
	                <li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/configuration/quick-start">Quick Start</Link>
                        </li>
	  		<li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/configuration/integrations">Integrations</Link>
                        </li>
			<li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/configuration/how-tos">How Tos</Link>
                        </li>
			<li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/configuration/troubleshooting">Troubleshooting</Link>
                        </li>
	              </SubDropdownMenu>
	            </SubDropdownWrapper>
	  	  </li>
                  <li className="navbar-item" style={{padding: "0px"}}>
                    <SubDropdownWrapper>
	  	      <button style={{ padding: '2px 80px 2px 20px' }}>
                        Features &gt;
                      </button>
                      <SubDropdownMenu>
                        <li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/features/ai">AI</Link>
                        </li>
                        <li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/features/ea-limitations">EA Limitations</Link>
                        </li>
                        <li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/features/references">References</Link>
                        </li>
                        <li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/features/troubleshooting">Troubleshooting</Link>
                        </li>
                        <li className="navbar-item" style={{padding: "0px"}}>
                          <Link to="/features/use-cases">Use Cases</Link>
                        </li>
                      </SubDropdownMenu>
                    </SubDropdownWrapper>
                  </li>
                  <li className="navbar-item" style={{padding: "0px"}}>
	            <Link to="/tech-concepts">Technical Concepts</Link>
	          </li>
	   	  <li className="navbar-item" style={{padding: "0px"}}>
	            <Link to="/faq">FAQ</Link>
	          </li>
	  	</TopDropdownMenu>
	      </TopDropdownWrapper>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            </li>
          <li className="navbar-item" style={{padding: "0px"}}>
            <a
              className="navbar-item"
              href="https://github.com/SiobhanCrothers/cloud-site/tree/main/gatsby-starter-blog-with-lunr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
	  </li>
        </NavbarItems>
      </div>
      <div className="header-position-right" style={{paddingRight: "120px"}}>
        <SearchForm classNames={'link_bold'}/>
      </div>
    </nav>
  );
};

export default Navbar;
