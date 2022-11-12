import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Add, Menu, Mic, Search, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

function Header({ setSideBarOpen, setIsLogin }) {
  const { user } = useSelector((state) => state.user);

  const toggleSidebar = () => {
    setSideBarOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Heading>
        <GlobalStyle />
        <FirstGroup>
          <Menu
            sx={{ cursor: "pointer", height: "40px" }}
            onClick={toggleSidebar}
          />
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
          <AddVideo>
            <Add />
          </AddVideo>

          {/* <Image
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg"
            alt=""
          /> */}
          {user ? (
            <AccountCircle
              sx={{
                width: "40px",
                height: "40px",
                color: "skyBlue",
                cursor: "pointer",
              }}
            />
          ) : (
            <Button
              variant="outlined"
              onClick={() => setIsLogin(true)}
              size="small"
            >
              Sign in
            </Button>
          )}
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
    background: #0f0f0f;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #0f0f0f;
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
  gap: 25px;
`;

const FirstGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
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

  font-size: 1.4rem;

  img {
    width: 40px;
    height: 40px;
  }

  @media only screen and (max-width: 500px) {
    h3 {
      display: none;
    }
  }
`;

const VoiceSearch = styled.div`
  width: 3.5rem;
  height: 2.6rem;
  border-radius: 50%;
  background-color: #121212;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SecondGroup = styled.div`
  display: flex;
  align-items: center;
  width: max(50rem, 10rem);

  input {
    width: 100%;
    height: 2.6rem;
    background-color: #121212;
    color: white;
    outline: none;
    padding: 0.7rem;
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid #2c2c2c;
    border-radius: 25px 0 0 25px;
  }

  button {
    width: 3.5rem;
    height: 2.6rem;
    border: none;
    outline: none;
    background-color: #2c2c2c;
    color: white;
    cursor: pointer;
    border-radius: 0 25px 25px 0;
    display: grid;
    place-items: center;
  }

  @media only screen and (max-width: 768px) {
    ${VoiceSearch} {
      display: none;
    }
  }
`;

const ThirdGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const AddVideo = styled.div`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
