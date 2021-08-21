import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import "../styles/home.css";
import Img from "gatsby-image";

const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <div className="home pt-5 pb-5 ">
        {/* home header */}
        <div className="row">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center home-header pt-5 pb-5">
            <h2>ARCTICA IS A FOCUSED VENTURE STUDIO</h2>
            <hr className="mx-auto" />
            <Link to="/about">
              <button className="btn-light">about us</button>
            </Link>
          </div>
        </div>
        {/* home services */}
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 text-center pt-5 pb-5 ">
            <h2>services</h2>
            <hr className="mx-auto" />
            <h6>
              We're able to work with you as a development partner for the
              entire lifetime of your project, or as an on-demand consultancy
              for specific project areas.
            </h6>
            <Link to="/services">
              <button className="btn-light">see services</button>
            </Link>
          </div>
          <div className="col-md-6 pt-5 pb-5 text-center">
            <Img fixed={data.servicesImage.childImageSharp.fixed} />
          </div>
        </div>
        {/* home technology */}
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center pt-5 ">
            <h2>technology</h2>
            <hr className="mx-auto" />
            <h6>
              We'll carefully pair the right frameworks and platforms with your
              business objectives.
            </h6>
          </div>
          <div className="col-12  services-technology-images pb-5">
            <div className="row  d-flex align-items-center justify-content-center">
              {data.technologiesImages.edges.map((edge) => (
                <div className="col-lg-2 col-md-4 col-6 p-5" key={edge.node.id}>
                  <Img fluid={edge.node.childImageSharp.fluid} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* home projects */}
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 pt-5 pb-5 text-center">
            <Img fixed={data.projectsImage.childImageSharp.fixed} />
          </div>
          <div className="col-lg-6 pt-5 pb-5 text-center">
            <h2>projects</h2>
            <hr className="mx-auto" />
            <h6>
              Attention to detail and quality are paramount to us, we focus on
              building only a few select projects per year.
            </h6>
            <Link to="/services">
              <button className=" btn-light">see projects</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query {
    servicesImage: file(relativePath: { regex: "/(home/application.png)/" }) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }

    projectsImage: file(relativePath: { regex: "/(home/work.png)/" }) {
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
