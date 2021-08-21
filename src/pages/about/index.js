import React from "react";
import Layout from "../../components/Layout";
import "../../styles/about.css";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const AboutPage = ({ data }) => {
  return (
    <Layout pageTitle="About">
      <div className="about pt-5 pb-5">
        {/* about header */}
        <div className="row">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center about-header pt-5 pb-5">
            <h2>ABOUT ARCTICA</h2>
            <hr className="mx-auto" />
            <h6>
              Arctica was founded to help both startups and established
              companies build quality online products and digital experiences
              using next generation web technologies.
            </h6>
          </div>
        </div>
        {/* how we work */}
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 pt-5 pb-5 text-center">
            {/* <img src="/office.svg" alt="office" /> */}
            <Img fixed={data.howWeWork.childImageSharp.fixed} />
          </div>
          <div className="col-md-6 pt-5 pb-5 text-center">
            <h2>HOW WE WORK</h2>
            <hr className="mx-auto" />
            <h6 className="text-start">
              Based in London's tech hub Shoreditch, Arctica specialises in
              purpose-built web sites and progressive web applications with user
              optimal experiences, perfectly tailored to meet the objectives of
              your business.
              <br /> <br /> Instead of being sales driven, we focus on long-term
              business value and quality in our services which always results in
              repeat business.
              <br /> <br /> With a strong preference for agile methodologies and
              open source technology, we like to keep things lean, only taking
              on a select few projects per year which means we can take the time
              to get things right.
            </h6>
            <Link to="/services">
              <button className="btn-light">see services</button>
            </Link>
          </div>
        </div>
        {/* technology */}

        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center pt-5 pb-5">
            <h2>technology</h2>
            <hr className="mx-auto" />
            <h6>
              We'll carefully pair the right frameworks and platforms with your
              business objectives.
            </h6>
          </div>
          <div className="col-12  about-technology-images pb-5">
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

export default AboutPage;

export const query = graphql`
  query {
    howWeWork: file(relativePath: { regex: "/(about/office.png)/" }) {
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
