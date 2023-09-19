import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import TileImage from './TileImage'


const WelcomeRollTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-4" key={post.id} >
	    <article 
              className={`welcome-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }` }
            >
            <Link to={post.fields.slug}>
	      <header style={{ justifyContent: "center" }}>
                {post?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <TileImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) }
		</header>
                <p className="post-meta"  style={{ textAlign: "center" }}>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                </p>
              <p style={{ textAlign: "center" }}>
                {post.excerpt}
                <br />
                <br />
              </p>
            </Link>
	    </article>
          </div>
        ))}
    </div>
  )
}

WelcomeRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function WelcomeRoll() {
  return (
    <StaticQuery
      query={graphql`
        query WelcomeRollQuery {
          allMarkdownRemark(
            sort: {frontmatter: {date: DESC}}
            filter: { frontmatter: { templateKey: { eq: "welcome" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <WelcomeRollTemplate data={data} count={count} />}
    />
  );
}
