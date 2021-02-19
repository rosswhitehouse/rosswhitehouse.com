import React, { useState } from "react"
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

import '../style/prism-theme.scss'
import '../style/app.scss'
import '../style/post.scss'
import HomeButton from "../components/HomeButton"
import Footer from "../components/Footer"
import ThemeSwitcher from "../components/ThemeSwitcher"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [ theme, setTheme ] = useState('');
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet>
        <title>{frontmatter.title} - Ross Whitehouse</title>
      </Helmet>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <div className="post-container">
        <div className="post-header panel">
          <HomeButton theme={theme} />
          <div>
            <h1>{frontmatter.title}</h1>
            <p>First posted {frontmatter.date.split('-').reverse().join('/')}</p>
          </div>
        </div>
        <div className="post-content panel">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="panel wrapup">
          <div>
            <h2>Thanks for Reading!</h2>
            <p>I don't have comments on my blog, but I'd love to hear what you think!<br />Find me on <a href="https://twitter.com/RossWhitehouse">Twitter</a>, or <a href={`mailto:ross.dw94@gmail.com?subject=Comment on ${frontmatter.title}`}>Email me</a>.</p>
          </div>
        </div>
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