import { CheckCircle, MoreVert } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Card() {
  return (
    <Cards
      whileHover={{ scale: 1.2 }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.5,
      }}
    >
      <Thumbnail>
        <img src="/images/yt-thumbnail.jpg" alt="thumbnail" />
      </Thumbnail>
      <Details>
        <Channel>
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg"
            alt="channel"
          />
        </Channel>
        <Info>
          <h3>Which one to choose? | Easy way to use this</h3>
          <About>
            <p>Kevin Powell</p>
            <CheckCircle fontSize="small" />
          </About>
          <Record>
            <p>161K views · 2 hours ago</p>
          </Record>
        </Info>
        <MoreInfo>
          <MoreVert sx={{ fontSize: 25, cursor: "pointer" }} />
        </MoreInfo>
      </Details>
    </Cards>
  );
}

export default Card;

const Cards = styled(motion.div)`
  width: 19rem;
  height: 19rem;
  color: white;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 833px) {
    width: 45rem;
    height: 10rem;
    flex-direction: row;
    gap: 10px;
  }

  @media only screen and (max-width: 650px) {
    width: 19rem;
    height: 17rem;
    flex-direction: column;
    gap: 0px;
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 10.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  @media only screen and (max-width: 833px) {
    width: 16rem;
    height: 8rem;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 10.5rem;
  }
`;

const Details = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 7px;

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;

    @media only screen and (max-width: 833px) {
      font-size: 1.2rem;
    }

    @media only screen and (max-width: 650px) {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

const Channel = styled.div`
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  @media only screen and (max-width: 833px) {
    display: none;
  }

  @media only screen and (max-width: 650px) {
    display: block;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;

  @media only screen and (max-width: 833px) {
    justify-content: flex-start;
    gap: 5px;
  }

  @media only screen and (max-width: 650px) {
    justify-content: center;
    gap: 2px;
  }
`;

const Record = styled.div`
  p {
    margin: 0;
    color: #636363;
    font-size: 12px;
  }
`;

const About = styled(Record)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MoreInfo = styled.div`
  visibility: hidden;

  &:hover + ${Details} {
    visibility: visible;
  }
`;
