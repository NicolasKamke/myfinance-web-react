import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  NoDataMessage,
  StyledTable,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Title,
} from './AccountPlan.styles';
import AccountPlanModal from '../../components/AccountPlanModal/AccountPlanModal';

function AccountPlan() {
  const [records, setRecords] = useState([
    { id: 1, description: 'Compra no supermercado', type: 'Despesa' },
    { id: 2, description: 'Salário mensal', type: 'Receita' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    description: '',
    type: '',
  });

  const onUpdate = (newData, record) => {
    if (!newData) {
      setRecords((prev) => prev.filter((r) => r.id !== record.id));
    } else if (record) {
      setRecords((prev) =>
        prev.map((r) => (r.id === record.id ? { ...r, ...newData } : r))
      );
    } else {
      setRecords((prev) => [...prev, newData]);
    }
  };

  const openModal = (record = null) => {
    setEditingRecord(record);
    if (record) {
      setFormData(record);
    } else {
      setFormData({ id: '', description: '', type: '' });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingRecord(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.id && formData.description && formData.type) {
      onUpdate(formData, editingRecord);
      closeModal();
    } else {
      alert('Preencha todos os campos antes de salvar.');
    }
  };

  return (
    <TableContainer>
      <Title>📋 Registros</Title>
      <Button action="create" onClick={() => openModal()}>
        Criar item de plano de conta
      </Button>
      {records.length > 0 ? (
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Descrição</TableHeader>
              <TableHeader>Tipo</TableHeader>
              <TableHeader>Ações</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableData>{record.id}</TableData>
                <TableData>{record.description}</TableData>
                <TableData>{record.type}</TableData>
                <TableData>
                  <ButtonGroup>
                    <Button action="edit" onClick={() => openModal(record)}>
                      Editar
                    </Button>
                    <Button
                      action="delete"
                      onClick={() => onUpdate(null, record)}
                    >
                      Excluir
                    </Button>
                  </ButtonGroup>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      ) : (
        <NoDataMessage>Não há registros disponíveis.</NoDataMessage>
      )}

      {showModal && (
        <AccountPlanModal
          closeModal={closeModal}
          editingRecord={editingRecord}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </TableContainer>
  );
}

export default AccountPlan;
