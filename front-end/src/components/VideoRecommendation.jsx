import { CheckCircle, MoreVert } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function VideoRecommendation() {
  return (
    <Wrapper>
      <Cards>
        <Info>
          <Thumbnail>
            <img src="/images/yt-thumbnail.jpg" alt="thumbnail" />
          </Thumbnail>
          <Details>
            <h4>Which one to choose? | Easy way to use this</h4>
            <p>
              Kevin Powell
              <span>
                <CheckCircle sx={{ width: "12px", height: "12px" }} />
              </span>
            </p>
            <p>161K views · 2 hours ago</p>
          </Details>
        </Info>

        <MoreInfo>
          <MoreVert sx={{ fontSize: 25, cursor: "pointer" }} />
        </MoreInfo>
      </Cards>
    </Wrapper>
  );
}

export default VideoRecommendation;

const Wrapper = styled.div`
  color: white;
  padding: 0 20px;
`;

const Cards = styled.div`
  width: 325px;
  display: flex;
`;

const Info = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 140px;
  height: 90px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  width: 180px;
  height: 90px;
  p,
  h4 {
    margin: 0;
  }
`;

const MoreInfo = styled.div``;
