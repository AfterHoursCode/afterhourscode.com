import React from "react"
import { Link, graphql } from "gatsby"

export default function Writing(props) {
  const { data } = props
  const posts = data.allMarkdownRemark.edges

  const createPosts = posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    return (
      <article key={node.fields.slug}>
        <header>
          <h3 className="text-2xl font-black mt-16 mb-2">
            <Link
              className="text-blue-600 shadow-none"
              to={node.fields.slug}
            >
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            className="mb-8"
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </article>
    )
  })

  return (createPosts)
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`