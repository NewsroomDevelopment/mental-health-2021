import React from "react";
import styled from "styled-components";
const ArticleWrap = styled.div`
  position: absolute;
  width: 920px;
  height: 601.82px;
  left: 0px;
  top: 0px;
  filter: drop-shadow(6.1435px 6.1435px 14.9199px rgba(0, 0, 0, 0.25));
  border-radius: 43.8822px;
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

  background: url(.jpg), #C4C4C4;
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
  position: absolute;
  width: 863.64px;
  height: 180.91px;
  left: 49.09px;
  top: 380.91px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 70.2115px;
  line-height: 86px;

  color: #FFFFFF;

  text-shadow: 5.26586px 5.26586px 3.51057px rgba(0, 0, 0, 0.4);
`;

const Author = styled.p`
  position: static;
  width: 230px;
  height: 43px;
  left: 43px;
  top: 0px;

  font-family: Bitter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 0.02em;

  /* Blue 03 */

  color: #1C7AA7;

  transform: rotate(90deg);

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 40px 0px;
`;

const Rectangle = styled.div`
  /* Rectangle 20 */


  position: static;
  width: 2px;
  height: 320px;
  left: 20.5px;
  top: 270px;

  /* Blue 03 */

  background: #1C7AA7;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 40px 0px;
`;
const BigArticle = ({ article } ) => {
  return (
    <ArticleWrap>
    <Link href={article.article_link} target="_blank" rel="noreferrer">
        <ArticleImg src={article.image_url} />
        <Title>{article.article_title}</Title>
        <Author>{article.article_authors}</Author>
        <Rectangle></Rectangle>
        </Link>
    </ArticleWrap>
  )
};

export default BigArticle;
