import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import Article from "../components/Article"


const WritingSection = ({ title, articles }) => {
  console.log(articles);
  return (
    <>
      <SectionTitle title={title} />
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </>
  );
};

export default WritingSection;
