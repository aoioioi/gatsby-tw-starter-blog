import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

function Archive() {
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
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-4">
      {data.allMarkdownRemark.edges.map(edge => (
        <Link to={`/p/${edge.node.fields.slug}/`}>
          <div key={edge.node.id} className="border border-gray-300 px-4 py-3 sm:min-h-[13rem] rounded-lg active:bg-gray-100">
            
            <div>
              <h2 className="font-semibold">
                {edge.node.frontmatter.title}
              </h2>
              <p className="text-sm">{edge.node.frontmatter.date} | {edge.node.timeToRead} min read
              </p>
            </div>
            <div className="my-3 text-sm">
              <p className="line-clamp-3">{edge.node.excerpt}</p>
            </div>
            
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Archive;
