import React from "react"
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

import '../style/prism-theme.scss'
import '../style/app.scss'
import '../style/post.scss'
import Footer from "../components/Footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet>
        <title>{frontmatter.title} - Ross Whitehouse</title>
      </Helmet>
      <div className="post-container">
        <div className="post-header panel">
          <h1>{frontmatter.title}</h1>
          <p>First posted {frontmatter.date}</p>
        </div>
        <div
          className="post-content panel"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="panel blank" />
        <div className="panel">
          <p>I don't have comments on my blog, but I'd love to hear from you! Find me on <a href="https://twitter.com/RossWhitehouse">Twitter</a>, or <a href={`mailto:ross.dw94@gmail.com?subject=Comment on ${frontmatter.title}`}>Email me</a>.</p>
        </div>
        <div className="panel blank" />
      </div>
      <Footer />
    </>
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