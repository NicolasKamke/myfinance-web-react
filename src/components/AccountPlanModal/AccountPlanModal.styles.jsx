import styled from 'styled-components';

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

export const Input = styled.input`
  width: 80%;
  margin: 0.5rem 0;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 80%;
  margin: 0.5rem 0;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const NoDataMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
`;
