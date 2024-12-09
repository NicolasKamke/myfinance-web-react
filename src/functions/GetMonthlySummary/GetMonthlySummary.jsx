import axios from 'axios';
import routes from '../../constants/routes.json';

async function getMonthlySummary(month, year) {
  try {
    const response = await axios.get(
      `${routes.GetMonthlySummary}?month=${month}&year=${year}`
    );
    return response.data; // Retorna os dados da resposta.
  } catch (error) {
    console.error('Erro ao buscar resumo mensal:', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default getMonthlySummary;
