import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({ image, title, subheading }) => (
  <div>
    <div
      className='full-width-image margin-top-0'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `50%`,
        backgroundAttachment: `scroll`
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column'
        }}
      >
        <h1
          className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
          style={{
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
            color: 'white',
            lineHeight: '1',
            letterSpacing: '1px',
            textAlign: 'center',
            padding: '0.25em'
          }}
        >
          {title}
          <br />
          <span className='has-text-weight-bold is-size-7-mobile is-size-7-tablet is-size-6-widescreen'>
            {subheading}
          </span>
        </h1>
      </div>
    </div>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            {/* 記事一覧 */}
            <div className='content'>
              <BlogRoll />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
      }
    }
  }
`;
