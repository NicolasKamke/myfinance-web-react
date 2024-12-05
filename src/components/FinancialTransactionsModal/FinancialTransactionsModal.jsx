import React, { useState } from 'react';
import { Input, Button, Select } from './FinancialTransactionsModal.styles';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

function FinancialTransactionsModal({
  editingTransaction,
  formData,
  handleSubmit,
  closeModal,
  accountPlans,
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
      <h2>{editingTransaction ? 'Editar Transação' : 'Registrar Transação'}</h2>
      <Input
        type="text"
        name="description"
        placeholder="Descrição"
        value={data?.description}
        onChange={updateData}
      />
      <Select
        value={data?.plan?.id}
        name="plan"
        onChange={({ target }) =>
          updateData({
            target: { name: target.name, value: { id: target.value } },
          })
        }
      >
        <option value="">Selecione o Plano</option>
        {accountPlans.map((plan) => (
          <option key={plan.id} value={plan.id}>
            {plan.name}
          </option>
        ))}
      </Select>
      <Input
        type="number"
        name="value"
        placeholder="Valor"
        value={data?.value}
        onChange={updateData}
      />
      <Input
        type="date"
        name="date"
        placeholder="Data"
        value={data?.date ? data?.date?.toISOString()?.split('T')[0] : ''}
        onChange={({ target }) =>
          updateData({
            target: { name: target.name, value: new Date(target.value) },
          })
        }
      />
      <div>
        <Button action="create" onClick={() => handleSubmit(data)}>
          {editingTransaction ? 'Salvar' : 'Registrar'}
        </Button>
        <Button action="delete" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}

FinancialTransactionsModal.propTypes = {
  editingTransaction: PropTypes.bool,
  formData: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    plan: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        fullName: PropTypes.string,
        shortName: PropTypes.string,
      }),
    }),
    date: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  accountPlans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
    })
  ).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

FinancialTransactionsModal.default = {
  editingTransaction: null,
};

export default FinancialTransactionsModal;
