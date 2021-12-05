import React from "react";
import styled from "styled-components";


const ArticleWrap = styled.div`
  width: 1000px;
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
  width:100%;
  height:100%;
  border-radius: 43.8822px;
`;

const ArticleText = styled.div`
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

const Title = styled.p`

width: 863.64px;
height: 180.91px;
left: 49.09px;
top: 300.91px;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 50.2115px;
line-height: 70px;

color: #FFFFFF;

text-shadow: 5.26586px 5.26586px 3.51057px rgba(0, 0, 0, 0.4);
`;

const Author = styled.p`

float:right;
top:0;
right:0;

width: 100px;
height: 100px;

font-family: Bitter;
font-style: normal;
font-weight: bold;
font-size: 25px;
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
      <Link href={article.link} target="_blank" rel="noreferrer">
        <ArticleImg src={article.img} />
        <ArticleText>
          <Title>{article.title}</Title>
        </ArticleText>
      </Link>
    </ArticleWrap>

  );
};

export default BigArticle;
