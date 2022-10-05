import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 24px auto;

  color: #757575;
  width: 240px;
  border: 1px solid grey;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  padding: 24px 0;
`;

export const ImgWrapper = styled.div`
  width: 80px;

  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 80px;
  padding: 16px 0;
  background-color: gainsboro;
  box-sizing: border-box;

  border: 1px solid grey;
`;

export const ProfileName = styled.p`
  margin-top: 8px;
  color: #000;
  font-weight: 700;
`;
export const ProfileInfo = styled.p`
  margin-top: 8px;
`;

export const StatsAmount = styled.span`
  color: #000;
  font-weight: 600;
`;
