import React from "react";
import "../styles/footer.css";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="container text-center pt-5 pb-5 mb-5">
      <h4>INTERESTED IN WORKING WITH ARCTICA?</h4>
      <hr className="mx-auto" />
      <h6>
        Whether it's a simple question or your next big idea, great products
        start with a conversation.
      </h6>
      <Link to="/contact">
        <button className="btn-dark">lets talk</button>
      </Link>
    </footer>
  );
};

export default Footer;
