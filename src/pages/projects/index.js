import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      <div className="projects pt-5 pb-5">
        <div className="row">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center about-header pt-5 pb-5">
            <h2>PROJECTS</h2>
            <hr className="mx-auto" />
            <h6>
              Attention to detail and quality are paramount to us, we focus on
              building only a few select projects per year.
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center about-header pt-5 pb-5">
            <h2>CONSULTING</h2>
            <hr className="mx-auto" />
          </div>
        </div>
        {data.allMdx.nodes.map((node) => (
          <div
            className="row pt-5 pb-5 d-flex align-items-center justify-content-center text-center"
            key={node.id}
          >
            <div className="col-md-6 pt-5 pb-5">
              <h6>{node.frontmatter.description}</h6>
              <Link to={`/projects/${node.slug}`}>
                <button className="brn">project details</button>
              </Link>
            </div>
            <div className="col-md-6 pt-5 pb-5">
              <Link to={`/projects/${node.slug}`}>
                <GatsbyImage
                  image={
                    node.frontmatter.hero_img.childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/(projects)/" } }) {
      nodes {
        frontmatter {
          title
          description
          hero_img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;
