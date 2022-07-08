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
  width: calc(100vw - 200px);
  margin-top: 50px;
  margin-left: 200px;
  display: flex;
  justify-content: center;
  padding: 30px 0 0 70px;
  background-color: #181818;

  a {
    text-decoration: none;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1500px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 10px;
`;
