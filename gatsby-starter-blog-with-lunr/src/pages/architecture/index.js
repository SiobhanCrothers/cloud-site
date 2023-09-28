import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';

const ArchitecturePage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  useEffect(() => {
    // This function handles the scroll behavior
    const handleLinkClick = (event, slug) => {
      event.preventDefault();
      const targetElement = document.getElementById(slug);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    // Attach event listener to all architecture links
    const links = document.querySelectorAll('.architecture-link');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const slug = event.target.getAttribute('data-slug');
        handleLinkClick(event, slug);
      });
    });
  }, []);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Bravura Cloud Architecture</h1>
            <ul>
              {edges.map(({ node }) => (
                <li key={node.id}>
                  {/* Added data-slug to store the slug */}
                  <Link
                    to="/"
                    className="architecture-link"
                    data-slug={node.frontmatter.slug}
                  >
                    {node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="content">
            {edges.map(({ node }) => (
              <div key={node.id} id={node.frontmatter.slug}>
                <h2>{node.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "architecture" } } }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default ArchitecturePage;

