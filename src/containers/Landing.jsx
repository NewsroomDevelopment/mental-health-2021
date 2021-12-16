import React from "react";
import styled from "styled-components";
import ImgSrc_mobile from "../images/desktop_background.png";
import ImgSrc_desktop from "../images/desktop_background.png";
import { Desktop, MobileAndTablet } from "react-responsive-simple";

import { device } from "../device";

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

  @media ${device.mobile} {
    background-position: 40%;
  }
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

  h1 {
    font-size: 5rem;
  }
  @media ${device.mobile} {
    line-height: 1em !important;
    margin-top: -2rem;
    h1 {
      font-size: 3rem !important;
    }
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
            <h1 style={{ "line-height": "2em" }}>Mental health on campus</h1>
          </Header>
        </TitleWrapper>
      </MobileAndTablet>
    </div>
  );
};

export default Landing;
