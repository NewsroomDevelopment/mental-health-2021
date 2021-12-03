import React from "react";
import styled from "styled-components";
import CreditsImg from "../images/credits.png";

const CreditsSection = styled.div`
  background-image: url(${CreditsImg});
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CreditsTitle = styled.div`
  text-align: center;
  color:white;
  position:relative;
  top:17.5%;
  font-size:5rem;
`;

const Credits = () => {
  return (
    <CreditsSection>
      <CreditsTitle>credits</CreditsTitle>
    </CreditsSection>
  );
};

export default Credits;
