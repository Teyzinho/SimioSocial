import styled from "styled-components";

const TabButtonContainer = styled.button`
  background-color: ${({ active }) => (active ? "lightblue" : "transparent")};
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;

const TabButton = ({ label, active, onClick }) => {
  return (
    <TabButtonContainer active={active ? "true" : undefined} onClick={onClick}>
      {label}
    </TabButtonContainer>
  );
};

export default TabButton;