import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby';

import '../style/app.scss'
import '../style/post.scss'
import Footer from '../components/Footer';
import ThemeSwitcher from '../components/ThemeSwitcher';

const PostsPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Posts - Ross Whitehouse</title>
      </Helmet>
      <ThemeSwitcher />
      <div className="post-container all-posts">
        <div className="panel post-header">
          <div>
            <h1>All Posts</h1>
          </div>
        </div>
        <div className="panel">
          <div>
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              const { slug, title, excerpt } = node.frontmatter;
              return (
                <li key={slug} >
                  <h2><a href={`/posts/${slug}`}>{title}</a></h2>
                  <p>{excerpt}</p>
                  [<a href={`/posts/${slug}`}>Read More</a>]
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      <Footer />
      </div >
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