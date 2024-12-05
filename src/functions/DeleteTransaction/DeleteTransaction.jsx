import axios from 'axios';
import routes from '../../constants/routes.json';
async function deleteTransaction(id) {
  try {
    const response = await axios.delete(`${routes.DeleteTransaction}?id=${id}`);
    return response.data; // Retorna os dados da resposta.
  } catch (error) {
    console.error('Erro ao deletar transação:', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default deleteTransaction;
