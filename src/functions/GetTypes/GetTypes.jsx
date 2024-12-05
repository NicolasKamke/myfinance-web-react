import axios from 'axios';
import routes from '../../constants/routes.json';
async function getAccountTypes() {
  try {
    const response = await axios.get(routes.GetTypes);
    return response.data; // Retorna os dados da resposta.
  } catch (error) {
    console.error('Erro ao buscar os tipos de conta:', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default getAccountTypes;
