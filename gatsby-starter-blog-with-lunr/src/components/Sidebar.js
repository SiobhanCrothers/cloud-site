import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 40px;
  height: 100%;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ul>
        <li>
          <Link to="/welcome">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/quick-start">Quick Start</Link>
        </li>
        <li>
          <Link to="/documentation">Docs & Learning</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;

