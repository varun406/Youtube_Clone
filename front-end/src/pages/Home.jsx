import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Videos from "../components/Videos";
import { motion } from "framer-motion";
import Login from "../components/Login";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.user);
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    user && setIsLogin(false);
  }, [user]);

  return (
    <Wrapper>
      <Header setSideBarOpen={setSideBarOpen} setIsLogin={setIsLogin} />
      <Content>
        <Left animate={{ x: isSideBarOpen ? 0 : -200 }}>
          <Sidebar />
        </Left>
        <Right isSideBarOpen={isSideBarOpen}>
          {isLogin ? <Login /> : <Videos />}
        </Right>
      </Content>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  background-color: #0f0f0f;
  position: relative;
  overflow-x: hidden;
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap");
  font-family: "Rubik", sans-serif !important;
`;

const Content = styled.div`
  width: 100vw;
  display: flex;
`;

const Left = styled(motion.div)``;

const Right = styled.div`
  width: ${(props) => (props.isSideBarOpen ? `calc(100vw - 220px)` : `100vw`)};
  margin-left: ${(props) => (props.isSideBarOpen ? `220px` : 0)};
  display: flex;
  justify-content: center;
`;
