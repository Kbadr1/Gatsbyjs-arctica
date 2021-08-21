import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../../styles/projectDetails.css";

const ProjectDetails = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_img);
  return (
    <Layout pageTitle={data.mdx.slug}>
      <div className="projectDetails pt-5 pb-5">
        <div className="row">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center about-header pt-5 pb-5">
            <h2>PROJECTS</h2>
            <hr className="mx-auto" />
            <h5>{data.mdx.frontmatter.title}</h5>
          </div>
        </div>
        <div className="text-center">
          <GatsbyImage image={image} />
        </div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default ProjectDetails;

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        description
        hero_img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      slug
    }
  }
`;
