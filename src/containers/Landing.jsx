import React from "react";
import styled from "styled-components";
import ImgSrc_mobile from "../images/desktop_background.png";
import ImgSrc_desktop from "../images/desktop_background.png";
import { Desktop, MobileAndTablet } from "react-responsive-simple";

const TitleWrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 120vh;
  display: flex;
  justify-content: space-between;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;
  
`;

const Header = styled.div`
  color: white;
  text-transform: uppercase;
  margin-top: 6rem;
  margin-right: 1rem;
  position: absolute;
  top: 8px;
  line-height: 1em;
  right: 16px;
  font-family: brandon-grotesque;
  & > h1 {
    font-size: 4rem;
  }
  @media only screen and (max-width: 1024px) {
    word-wrap: break-word;
    color: white;
    & > h1 {
      font-size: 2.5rem;
    }
  }
  @media only screen and (max-width: 500px) {
    margin: 3rem 3rem;
    text-align: center;
  }
`;

const Landing = () => {
  return (
    <div>
      <Desktop>
        <TitleWrapper img={ImgSrc_desktop}>
          <Header>
            <h1>Homecoming 2021</h1>
          </Header>
        </TitleWrapper>
      </Desktop>
      <MobileAndTablet>
        <TitleWrapper img={ImgSrc_mobile}>
          <Header>
            <h1 style={{ "line-height": "1.5em" }}>Homecoming 2021</h1>
          </Header>
        </TitleWrapper>
      </MobileAndTablet>
    </div>
  );
};

export default Landing;
