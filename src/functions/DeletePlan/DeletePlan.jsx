import axios from 'axios';
import routes from '../../constants/routes.json';
async function deletePlan(id) {
  try {
    const response = await axios.delete(`${routes.DeletePlan}?id=${id}`);
    return response.data; // Retorna os dados da resposta.
  } catch (error) {
    console.error('Erro ao deletar plano:', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default deletePlan;
