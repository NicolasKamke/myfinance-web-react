import React, { useState, useEffect } from 'react';
import {
  Container,
  Footer,
  ProgressBar,
  ProgressBarContainer,
  Section,
  TitleContainer,
  Title,
  Arrow,
  Value,
} from './Home.styles';

import getMonthlySummary from '../../functions/GetMonthlySummary/GetMonthlySummary';

function Home() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const updateSummary = async (month, year) => {
    try {
      const data = await getMonthlySummary(month + 1, year);
      const result = data.reduce((acc, item) => {
        acc[item.typeId] = item.totalValue;
        return acc;
      }, {});

      setIncome(result['1'] ?? 0);
      setExpense(result['2'] ?? 0);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    updateSummary(month, year);
  }, []);

  const handleMonthChange = (direction) => {
    let newMonth = month + direction;
    let newYear = year;

    if (newMonth < 0) {
      newMonth = 11; // Volta para dezembro do ano anterior
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0; // Vai para janeiro do próximo ano
      newYear += 1;
    }

    setMonth(newMonth);
    setYear(newYear);
    updateSummary(newMonth, newYear);
  };

  const balance = income - expense;
  const savingsPercentage = Math.min((balance / income) * 100, 100);

  // Obtendo o nome do mês atual
  const currentMonthName = new Date(year, month).toLocaleString('pt-BR', {
    month: 'long',
  });

  return (
    <Container>
      <TitleContainer>
        <Arrow
          onClick={() => handleMonthChange(-1)}
          style={{ cursor: 'pointer' }}
        >
          ⬅️
        </Arrow>
        <Title>
          📊 Resumo Financeiro de{' '}
          {currentMonthName.charAt(0).toUpperCase() + currentMonthName.slice(1)}{' '}
          de {year}
        </Title>
        <Arrow
          onClick={() => handleMonthChange(1)}
          style={{ cursor: 'pointer' }}
        >
          ➡️
        </Arrow>
      </TitleContainer>
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
        Você economizou{' '}
        {Number.isNaN(savingsPercentage) ? 0 : savingsPercentage.toFixed(1)}%
        das suas entradas!
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
