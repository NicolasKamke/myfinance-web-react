import React from 'react';
import {
  Container,
  Footer,
  ProgressBar,
  ProgressBarContainer,
  Section,
  Title,
  Value,
} from './Home.styles';

function Home() {
  const income = 20;
  const expense = 10;

  const balance = income - expense;
  const savingsPercentage = Math.min((balance / income) * 100, 100).toFixed(1);

  // Obtendo o nome do mês atual
  const currentMonth = new Date().toLocaleString('pt-BR', { month: 'long' });

  return (
    <Container>
      <Title>
        📊 Resumo Financeiro de
        {' ' + currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
      </Title>

      <Section isIncome>
        <span>💰 Total de Entradas:</span>
        <Value>R$ {income.toFixed(2)}</Value>
      </Section>

      <Section>
        <span>💸 Total de Saídas:</span>
        <Value>R$ {expense.toFixed(2)}</Value>
      </Section>

      <ProgressBarContainer>
        <ProgressBar progress={savingsPercentage} />
      </ProgressBarContainer>
      <p style={{ textAlign: 'center' }}>
        Você economizou {savingsPercentage}% das suas entradas!
      </p>

      <Footer isPositive={balance >= 0}>
        {balance >= 0
          ? '🎉 Você está no verde!'
          : '⚠️ Atenção, suas saídas ultrapassaram as entradas.'}
      </Footer>
    </Container>
  );
}

export default Home;
