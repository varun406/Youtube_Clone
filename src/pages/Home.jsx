import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Videos from "../components/Videos";
function Home() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Sidebar />
        <Videos />
      </Content>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  background-color: #181818;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap");
  font-family: "Rubik", sans-serif !important;
`;
