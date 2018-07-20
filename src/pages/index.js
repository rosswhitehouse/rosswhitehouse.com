import React from 'react'
import Main from '../components/Main'

const IndexPage = ({ data }) => {
  return (
    <div className="main">
      <Main panels={data.allContentfulPage.edges} />
    </div>
  )
}

export default IndexPage;

export const query = graphql`
    query pageQuery {
      allContentfulPage(sort: {fields: [name], order: ASC} ) {
        edges {
          node {
            id
           colour
           name
           content {
             childMarkdownRemark {
               html
             }
           }
          }
       }
      }
   }
`;
