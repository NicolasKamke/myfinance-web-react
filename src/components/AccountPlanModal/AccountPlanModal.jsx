import React from 'react';
import { Button, Input } from './AccountPlanModal.styles';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

function AccountPlanModal({
  editingRecord,
  formData,
  handleInputChange,
  handleSubmit,
  closeModal,
}) {
  return (
    <Modal>
      <h2>{editingRecord ? 'Editar Registro' : 'Adicionar Registro'}</h2>
      <Input
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleInputChange}
        disabled={!!editingRecord} // Desabilitar edição do ID ao editar
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
        placeholder="Tipo"
        value={formData.type}
        onChange={handleInputChange}
      />
      <Button action="create" onClick={handleSubmit}>
        {editingRecord ? 'Salvar' : 'Criar'}
      </Button>
      <Button action="delete" onClick={closeModal}>
        Cancelar
      </Button>
    </Modal>
  );
}

AccountPlanModal.propTypes = {
  editingRecord: PropTypes.bool.isRequired,
  formData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AccountPlanModal;
