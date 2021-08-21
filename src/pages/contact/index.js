import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import "../../styles/contact.css";
import Img from "gatsby-image";

const ContactPage = ({ data }) => {
  return (
    <Layout pageTitle="Contact">
      <div className="contact pt-5 pb-5">
        <div className="row">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center about-header pt-5 pb-5">
            <h2>CONTACT</h2>
            <hr className="mx-auto" />
            <h6>
              Interested in working with us? Whether it's a simple question or
              your next big idea, great products start with a conversation.
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center pt-5 pb-5">
            <h2>EMAIL US</h2>
            <hr className="mx-auto" />
            <h6>
              For project enquiries please use the form below otherwise please
              email us hello@arctica.io
            </h6>
          </div>

          <div className="col-md-4 text-center pt-5 pb-5">
            <h2>FIND US</h2>
            <hr className="mx-auto" />
            <h6>
              We're based in Shoredich, the closest tube station is Old Street.
            </h6>
            <h6>
              Arctica, <br />
              86-90 Paul Street, <br />
              Shoreditch <br /> London
            </h6>
          </div>
          <div className="col-md-4 text-center pt-5 pb-5">
            <h2>FOLLOW US</h2>
            <hr className="mx-auto" />
            <div className="row d-flex justify-content-center">
              <div className="col-3" style={{ maxWidth: "50px" }}>
                <Link to="https://github.com/">
                  <Img fluid={data.githubLogo.childImageSharp.fluid} />
                </Link>
              </div>
              <div className="col-3" style={{ maxWidth: "50px" }}>
                <Link to="https://twitter.com/">
                  <Img fluid={data.twitterLogo.childImageSharp.fluid} />
                </Link>
              </div>
              <div className="col-3" style={{ maxWidth: "50px" }}>
                <Link to="https://www.linkedin.com/">
                  <Img fluid={data.linkedinLogo.childImageSharp.fluid} />
                </Link>
              </div>
              <div className="col-3" style={{ maxWidth: "50px" }}>
                <Link to="https://www.facebook.com/">
                  <Img fluid={data.facebookLogo.childImageSharp.fluid} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    githubLogo: file(absolutePath: { regex: "/(contact/github-logo.png)/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    twitterLogo: file(absolutePath: { regex: "/(contact/twitter-logo.png)/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    linkedinLogo: file(
      absolutePath: { regex: "/(contact/linkedin-logo.png)/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    facebookLogo: file(
      absolutePath: { regex: "/(contact/facebook-logo.png)/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
