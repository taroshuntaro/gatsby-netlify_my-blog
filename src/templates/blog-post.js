import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import 'gatsby-remark-vscode/styles.css';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <span style={{ fontSize: '1em', color: 'gray' }}>{date}</span>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {tags && tags.length ? (
              <div className="tags">
                {tags.map(tag => (
                  <span
                    key={tag + `tag`}
                    className="tag"
                    style={{
                      margin: '0',
                      marginRight: '0.5em',
                      marginBottom: '1rem'
                    }}
                  >
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </span>
                ))}
              </div>
            ) : null}
            <PostContent content={content} className="blog-post-content" />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  ogType: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            {/* header内の下記情報を書き換える */}
            <title>{`${post.frontmatter.title}`}</title>
            <meta property="og:type" content={post.frontmatter.ogType} />
            <meta
              property="og:title"
              content={`${post.frontmatter.title} | Blog`}
            />
            <meta property="og:url" content={post.fields.slug} />
            <meta name="description" content={post.frontmatter.description} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
        description
        ogType
        tags
      }
      fields {
        slug
      }
    }
  }
`;
