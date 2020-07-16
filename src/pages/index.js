import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../style/app.scss'

const IndexPage = ({ data }) => {
  return (
    <>
      <Header />
      <main className="main">
        <Main panels={data.allMarkdownRemark.edges} />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage;

export const query = graphql`
    query pageQuery {
      allMarkdownRemark(filter: {
        frontmatter: {posttype: {eq: "homepage-section"}}
    }) {
    edges {
      node {
        html
        frontmatter {
          title
          id
        }
      }
    }
  }
}
`;
