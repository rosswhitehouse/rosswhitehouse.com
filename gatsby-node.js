/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const blogPostTemplate = require.resolve(`./src/templates/blogPost.js`);
    const result = await graphql(`{
            allMarkdownRemark(
                filter: { frontmatter: { type: { eq: "post" } } }
                sort: { order: DESC, fields: [frontmatter___date]}
                limit: 10
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
     `);

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `posts/${node.frontmatter.slug}`,
            component: blogPostTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        });
    });
}