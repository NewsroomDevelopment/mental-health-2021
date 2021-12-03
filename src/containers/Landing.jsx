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
  background-repeat: no-repeat;
`;

const Header = styled.div`
  color: white;
  margin-top: 6rem;
  margin-right: 1rem;
  position: relative;
  top: 15%;
  line-height: 10em;
  width: 50%;
  left: 8%;
  font-family: montserrat;
  & > h1 {
    font-size: 6rem;
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
            <h1>Mental health on campus</h1>
          </Header>
        </TitleWrapper>
      </Desktop>
      <MobileAndTablet>
        <TitleWrapper img={ImgSrc_mobile}>
          <Header>
            <h1 style={{ "line-height": "5em" }}>Mental health on campus</h1>
          </Header>
        </TitleWrapper>
      </MobileAndTablet>
    </div>
  );
};

export default Landing;
