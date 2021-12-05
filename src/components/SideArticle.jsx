import React from "react";
import styled from "styled-components";

const ArticleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 70rem;
    margin: 1rem;
    padding-bottom:40px;
    
`;

const Link = styled.a`
    text-decoration: none;
    width: inherit;
`;

const ArticleImgLeft = styled.img`
  float: left;
  position: static;
  width: 316px;
  height: 219px;
  left: -10px;
  top: 16px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.15);
  border-radius: 50px 10px 10px 50px;
  
  /* Inside Auto Layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 40px;
  margin-right: 0px;
`;

const ArticleImgRight = styled.img`
  float: right;

  position: static;
  width: 316px;
  height: 219px;
  left: 664px;
  top: 16px;

  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px 50px 50px 10px;
  
  /* Inside Auto Layout */
  
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left:0px;

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
  margin-left: 0px;
  margin-right: 0px;
  float: left;
  width: 40rem;
`;

const Title = styled.p`
  font-family: Bitter;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 38px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Author = styled.p`
  font-family: Bitter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 29px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`;


const SideArticle = ({ article, left } ) => {
  if (left) {
    return (
      <ArticleWrap>
        <Link href={article.link} target="_blank" rel="noreferrer">
          <ArticleImgLeft src={article.img} />
          <ArticleText style={{float: "right"}}>
            <Title>{article.title}</Title>
            <Author>{article.author}</Author>
          </ArticleText>
        </Link>
      </ArticleWrap>
    )
  } else { 
    return (
      <ArticleWrap>
        <Link href={article.link} target="_blank" rel="noreferrer">
          <ArticleImgRight src={article.img} />
          <ArticleText float={'left'}>
            <Title>{article.title}</Title>
            <Author>{article.author}</Author>
          </ArticleText>
        </Link>
      </ArticleWrap>
    )
  }
};

export default SideArticle;
