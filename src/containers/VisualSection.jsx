import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import NormalArticle from "../components/NormalArticle";

const VisualSection = ({ title, articles }) => {
  console.log(articles);
  return (
    <>
      <SectionTitle title={title} />
      {articles.map((article) => (
        <NormalArticle article={article} />
      ))}
    </>
  );
};

export default VisualSection;
