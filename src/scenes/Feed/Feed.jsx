import React from "react";
import Post from "../../components/posts/Post";
import { styled } from "styled-components";
import { Avatar } from "../../../src/components/pictures/Avatar";
import { Input } from "../../../src/components/inputs/input";
import { BsImages, BsEmojiSunglasses } from "react-icons/bs";
import { IconButton } from "../../../src/components/buttons/IconButton";
import { Button } from "../../../src/components/buttons/button";
import { device } from "@/style/Breakpoints";

const StyledFeed = styled.div`
  margin-top: 56px;
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-rows: minmax(20px, auto);
  justify-content: center;

  @media ${device.lg}{
    grid-template-columns: repeat(auto-fill, 325px);
    }
  @media ${device.md}{
    grid-template-columns: repeat(auto-fill, 300px);
  }
  @media ${device.sm}{
    justify-content: space-around;
    grid-template-columns: repeat(auto-fill, 48vw);
    grid-gap: 0;
  }
`;

const SharePost = styled.div`
  position: relative;
  margin: auto;
  margin-top: 24px;
  width: 875px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 8px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Feed = () => {
  return (
    <Wrapper>
      {/* <SharePost>
        <div style={{ display: "flex", gap: "10px" }}>
          <Avatar
            src="/images/profile.png"
            alt="profile picture"
            width={50}
            height={50}
          />
          <Input placeholder="No que está pensando?"></Input>
        </div>
        <div style={{ display: "flex",justifyContent: "space-between"}}>
          <div style={{ display: "flex"}}>
            <IconButton>
              <BsImages />
            </IconButton>

            <IconButton>
              <BsEmojiSunglasses />
            </IconButton>
          </div>
          <Button>
            Publicar
          </Button>
        </div>
      </SharePost> */}

      <StyledFeed>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </StyledFeed>
    </Wrapper>
  );
};

export default Feed;
