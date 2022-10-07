import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  border: 1px solid #757575;
  border-radius: 5px;
  width: fit-content;
  text-align: center;
  margin: 24px auto;
}
`;

export const CardTitle = styled.h2`
  display: block;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const StatWrapper = styled.li`
  display: grid;
  align-content: space-around;
  background-color: ${getRandomHexColor};
  width: 100px;
  height: 100px;
`;

export const Percentage = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
