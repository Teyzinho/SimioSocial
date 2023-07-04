"use client"

import React, { useEffect, useState } from "react";
import Post from "../posts/Post";
import styled from "styled-components";
import { device } from "@/style/Breakpoints";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const StyledFeed = styled.div`
  margin-top: 56px;
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-rows: minmax(20px, auto);
  justify-content: center;

  @media ${device.lg} {
    grid-template-columns: repeat(auto-fill, 325px);
  }
  @media ${device.md} {
    grid-template-columns: repeat(auto-fill, 300px);
  }
  @media ${device.sm} {
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
  const supabase = useSupabaseClient();
  const [postData, setPostData] = useState([]);

  const fetchPost = async () => {
    const { data } = await supabase.from("posts").select("*");

    setPostData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);


  return (
    <Wrapper>
      <StyledFeed>
        {postData.map((item) => {
          return <Post key={item.id} data={...item} />;
        })}
      </StyledFeed>
    </Wrapper>
  );
};

export default Feed;
