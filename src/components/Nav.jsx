import React from "react";
import styled from "styled-components";

import NavImg from "../images/nav.png";

const NavSection = styled.div`
  background-image: url(${NavImg});
  background-size: contain;
  margin-top:20%;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: left;
  width: 100%;
  height: 40vw;
  position: sticky;
  top:0;
`;

const SectionNav = styled.div`
  position: relative;
  font-size: 1.75em;
  line-height: 1.85em;
  color: white;
  font-weight: bold;
  left: ${(props) => props.left}vw;
`;

const NavText = styled.div`
  margin-top: 25%;
`;

const Nav = () => {
  const sections = {
    news: 7,
    opinion: 10,
    "a&e": 13,
    sports: 8,
    podcasts: 5,
    spectrum: 4,
    photo: 7,
    graphics: 4,
  };
  return (
    <NavSection>
      <NavText>
        {Object.keys(sections).map((section) => (
          <SectionNav left={sections[section]}>{section}</SectionNav>
        ))}
      </NavText>
    </NavSection>
  );
};

export default Nav;
