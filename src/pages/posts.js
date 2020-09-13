import React from 'react';
import { graphql } from 'gatsby';

import '../style/post.scss'
import Footer from '../components/Footer';

const PostsPage = ({ data }) => {
  return (
    <>
      <div className="post-container all-posts">
        <div className="panel post-header">
          <h1>All Posts</h1>
        </div>
        <div className="panel">
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              const { slug, title, excerpt } = node.frontmatter;
              return (
                <li key={slug} >
                  <h2><a href={`/posts/${slug}`}>{title}</a></h2>
                  <p>{excerpt}</p>
                  [<a href={`/posts/${slug}`}><em>Read More</em></a>]
                </li>
              );
            })}
          </ul>
        </div>
      </div >
      <Footer />
    </>
  );
};

export default PostsPage;

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date]}
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            excerpt
          }
        }
      }
    }
  }
`;