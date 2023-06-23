"use client"

import styled from "styled-components";

const CreatePostContainer = styled.div`
  width: 900px;
  height: 500px;
  margin: auto;
  margin-top: 56px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 5px;
  box-shadow: -3px 4px 9px -1px rgba(0, 0, 0, 0.363);
`;

const CreatePost = () => {
  return (
    <main>
      <CreatePostContainer></CreatePostContainer>
    </main>
  );
};

export default CreatePost;
