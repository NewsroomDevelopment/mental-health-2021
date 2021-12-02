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
  position: static;
  width: 316px;
  height: 219px;
  left: 16px;
  top: 16px;

  background: #C4C4C4;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.15);
  border-radius: 50px 10px 10px 50px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 40px;
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


const SideArticle = ({ article } ) => {
  return (
    <ArticleWrap>
    <Link href={article.article_link} target="_blank" rel="noreferrer">
        <ArticleImg src={article.image_url} />
        <ArticleText>
            <Title>{article.article_title}</Title>
            <Author>{article.article_authors}</Author>
        </ArticleText>
        </Link>
    </ArticleWrap>
  )
};

export default SideArticle;
