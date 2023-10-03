import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #414141;
  color: white;
  padding: 40px;
  height: 100%;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    font-size: 18px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  ul {
    list-style: none;
    padding: 0;
    padding-left: 10px;
  }
  li {
    padding: 0;
    margin-top: -10px;
    font-size: 16px;
  }
  a {
    color: white;
    text-decoration: none;
    opacity: 0.8;
  }
  a:hover {
    text-decoration: underline;
    opacity: 1;
  }
`;

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setIsDropdownOpen(window.location.pathname.startsWith('/configuration'));
  }, []);

  return (
    <SidebarContainer>
      <ul>
        <li>
          <Link to="/welcome">Home</Link>
        </li>
        <li>
          <Link to="/architecture">Architecture</Link>
        </li>
	<li>
	  <div 
	    style={{ display: 'flex', alignItems: 'center', padding: "0px", marginBottom: "0px" }}
	    onClick={toggleDropdown}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleDropdown();
              }
            }}
            tabIndex={0}
	    >
	    <a style={{ display: 'block', paddingRight: '10px' }}>Configuration</a>
 	    <div style={{ transform: isDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
	      &gt;
	    </div>
	  </div>
	  {isDropdownOpen && (
	    <Dropdown>
              <ul>
	        <li style={{marginTop: "0px"}} >
                  <Link to="/configuration/quick-start">Quick Start</Link>
		</li>
		<li>
                  <Link to="/configuration/integrations">Integrations</Link>
                </li>
		<li>
                  <Link to="/configuration/how-tos">How-tos</Link>
                </li>
		<li>
                  <Link to="/configuration/troubleshooting">Troubleshooting</Link>
                </li>
	      </ul>
            </Dropdown>
	  )}
        </li>
        <li>Features</li>
        <li>
          <Link to="/tech-concepts">Technical Concepts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;

