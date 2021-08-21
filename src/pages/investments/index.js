import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import "../../styles/investments.css";
import { GatsbyImage } from "gatsby-plugin-image";

const InvestmentsPage = ({ data }) => {
  return (
    <Layout pageTitle="Investments">
      <div className="investments pt-5 pb-5">
        <div className="row">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center about-header pt-5 pb-5">
            <h2>INVESTMENTS</h2>
            <hr className="mx-auto" />
            <h6>
              We make select investments into both early stage startups and
              established companies as part of a global, highly diverse all
              technology portfolio.
            </h6>
          </div>
        </div>
        <div className="row">
          {data.allMdx.nodes.map((node) => (
            <div className="col-md-6 pt-5 pb-5 investments-box" key={node.id}>
              <div className="row">
                <div className="col-3 offset-5 mb-4">
                  <GatsbyImage
                    image={
                      node.frontmatter.hero_img.childImageSharp.gatsbyImageData
                    }
                  />
                </div>
              </div>
              {node.frontmatter.tags.map((tag) => (
                <span>{tag}</span>
              ))}
              <h6>{node.frontmatter.description}</h6>
              <Link to={`/investments/${node.slug}`}>
                <button className="btn-light">details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default InvestmentsPage;

export const query = graphql`
  {
    allMdx(filter: { fileAbsolutePath: { regex: "/(investments)/" } }) {
      nodes {
        frontmatter {
          title
          description
          hero_img {
            childImageSharp {
              gatsbyImageData
            }
          }
          tags
        }
        id
        slug
      }
    }
  }
`;
