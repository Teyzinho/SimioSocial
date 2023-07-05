"use client"

//npm install react-masonry-css
import Masonry from 'react-masonry-css'

import React, { useEffect, useState } from "react";
import Post from "../posts/Post";
import styled from "styled-components";
import { device } from "@/style/Breakpoints";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

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

const Feed = () => {
  const supabase = useSupabaseClient();
  const [postData, setPostData] = useState([]);

  const fetchPost = async () => {
    const { data } = await supabase.from("posts").select("*").order("created_at", { ascending: false });

    setPostData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);


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
        {postData.map((item) => {
          return <Post key={item.id} data={...item} />;
        })}
      </StyledFeed>
    </Wrapper>
  );
};

export default Feed;
