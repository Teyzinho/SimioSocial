import styled from "styled-components";
import { device } from "@/style/Breakpoints";
import { Button } from "@/src/components/buttons/button";

export const CreatePostForm = styled.form`
  width: 1000px;
  min-height: 600px;
  margin: auto;
  margin-top: 56px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 5px;
  box-shadow: -3px 4px 9px -1px rgba(0, 0, 0, 0.363);
  position: relative;
  display: flex;
  padding: 50px;

  @media ${device.md}{
    width: 600px;
    flex-direction: column;
    gap: 52px;
  }
  @media ${device.sm} {
    width: 95%;
    flex-direction: column;
    padding: 50px 0;
  }
  @media ${device.xs} {
    width: 95%;
    flex-direction: column;
  }
`;

export const FileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const File = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  max-width: 300px;
  height: ${({ height }) => (height ? "fit-content" : "535px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};

  @media ${device.sm} {
    width: 200px;
    height:400px;
  }
`;

export const FileButton = styled.button`
    width: 80%;
    
    & svg{
        width: 35px;
        height: 35px;
        padding-bottom: 16px;
    }
`;

export const DescContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 56px;

  & input {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid gray;
    padding-bottom: 4px;
    &:focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    }

    @media ${device.sm} {
      width: 300px;
    }
  }

  & > :first-child {
    font-size: 2.5rem;
  }

  @media ${device.sm} {
    padding-top: 25px;
    padding-bottom: 50px;
    padding-left:16px;
  }

  & :last-child {

    @media ${device.sm} {
      padding: 0;
    }

  }

`;

export const TagContainer = styled.div``;

export const TagButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 8px;

  margin: 8px;
`;

export const ShowTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 10px;
`;

export const Tag = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.blue};
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  font-weight: 500;

  &::after {
    color: black;
    content: "X";
    position: absolute;
    right: -8px;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    opacity: 0;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

export const RemoveImgButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.red};
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 25px;
`;