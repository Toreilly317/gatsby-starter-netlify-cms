import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components';
import { Heading1 } from "../components/styled"
import NavLink from "../components/common/NavLink"


const BlogArea = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 5px;

`

const Card = styled.div`
  background: white;
  border-radius: 3px;
  padding: 2.8rem;
`

const CardTitle = styled.div`
color: black;
font-size: 2rem;
a {
  color: currentColor;
}
`

const CardExerpt = styled.div`
  padding: 1rem;
`

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Heading1>Latest Blog Posts</Heading1>
        <BlogArea>
          {posts
            .map(({ node: post }) => (
              <Card key={post.id}>
                <CardTitle><NavLink to={post.fields.slug} text={post.frontmatter.title} /></CardTitle>
                <CardExerpt>{post.excerpt}</CardExerpt>
                <NavLink to={post.fields.slug} text="Keep Reading →" />
                <small>{post.frontmatter.date}</small>
              </Card>
            ))}
        </BlogArea>

      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
