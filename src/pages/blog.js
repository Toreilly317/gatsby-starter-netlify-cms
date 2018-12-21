import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/Layout'
import styled from "styled-components";

const BlogList = styled.div`
   padding: 1rem;
`;

const BlogPost = styled.div`
 
  
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  border-radius: 2px;
  margin-bottom: 1rem;
  border-bottom: 2px solid blue;
  padding: 1rem .5rem;

  &:not(:last-child){
    margin-bottom: 1rem;
  }
  
  .post-image {
    max-width: 300px;
    max-height: 300px;
    flex: 1;
    

    img {
      width: 100%;
      height: 100%;

    }
  }
  
  .post-title{
    padding: 1rem;
    
    flex: 1;

    a {
      font-size: 3rem;
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  }
  
    
`


export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout title="Taylor O'Reilly">
        <BlogList>
          {posts
            .map(({ node: post }) => (
              <BlogPost key={post.id}>

                <div class="post-image">
                  <Link className="has-text-primary" to={post.fields.slug}>
                    <Img fixed={post.frontmatter.featured.childImageSharp.fixed} />
                  </Link>
                </div>
                <div class="post-title">
                  <div className="post-title">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </div>
                </div>

              </BlogPost>

            ))}
        </BlogList>
      </Layout>
    )
  }
}



export const pageQuery = graphql`
 query IndexQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          featured {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`




