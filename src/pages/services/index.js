import React from "react";
import Layout from "../../components/Layout";
import "../../styles/services.css";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const ServicesPage = ({ data }) => {
  return (
    <Layout pageTitle="Services">
      <div className="services pt-5 pb-5">
        {/* services header */}
        <div className="row">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center about-header pt-5 pb-5">
            <h2>SERVICES</h2>
            <hr className="mx-auto" />
            <h6>
              We'll work with you as a development partner for the entire
              lifetime of your project, or as an on-demand consultancy for
              specific project areas.
            </h6>
          </div>
        </div>
        {/* product development */}
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 pt-5 pb-5 text-center">
            <h2>PRODUCT DEVELOPMENT</h2>
            <hr className="mx-auto" />
            <h6>
              BWe specialise in purpose-built web sites and progressive web
              applications with user optimal experiences, perfectly tailored to
              meet the objectives of your business.
            </h6>
            <Link to="/contact">
              <button className="btn-light">enquire</button>
            </Link>
          </div>
          <div className="col-md-6 pt-5 pb-5 text-center">
            <Img fixed={data.productDevelopmentImage.childImageSharp.fixed} />
          </div>
        </div>
        {/* product platforms */}
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 pt-5 pb-5 text-center">
            <Img fixed={data.productPlatformImage.childImageSharp.fixed} />
          </div>
          <div className="col-md-6 pt-5 pb-5 text-center">
            <h2>PRODUCT PLATFORM</h2>
            <hr className="mx-auto" />
            <h6>
              We can provide managed, highly available, scalable cloud hosting
              solutions built on top of Amazon Web Services for the ultimate
              availability, redundancy and speed.
            </h6>
            <Link to="/contact">
              <button className="btn-light">enquire</button>
            </Link>
          </div>
        </div>
        {/* technologies */}
        <div className="row">
          <div className="col-12  home-technology-images pt-5 pb-5">
            <div className="row  d-flex align-items-center justify-content-center">
              {data.technologiesImages.edges.map((edge) => (
                <div className="col-lg-2 col-md-4 col-6 p-5" key={edge.node.id}>
                  <Img fluid={edge.node.childImageSharp.fluid} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;

export const query = graphql`
  query {
    productDevelopmentImage: file(
      relativePath: { regex: "/(home/application.png)/" }
    ) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    productPlatformImage: file(
      relativePath: { regex: "/(services/servers.png)/" }
    ) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    technologiesImages: allFile(
      filter: { absolutePath: { regex: "/(images/technologies)/" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
