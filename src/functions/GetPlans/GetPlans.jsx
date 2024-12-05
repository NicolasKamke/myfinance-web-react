import axios from 'axios';
import routes from '../../constants/routes.json';

async function getPlans(page = 1, pageSize = 10) {
  try {
    const response = await axios.get(
      `${routes.GetPlans}?page=${page}&pageSize=${pageSize}`
    );
    return response.data; // Retorna os dados da resposta.
  } catch (error) {
    console.error('Erro ao buscar os planos de conta:', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default getPlans;
