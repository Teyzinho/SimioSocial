import { device } from "@/style/Breakpoints";
import styled from "styled-components";

export const StyledFullPost = styled.div`
  width: 1000px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral};
  min-height: 500px;
  margin: auto;
  margin-top: 56px;
  border-radius: 5px;
  overflow: hidden;

  @media ${device.md} {
    width: 600px;
    flex-direction: column;
  }
  @media ${device.sm} {
    width: 95%;
    flex-direction: column;
  }
  @media ${device.xs} {
    width: 100%;
    flex-direction: column;
  }
`;

export const FullPostImgWrapper = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const FullPostImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const FullPostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height:750px;

  & > :last-child {
    margin-top: auto;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  padding: 16px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;