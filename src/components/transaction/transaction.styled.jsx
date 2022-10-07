import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #afddd5;
`;

export const TableRowType = styled.td`
  padding: 12px 64px;
  border: 1px solid #d7e2ea;

  &:first-letter {
    text-transform: uppercase;
  }
`;
export const TableRow = styled.td`
  text-align: center;
  border: 1px solid #d7e2ea;
`;

export const TableTh = styled.th`
  padding: 12px 64px;
  border: 1px solid #d7e2ea;
`;

export const TableTr = styled.tr`
  background-color: ${props => (props.inr ? 'white' : 'aliceblue')};
`;
