import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2rem;
`;

export const Section = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ isIncome }) => (isIncome ? '#e7f9e7' : '#fde7e7')};
  border: 1px solid ${({ isIncome }) => (isIncome ? '#a6d5a6' : '#d5a6a6')};
  border-radius: 5px;
`;

export const Value = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const ProgressBarContainer = styled.div`
  margin: 2rem 0;
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 20px;
  width: ${({ progress }) => progress}%;
  background: ${({ progress }) => (progress > 50 ? '#4caf50' : '#ff9800')};
  transition: width 0.3s ease;
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ isPositive }) => (isPositive ? '#4caf50' : '#f44336')};
`;
