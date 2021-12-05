import React from "react";
import styled from "styled-components";
import NormalArticle from "./NormalArticle";
import SideArticle from "./SideArticle";

const Article = ({ article }) => {
  if (article.type === "normal") {
    return <NormalArticle article={article} />;
  } else if (article.type === "left") {
    return <SideArticle article={article} left={true} />;
  } else {
    return <SideArticle article={article} left={false} />;
  }
};

export default Article;
