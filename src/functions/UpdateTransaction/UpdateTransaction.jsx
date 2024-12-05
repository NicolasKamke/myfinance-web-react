import axios from 'axios';
import routes from '../../constants/routes.json';
async function updateTransaction(data) {
  try {
    const response = await axios.put(routes.UpdateTransactions, data);
    return response.data; // Retorna os dados da resposta.
  } catch (error) {
    console.error('Erro ao atualizar os transação:', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default updateTransaction;
