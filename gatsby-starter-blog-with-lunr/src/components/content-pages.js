import React from "react";
import PropTypes from "prop-types";
/*import { kebabCase } from "lodash";*/
import { Helmet } from "react-helmet";
import { graphql /*, Link */} from "gatsby";
import Layout from "./Layout";
import Content, { HTMLContent } from "./Content";

// eslint-disable-next-line
export const ContentPageTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container">
        <div className="content">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <p>{description}</p>
          <PostContent content={content} />
        </div>
      </div>
    </section>
  );
};

ContentPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const ContentPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContentPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | ContentPage">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ContentPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ContentPage;

export const pageQuery = graphql`
  query ContentPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;

