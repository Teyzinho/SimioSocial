"use client";

import styled from "styled-components";
import Notification from "@/src/components/notification/Notification"; 

const NotificationContainer = styled.div`
  width: 900px;
  margin: auto;
  margin-top: 56px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 5px;
  box-shadow: -3px 4px 9px -1px rgba(0, 0, 0, 0.363);
`;

const NotificationPage = () => {
  return (
    <main>
      <NotificationContainer>
        <Notification/>
        <Notification/>
    </NotificationContainer>
    </main>
  );
};

export default NotificationPage;
