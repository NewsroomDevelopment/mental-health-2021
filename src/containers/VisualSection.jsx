import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import NormalArticle from "../components/NormalArticle";

const VisualSection = ({ title, articles, linePosition }) => {
  console.log(articles);
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a id={title} style={{ "text-decoration": "none" }}>
        <SectionTitle id={title} title={title} linePosition={linePosition} />{" "}
      </a>
      {articles.map((article) => (
        <NormalArticle article={article} />
      ))}
    </>
  );
};

export default VisualSection;
