import styled from 'styled-components';

// Estilização
export const TableContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHead = styled.thead`
  background: #4caf50;
  color: white;
`;

export const TableHeader = styled.th`
  padding: 1rem;
  border: 1px solid #ddd;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f2f2f2;
  }

  &:hover {
    background: #e1f5e1;
  }
`;

export const TableData = styled.td`
  padding: 0.8rem;
  border: 1px solid #ddd;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  ${({ action }) => {
    if (action === 'edit') {
      return `
        background: #2196f3;
        color: white;
      `;
    }
    if (action === 'delete') {
      return `
        background: #f44336;
        color: white;
      `;
    }
    if (action === 'create') {
      return `
        background: #4caf50;
        color: white;
        margin-bottom: 1rem;
        font-size: 1rem;
      `;
    }
  }}

  &:hover {
    opacity: 0.9;
  }
`;

export const NoDataMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
`;
