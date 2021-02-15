import React from 'react'
import ThemeSwitcher from '../components/ThemeSwitcher'

import '../style/app.scss'
import '../style/cv.scss'

const CVPage = ({ data }) => {
  return (
    <div className="cv">
      <ThemeSwitcher />
      <main className="main">
        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
      </main>
    </div>
  )
}

export default CVPage;

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
