"use client"

//npm install react-masonry-css
import Masonry from 'react-masonry-css'

import Post from "../posts/Post";
import styled from "styled-components";
import { device } from "@/style/Breakpoints";

const StyledFeed = styled(Masonry)`
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex;
  margin:auto;
  margin-top:57px;
  width: 95%;

  @media ${device.sm} {
    width: 100%;
  }

`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Feed = ({feed : postData , isLoading}) => {

  if(isLoading){
    return <div>Loading</div>
  }

  return (
    <Wrapper>
      <StyledFeed
      breakpointCols={{
        default: 4,
        1100: 3,
        700: 2,
      }}
      columnClassName="masonry-grid-column"
      >
        {postData?.map((item) => {
          return <Post key={item.id} data={...item} />;
        })}
      </StyledFeed>
    </Wrapper>
  );
};

export default Feed;
