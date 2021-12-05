import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

import BigArticle from "../components/BigArticle";

const VisualSection = ({ title, articles }) => {
  console.log(articles);
  return (
    <>
      <SectionTitle title={title} />
      {articles.map((article) => (
        <BigArticle article={article} />
      ))}
    </>
  );
};

export default VisualSection;
