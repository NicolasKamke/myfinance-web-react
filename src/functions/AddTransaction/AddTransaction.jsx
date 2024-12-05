import axios from 'axios';
import routes from '../../constants/routes.json';
async function addTransaction(data) {
  try {
    await axios.post(routes.AddTransaction, data);
  } catch (error) {
    console.error('Erro ao adicinar nova transação: ', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default addTransaction;
