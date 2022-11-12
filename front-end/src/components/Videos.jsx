import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
function Videos() {
  return (
    <Wrapper>
      <Content>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
        <Link to="/watch">
          <Card />
        </Link>
      </Content>
    </Wrapper>
  );
}

export default Videos;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  background-color: #0f0f0f;

  a {
    text-decoration: none;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 2250px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 10px;
  place-items: center;

  @media only screen and (max-width: 650px) {
    gap: 0;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }

  @media only screen and (max-width: 833px) {
    width: 40rem;
    flex-direction: row;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    gap: 20px;
  }
`;
