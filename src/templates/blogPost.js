import React from "react"
import { graphql } from "gatsby"

import '../style/prism-theme.scss'
import '../style/app.scss'
import '../style/post.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="post-container">
      <div className="post-header panel">
        <h1>{frontmatter.title}</h1>
        <p>First posted {frontmatter.date}</p>
      </div>
      <div
        className="post-content panel"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`