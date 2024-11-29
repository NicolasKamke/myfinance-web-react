import styled from 'styled-components';

export const Input = styled.input`
  width: 80%;
  margin: 0.5rem 0;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
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
        background: #388e3c;
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
