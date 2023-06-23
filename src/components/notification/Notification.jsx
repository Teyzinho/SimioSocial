import styled from "styled-components";
import UserCard from "../userCard/UserCard";
import Typography from "../display/Typography";
import Link from "next/link";

const NotificationContent = styled.div`
    padding: 20px 25px;
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid #9C9C9C;
`;

const Notification = () => {
  return (
    <NotificationContent>
      <UserCard />
      <Typography>
        Curtiu Seu
        <Link 
            style={{marginLeft:"4px"}}
        href="#">
            Post!
        </Link>
      </Typography>
    </NotificationContent>
  );
};

export default Notification;
