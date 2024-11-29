import React from 'react';
import { Input, Button } from './FinancialTransactionsModal.styles';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

function FinancialTransactionsModal({
  editingTransaction,
  formData,
  handleInputChange,
  handleSubmit,
  closeModal,
}) {
  return (
    <Modal>
      <h2>{editingTransaction ? 'Editar Transação' : 'Registrar Transação'}</h2>
      <Input
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleInputChange}
        disabled={!!editingTransaction} // Desabilitar edição do ID ao editar
      />
      <Input
        type="text"
        name="description"
        placeholder="Descrição"
        value={formData.description}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="type"
        placeholder="Tipo (Receita/Despesa)"
        value={formData.type}
        onChange={handleInputChange}
      />
      <Input
        type="number"
        name="value"
        placeholder="Valor"
        value={formData.value}
        onChange={handleInputChange}
      />
      <Input
        type="date"
        name="date"
        placeholder="Data"
        value={formData.date}
        onChange={handleInputChange}
      />
      <Button action="create" onClick={handleSubmit}>
        {editingTransaction ? 'Salvar' : 'Registrar'}
      </Button>
      <Button action="delete" onClick={closeModal}>
        Cancelar
      </Button>
    </Modal>
  );
}

FinancialTransactionsModal.propTypes = {
  editingTransaction: PropTypes.bool.isRequired,
  formData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default FinancialTransactionsModal;
