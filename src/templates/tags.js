import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `タグ：“${tag}”の記事 ( ${totalCount} )`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`}>
            <meta property="og:title" content={`${tag} | ${title}`} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`/tags/${tag}/`} />
          </Helmet>
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <BlogRoll data={posts} />
                <br />
                <p>
                  <Link to="/tags/">タグ一覧へ</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
