import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Tokyo React Portfolio Template</title>
    </Helmet>
  );
};

export default PageTitle;
