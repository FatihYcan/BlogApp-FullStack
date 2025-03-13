import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog App - About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>About</div>
    </>
  );
};

export default About;
