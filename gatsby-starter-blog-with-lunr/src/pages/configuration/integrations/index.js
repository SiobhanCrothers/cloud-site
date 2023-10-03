import React from 'react';
import { graphql /*, Link */} from 'gatsby';
import Layout from '../../../components/Layout';

const IntegrationsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">Bravura Cloud Integrations</h1>
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
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "integration" } } }) {
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

export default IntegrationsPage;


