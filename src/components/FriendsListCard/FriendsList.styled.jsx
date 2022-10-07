import styled from 'styled-components';

export const FriendCardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const FriendCard = styled.li`
  display: flex;
  gap: 16px;
  padding: 16px;
  width: 240px;
  align-items: center;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 5px rgba(217, 206, 217, 0.5);
`;

export const OflineIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
`;
export const OnlineIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: green;
`;
