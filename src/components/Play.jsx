import {
  BookmarkAddedOutlined,
  CheckCircle,
  NotificationsActive,
  SendOutlined,
  ThumbDownOutlined,
  ThumbUpOutlined,
  VolunteerActivismOutlined,
} from "@mui/icons-material";
import styled, { createGlobalStyle } from "styled-components";
import VideoRecommendation from "./VideoRecommendation";
import { ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import storage from "../firebase";

function Play() {
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "sample-video.mp4"))
      .then((url) => {
        setVideoURL(url);
        console.log("Nice");
      })
      .catch((err) => {
        alert("Some error occurred: " + err.message);
      });
  }, [videoURL]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Player>
        <Video src={videoURL} type="mp4" controls />

        <h2>
          I've been challenged to a CSS Battle rematch | Can I beat him again???{" "}
        </h2>
        <Details>
          <p>757,657 views · Feb 25,2021 </p>
          <Functions>
            <LikeCount>
              <ThumbUpOutlined />
              <h4>17K</h4>
            </LikeCount>
            <ThumbDownOutlined />

            <SendOutlined />

            <VolunteerActivismOutlined />

            <BookmarkAddedOutlined />
          </Functions>
        </Details>
        <hr />
        <ChannelDetails>
          <Channel>
            <img
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg"
              alt="channel"
            />
            <About>
              <p class="channelName">
                Kevin Powell
                <span>
                  <CheckCircle sx={{ width: "15px", height: "15px" }} />
                </span>
              </p>

              <p>556K subscribers</p>
            </About>
          </Channel>
          <Subscribe>
            <button>SUBSCRIBE</button>
            <NotificationsActive />
          </Subscribe>
        </ChannelDetails>
        <Description>
          <p>
            A rematch between me and @Web Dev Simplified at
            <a href=" https://cssbattle.dev"> https://cssbattle.dev</a>
          </p>
          <p>
            The first battle:
            <a href="https://youtu.be/-QgJgZCJvo4">
              https://youtu.be/-QgJgZCJvo4
            </a>
          </p>
        </Description>
        <hr></hr>
      </Player>

      <Recommendation>
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
        <VideoRecommendation />
      </Recommendation>
    </Wrapper>
  );
}

export default Play;

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
  width: 1500px;
  margin-top: 60px;
  padding: 20px;
  font-weight: 300px;
  display: flex;
  gap: 5px;
  justify-content: center;
  color: white; //dark mode

  hr {
    border-top: 1px solid grey;
  }

  p {
    font-size: 12px;
  }

  h4 {
    padding-left: -7px;
  }

  /* @media (min-width: 768px) {
    flex-direction: column;
  } */
`;

const Player = styled.div`
  width: 80%;
  min-width: 60%;
`;

const Video = styled.video`
  width: 100%;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Functions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const LikeCount = styled(Functions)`
  gap: 7px;
`;

const ChannelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Channel = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Subscribe = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    width: 100px;
    height: 30px;
    background-color: #514f4f;
    outline: none;
    border: none;
    font-weight: bold;
    color: lightgrey;
    cursor: pointer;
  }
`;

const About = styled.div`
  .channelName {
    font-weight: 600;
  }

  span {
    margin-left: 3px;
  }
`;

const Description = styled.div`
  p {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: skyblue;
  }
`;

const Recommendation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
