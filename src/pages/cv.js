import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../style/app.scss'
import '../style/cv.scss'

const IndexPage = ({ data }) => {
  return (
    <>
      <main className="main">
        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
      </main>
    </>
  )
}

export default IndexPage;

export const query = graphql`
    query cvQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {title: {eq: "CV"}}
        },
        sort: {order: ASC, fields: frontmatter___id}
      ) {
    edges {
      node {
        html
        frontmatter {
          title
        }
      }
    }
  }
}
`;
