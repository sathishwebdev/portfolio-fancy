import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {

    const defaultTitle = "Sathish Kumar S | Full-Stack Developer | Sathishwebdev";
  const defaultDescription = 
    "Sathish is a highly skilled full-stack developer specializing in React, JavaScript, and Android java. Explore top-notch projects and innovative solutions.";
  const defaultKeywords = 
    " sathishwebdev, sathish webdev, Full-Stack Developer, UI/UX Designer, React Developer, Web Development, JavaScript, Portfolio, Frontend, Backend, Sathish";


  return (
    <Helmet>
    {/* Dynamic Title */}
    <title>{title || defaultTitle}</title>

    {/* SEO Meta Tags */}
    <meta name="description" content={description || defaultDescription} />
    <meta name="keywords" content={keywords || defaultKeywords} />
    <meta name="author" content="Sathish Kumar S" />

    {/* Open Graph (for Facebook, LinkedIn, etc.) */}
    <meta property="og:title" content={title || defaultTitle} />
    <meta property="og:description" content={description || defaultDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={window.location.href} />

    {/* Twitter Cards */}
    <meta name="twitter:title" content={title || defaultTitle} />
    <meta name="twitter:description" content={description || defaultDescription} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
  );
};

export default SEO;
