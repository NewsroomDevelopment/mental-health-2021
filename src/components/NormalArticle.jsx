import React from "react";
import styled from "styled-components";

const ArticleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;

const ArticleImg = styled.img`
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 24px 0px;
  position: static;
  width: 300px;
  height: 219px;
  left: 8px;
  top: 8px;
  background: url(.jpg), #c4c4c4;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 10px 10px;
`;

const ArticleText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12px 0px;
`;

const Title = styled.p`
  font-family: Bitter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
`;

const Author = styled.p`
  font-family: Bitter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`;

const NormalArticle = ({ article }) => {
  console.log(article);
  return (
    <ArticleWrap>
      <Link href={article.link} target="_blank" rel="noreferrer">
        <ArticleImg src={article.image} />
        <ArticleText>
          <Title>{article.title}</Title>
          <Author>{article.author}</Author>
        </ArticleText>
      </Link>
    </ArticleWrap>
  );
};

export default NormalArticle;
