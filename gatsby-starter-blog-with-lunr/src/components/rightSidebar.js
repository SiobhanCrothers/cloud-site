import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const RightSidebar = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const extractedHeadings = Array.from(headingElements).map((element) => ({
      id: element.id,
      text: element.innerText,
    }));

    setHeadings(extractedHeadings);
  }, []);

  const scrollToHeading = (id, event) => {
    event.preventDefault(); // Prevent the default link behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  return (
    <div>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
           <Link
              to={`#${heading.id}`}
              onClick={(e) => scrollToHeading(heading.id, e)}
              className="sidebar-link"
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;

