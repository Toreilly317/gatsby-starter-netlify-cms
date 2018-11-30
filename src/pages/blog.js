import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components';
import { Heading1 } from "../components/styled"
import NavLink from "../components/common/NavLink";
import { Card, CardTitle, CardExerpt } from "../components/styled"


const BlogArea = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr));
align-content: flex-start;
grid-template-rows: 15rem;
grid-gap: 5px;

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
