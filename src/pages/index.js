import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Main from '../components/Main'
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../style/app.scss'
import ThemeSwitcher from '../components/ThemeSwitcher';

const IndexPage = ({ data }) => {
  const [ theme, setTheme ] = useState('');

  return (
    <div className="home">
      <Helmet>
        <title>Ross Whitehouse</title>
      </Helmet>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <Header theme={theme} />
      <main className="main">
        <Main theme={theme} panels={data.allMarkdownRemark.edges} />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage;

export const query = graphql`
    query pageQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {posttype: {eq: "homepage-section"}}
        },
        sort: {order: ASC, fields: frontmatter___id}
      ) {
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
