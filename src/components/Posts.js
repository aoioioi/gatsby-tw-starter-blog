import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from 'gatsby-image';

function Posts() {
  const data = useStaticQuery(
    graphql`
    query { 
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) { 
        edges { 
          node {
            fields {
              slug
            }
            frontmatter { 
              title
              date(formatString: "DD MMMM, YYYY")
              featured { 
                childImageSharp { 
                  fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            timeToRead
            excerpt
            id
          }
        }
      }
    }
    `
  );

  return (
    <div className="max-w-[38rem] mt-8 mx-auto">
      {data.allMarkdownRemark.edges.map(edge => (
        <div key={edge.node.id} className="mb-10">
          <div>
            <h2 className="text-lg font-semibold">
              <Link to={`/p/${edge.node.fields.slug}/`}>
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <p className="text-xs mt-1">{edge.node.frontmatter.date} | {edge.node.timeToRead} min read
            </p>
          </div>

          {edge.node.frontmatter.featured && (
            <Img
              className="mt-4"
              fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
              alt={edge.node.frontmatter.title}
            />
          )}

          <div className="mt-3 mb-5">
            <p>{edge.node.excerpt}</p>
          </div>
          <Link to={`/p/${edge.node.fields.slug}/`}>
            <p className="text-right">Read more.</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
