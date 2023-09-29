import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../../components/Layout';

const QuickStartPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Bravura Cloud Quick Start</h1>
          </div>
          <div className="content">
            {edges.map(({ node }) => (
              <div key={node.id}>
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
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "quick-start" } } }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default QuickStartPage;


