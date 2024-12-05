import React, { useState } from 'react';
import { Button, Input, Select } from './AccountPlanModal.styles';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

function AccountPlanModal({
  accountTypes,
  editingRecord,
  formData,
  handleSubmit,
  closeModal,
}) {
  const [data, setData] = useState(formData);

  const updateData = (e) => {
    const { name, value } = e.target;
    setData((lastData) => {
      return { ...lastData, [name]: value };
    });
  };

  return (
    <Modal>
      <h2>{editingRecord ? 'Editar Registro' : 'Adicionar Registro'}</h2>
      <Input
        type="text"
        name="name"
        placeholder="Nome"
        value={data?.name}
        onChange={updateData}
      />
      <Select value={data?.type?.id} name="type" onChange={updateData}>
        <option value="">Selecione o Tipo</option>
        {accountTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </Select>
      <div>
        <Button action="create" onClick={() => handleSubmit(data)}>
          {editingRecord ? 'Salvar' : 'Criar'}
        </Button>
        <Button action="delete" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}

AccountPlanModal.propTypes = {
  editingRecord: PropTypes.bool,
  formData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  accountTypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

AccountPlanModal.default = {
  editingRecord: null,
};

export default AccountPlanModal;
