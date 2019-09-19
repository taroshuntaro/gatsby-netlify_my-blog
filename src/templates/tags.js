import React from 'react';
import Helmet from 'react-helmet';
import { kebabCase } from 'lodash';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
//import BlogRoll from '../components/BlogRoll';

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
                <div className="columns is-multiline">
                  {posts &&
                    posts.map(({ node: post }) => (
                      <div
                        className="is-parent column is-8  is-offset-2"
                        key={post.id}
                      >
                        <Link to={post.fields.slug}>
                          <article
                            className={`blog-list-item tile is-child box notification}`}
                          >
                            <div className="columns is-multiline">
                              <div className="column is-12">
                                <header>
                                  <p className="post-meta">
                                    <span className="title is-size-4">
                                      <span style={{ color: 'cadetblue' }}>
                                        #&nbsp;
                                      </span>
                                      {post.frontmatter.title}
                                    </span>
                                  </p>
                                </header>
                                {/* ▼▼▼ 記事本文（一部） ▼▼▼ */}
                                <p style={{ color: 'gray' }}>{post.excerpt}</p>
                                {/* ▼▼▼ 投稿日時 ▼▼▼ */}
                                <span
                                  style={{ fontSize: '0.7em', color: 'gray' }}
                                >
                                  投稿日：
                                  <span style={{ fontWeight: 'bold' }}>
                                    {post.frontmatter.date}
                                  </span>
                                </span>
                                {/* ▼▼▼ タグ ▼▼▼ */}
                                {post.frontmatter.tags &&
                                post.frontmatter.tags.length ? (
                                  <div
                                    className="tags"
                                    style={{ paddingTop: '0.3em' }}
                                  >
                                    <span
                                      style={{
                                        marginBottom: '0.5em',
                                        fontSize: '0.7em',
                                        color: 'gray'
                                      }}
                                    >
                                      タグ：
                                    </span>
                                    {post.frontmatter.tags.map(tag => (
                                      <span
                                        key={tag + `tag`}
                                        className="tag"
                                        style={{
                                          margin: '0',
                                          marginRight: '0.5em',
                                          marginBottom: '0.5em',
                                          backgroundColor: 'cadetblue'
                                        }}
                                      >
                                        <Link to={`/tags/${kebabCase(tag)}/`}>
                                          <span style={{ color: 'white' }}>
                                            {tag}
                                          </span>
                                        </Link>
                                      </span>
                                    ))}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </article>
                        </Link>
                      </div>
                    ))}
                </div>
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
          excerpt(pruneLength: 75)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY/MM/DD")
            tags
            featuredpost
          }
        }
      }
    }
  }
`;
