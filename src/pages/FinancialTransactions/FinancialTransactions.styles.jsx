import styled from 'styled-components';

// Estilização
export const PageContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHead = styled.thead`
  background: #00796b;
  color: white;
`;

export const TableHeader = styled.th`
  padding: 1rem;
  border: 1px solid #ddd;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }

  &:hover {
    background: #e8f5e9;
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
        background: #0288d1;
        color: white;
      `;
    }
    if (action === 'delete') {
      return `
        background: #d32f2f;
        color: white;
      `;
    }
    if (action === 'create') {
      return `
        background: #00796b;
        color: white;
        margin-bottom: 1.5rem;
        font-size: 1rem;
      `;
    }
  }}

  &:hover {
    opacity: 0.9;
  }
`;
