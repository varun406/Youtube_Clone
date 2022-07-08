import {
  Home,
  Explore,
  VideoLibrary,
  Subscriptions,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUp,
  Settings,
  Report,
  Help,
  Feedback,
  SlowMotionVideo,
  WorkspacePremium,
  LocalMovies,
  SportsEsports,
  LiveTv,
  CellTower,
  Checkroom,
  Lightbulb,
  EmojiEvents,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <Wrapper>
      <Side>
        <Section>
          <ul>
            <li class="active">
              <Home />
              Home
            </li>
            <li>
              <Explore />
              Explore
            </li>
            <li>
              <SlowMotionVideo />
              Shorts
            </li>
            <li>
              <Subscriptions />
              Subscriptions
            </li>
          </ul>
        </Section>
        <hr></hr>
        <Features>
          <ul>
            <li>
              <VideoLibrary />
              Library
            </li>
            <li>
              <History />
              History
            </li>
            <li>
              <OndemandVideo />
              Your videos
            </li>
            <li>
              <WatchLater />
              Watch later
            </li>
            <li>
              <ThumbUp />
              Liked videos
            </li>
          </ul>
        </Features>
        <hr></hr>
        <Subscription>
          <h5>SUBSCRIPTIONS</h5>
          <ul>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>

            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
            <li>
              <img
                class="channel_logo"
                src="https://i.ytimg.com/vi/GrOTZ3wts_I/maxresdefault.jpg"
                alt="channel"
              />
              Kevin Powell
            </li>
          </ul>
        </Subscription>
        <hr></hr>
        <More>
          <h5>MORE FROM YOUTUBE</h5>
          <ul>
            <li>
              <WorkspacePremium />
              Youtube Premium
            </li>
            <li>
              <LocalMovies />
              Movies
            </li>
            <li>
              <SportsEsports />
              Gaming
            </li>
            <li>
              <CellTower />
              Live
            </li>
            <li>
              <Checkroom />
              Fashion & Beauty
            </li>
            <li>
              <Lightbulb />
              Learning
            </li>
            <li>
              <EmojiEvents />
              Sports
            </li>
          </ul>
        </More>
        <hr></hr>
        <Common>
          <ul>
            <li>
              <Settings />
              Settings
            </li>
            <li>
              <Report />
              Report history
            </li>
            <li>
              <Help />
              Help
            </li>
            <li>
              <Feedback />
              Send feedback
            </li>
          </ul>
        </Common>
      </Side>
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.div`
  background-color: #202020;
  height: calc(100vh - 50px);
  margin-top: 50px;
  justify-content: center;
  font-size: 1rem;
  padding: 7px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
`;

const Side = styled.div`
  width: 200px;
  color: white;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
    padding: 7px;
    text-align: center;
    list-style: none;
    margin-left: 10px;
    cursor: pointer;

    .channel_logo {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }

  li.active {
    background-color: #353535;
  }

  li:hover {
    background-color: #514f4f;
  }

  hr {
    opacity: 0.5;
  }
  h5 {
    margin-left: 15px;
    color: #939393;
    font-weight: bold;
    font-size: 14px;
  }
`;
const Section = styled.div``;

const Features = styled.div``;

const Subscription = styled.div`
  height: 20rem;
  overflow: scroll;
  overflow-x: hidden;
`;

const More = styled.div``;

const Common = styled.div``;
