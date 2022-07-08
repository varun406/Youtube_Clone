import { CheckCircle, MoreVert } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
function Card() {
  return (
    <Cards>
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

const Cards = styled.div`
  width: 20rem;
  height: 20rem;
  color: white;
  cursor: pointer;
`;
const Thumbnail = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 7px;
  h3 {
    margin: 0;
    padding: 0 5px 0;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Channel = styled.div`
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
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

  &:hover ${Details} {
    visibility: visible;
  }
`;
