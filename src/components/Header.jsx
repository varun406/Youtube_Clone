import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Add, Menu, Mic, Notifications, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Wrapper>
      <Heading>
        <GlobalStyle />
        <FirstGroup>
          <Menu sx={{ cursor: "pointer" }} />
          <Link to="/">
            <Logo>
              <img src="/images/youtube.svg" alt="youtube" />
              <h3>Youtube</h3>
            </Logo>
          </Link>
        </FirstGroup>
        <SecondGroup>
          <input type="text" placeholder="Search" />
          <button>
            <Search />
          </button>
          <VoiceSearch>
            <Mic />
          </VoiceSearch>
        </SecondGroup>
        <ThirdGroup>
          <Add />
          <Notifications />
          <Image
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg"
            alt=""
          />
        </ThirdGroup>
      </Heading>
    </Wrapper>
  );
}

export default Header;

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
  body {
    margin:0;
    padding:0;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  & ::-webkit-scrollbar-track {
    background: #181818;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #202020;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Bayon&display=swap");
`;

const Heading = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FirstGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: "Bayon", sans-serif;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
`;

const SecondGroup = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 40rem;
    height: 2.4rem;
    background-color: #121212;
    color: white;
    outline: none;
    padding: 0.5rem;
    font-size: 16px;
    border: none;
  }

  button {
    width: 3.5rem;
    height: 2.4rem;
    border: none;
    outline: none;
    background-color: #2c2c2c;
    color: white;
    cursor: pointer;
  }
`;

const VoiceSearch = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #121212;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ThirdGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
