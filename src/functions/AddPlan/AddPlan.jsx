import axios from 'axios';
import routes from '../../constants/routes.json';
async function addPlan(data) {
  try {
    await axios.post(routes.AddPlan, data);
  } catch (error) {
    console.error('Erro ao adicionar novo plano: ', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada.
  }
}

export default addPlan;
