const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    // Create slug in GraphQL
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query { 
      allMarkdownRemark { 
        edges { 
          node { 
            fields { 
              slug
            }
          }
        }
      }
    }
  `);

  // Dynamically create page based on edge
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/p/${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/p/post-detail.js"),
      context: {
        slug: edge.node.fields.slug,
      }
    });
  });
};