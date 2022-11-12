import React from "react";
import Header from "../components/Header";
import styled, { createGlobalStyle } from "styled-components";
import Play from "../components/Play";
import VideoRecommendation from "../components/VideoRecommendation";

function Watch() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Play />
      </Content>
    </Wrapper>
  );
}

export default Watch;

const Wrapper = styled.div`
  width: 100vw;
  background-color: #181818;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;
