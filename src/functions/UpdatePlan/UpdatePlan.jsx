import axios from 'axios';
import routes from '../../constants/routes.json';
async function updatePlan(data) {
  try {
    const response = await axios.put(routes.UpdatePlan, data);
    return response.data; // Retorna os dados da resposta.
  } catch (error) {
    console.error('Erro ao atualizar os plano de conta:', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default updatePlan;
