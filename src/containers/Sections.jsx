import React from "react";
import styled from "styled-components";

import Letter from "../components/Letter";
import Nav from "../components/Nav";
import WritingSection from "./WritingSection";
import VisualSection from "./VisualSection";

import WritingData from "../utils/WritingData";
import VisualData from "../utils/VisualData";

const Columns = styled.div`
  display: flex;
`;
const NavColumn = styled.div`
  width: 25%;
`;

const ArticleColumn = styled.div`
  width: 75%;
`;

const Sections = () => {
  console.log(WritingData["Photo"]);
  return (
    <Columns>
      <NavColumn>
        <Nav />
      </NavColumn>
      <ArticleColumn>
        <Letter />
        {Object.keys(WritingData).map((key) => (
          <WritingSection title={key} articles={WritingData[key]} />
        ))}
      </ArticleColumn>
    </Columns>
  );
};

export default Sections;
