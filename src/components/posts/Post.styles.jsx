import styled from "styled-components";
import { Avatar } from "../pictures/Avatar";

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  position:relative;
`;

export const StyledPostReactions = styled.div`
  width: 100%;
  display: flex;
  background-color: #212226;
  color: white;
  gap: 4px;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  & > :last-child {
    margin-left: auto;
    padding-right: 8px;
  }
`;
