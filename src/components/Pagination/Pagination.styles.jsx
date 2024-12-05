import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  background-color: ${({ active }) => (active ? '#4caf50' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ active }) => (active ? '#347736' : '#e0e0e0')};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #dcdcdc;
  }
`;
