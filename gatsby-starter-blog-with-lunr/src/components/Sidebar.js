import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #414141;
  color: white;
  padding: 40px;
  padding-bottom: 0;
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
  const [openCategories, setOpenCategories] = useState(new Set());

  useEffect(() => {
    // Retrieve the open categories from localStorage on component mount
    const storedOpenCategories = JSON.parse(localStorage.getItem('openCategories'));
    if (storedOpenCategories) {
      setOpenCategories(new Set(storedOpenCategories));
    }
  }, []);

  const toggleDropdown = (category) => {
    const newOpenCategories = new Set(openCategories);
    if (openCategories.has(category)) {
      newOpenCategories.delete(category);
    } else {
      newOpenCategories.add(category);
    }

    setOpenCategories(newOpenCategories);

    // Save the open categories to localStorage
    localStorage.setItem('openCategories', JSON.stringify(Array.from(newOpenCategories)));
  };

  const isCategoryOpen = (category) => {
    return openCategories.has(category);
  };


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
            role="button"
            tabIndex={0}
	    style={{ display: 'flex', alignItems: 'center', padding: '0px', marginBottom: '0px' }}
            onClick={() => toggleDropdown('configuration')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleDropdown('configuration');
              }
            }}
          >
            <a style={{ display: 'block', paddingRight: '10px' }}>Configuration</a>
            <div style={{ transform: isCategoryOpen('configuration') ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              &gt;
            </div>
          </div>
          {isCategoryOpen('configuration') && (
            <Dropdown>
              <ul>
                <li style={{ marginTop: '0px' }}>
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
        <li>
          <div
            role="button"
            tabIndex={0}
	    style={{ display: 'flex', alignItems: 'center', padding: '0px', marginBottom: '0px' }}
            onClick={() => toggleDropdown('features')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleDropdown('features');
              }
            }}
          >
            <a style={{ display: 'block', paddingRight: '10px' }}>Features</a>
            <div style={{ transform: isCategoryOpen('features') ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              &gt;
            </div>
          </div>
          {isCategoryOpen('features') && (
            <Dropdown>
              <ul>
                <li style={{ marginTop: '0px' }}>
                  <Link to="/features/ai">AI</Link>
                </li>
                <li>
                  <Link to="/features/use-cases">Use Cases</Link>
                </li>
                <li>
                  <Link to="/features/references">References</Link>
                </li>
                <li>
                  <Link to="/features/troubleshooting">Troubleshooting</Link>
                </li>
                <li>
                  <Link to="/features/ea-limitations">EA Limitations</Link>
                </li>
              </ul>
            </Dropdown>
          )}
        </li>
        <li>
          <Link to="/tech-concepts">Technical Concepts</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>	
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;

