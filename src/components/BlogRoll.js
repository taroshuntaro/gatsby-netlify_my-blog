import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link, graphql, StaticQuery } from 'gatsby';
//import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <Link to={post.fields.slug}>
                <article
                  className={`blog-list-item tile is-child box notification}`}
                >
                  <div className="columns is-multiline">
                    <div className="column is-12">
                      <header>
                        <p className="post-meta">
                          <span className="title is-size-4">
                            {post.frontmatter.title}
                          </span>
                        </p>
                      </header>
                      {/* ▼▼▼ 記事本文（一部） ▼▼▼ */}
                      <p style={{ color: 'gray' }}>{post.excerpt}</p>
                      {/* ▼▼▼ 投稿日時 ▼▼▼ */}
                      <span style={{ fontSize: '0.7em', color: 'gray' }}>
                        投稿日：
                      </span>
                      <span className="tag">{post.frontmatter.date}</span>
                      {post.frontmatter.tags && post.frontmatter.tags.length ? (
                        <div className="tags" style={{ paddingTop: '0.3em' }}>
                          <span style={{ fontSize: '0.7em', color: 'gray' }}>
                            タグ：
                          </span>
                          {post.frontmatter.tags.map(tag => (
                            <span
                              key={tag + `tag`}
                              className="tag"
                              style={{ margin: '0', marginRight: '0.5em' }}
                            >
                              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    {/* TODO:サムネイルの表示方法考案と適用
                    <div className="column is-4">
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.title}`
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                    */}
                  </div>
                </article>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
