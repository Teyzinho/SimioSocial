import styled from "styled-components";

export const ProfileCard = styled.div`
  width:90%;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.neutral};
  margin: auto;
  margin-top: 42px;
  border-radius: 5px;
  position: relative;

`;

export const ProfileBanner = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ProfileInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileTabButton = styled.div`
    position: absolute;
    bottom: -36px;
`

export const FeedContainer = styled.div`
  width: 95%;
  margin: auto;
`