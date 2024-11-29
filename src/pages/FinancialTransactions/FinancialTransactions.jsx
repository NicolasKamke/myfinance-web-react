import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  PageContainer,
  StyledTable,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Title,
} from './FinancialTransactions.styles';
import FinancialTransactionsModal from '../../components/FinancialTransactionsModal/FinancialTransactionsModal';

function FinancialTransactions() {
  const [transactions, setTransactions] = useState([
    {
      id: '1',
      description: 'Compra de insumos',
      type: 'Despesa',
      value: 120.0,
      date: '2024-11-28',
    },
    {
      id: '2',
      description: 'Venda de produto',
      type: 'Receita',
      value: 250.0,
      date: '2024-11-27',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    description: '',
    type: '',
    value: '',
    date: '',
  });

  const openModal = (transaction = null) => {
    setEditingTransaction(transaction);
    if (transaction) {
      setFormData(transaction);
    } else {
      setFormData({ id: '', description: '', type: '', value: '', date: '' });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingTransaction(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      formData.id &&
      formData.description &&
      formData.type &&
      formData.value &&
      formData.date
    ) {
      if (editingTransaction) {
        // Atualizar transação
        setTransactions((prev) =>
          prev.map((t) =>
            t.id === editingTransaction.id ? { ...t, ...formData } : t
          )
        );
      } else {
        // Adicionar nova transação
        setTransactions((prev) => [...prev, formData]);
      }
      closeModal();
    } else {
      alert('Preencha todos os campos antes de salvar.');
    }
  };

  const handleDelete = (transactionId) => {
    setTransactions((prev) => prev.filter((t) => t.id !== transactionId));
  };

  return (
    <PageContainer>
      <Title>Transações Financeiras</Title>
      <Button action="create" onClick={() => openModal()}>
        Registrar Transação
      </Button>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Descrição</TableHeader>
            <TableHeader>Tipo</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableData>{transaction.id}</TableData>
              <TableData>{transaction.description}</TableData>
              <TableData>{transaction.type}</TableData>
              <TableData>R$ {transaction.value.toFixed(2)}</TableData>
              <TableData>{transaction.date}</TableData>
              <TableData>
                <ButtonGroup>
                  <Button action="edit" onClick={() => openModal(transaction)}>
                    Editar
                  </Button>
                  <Button
                    action="delete"
                    onClick={() => handleDelete(transaction.id)}
                  >
                    Excluir
                  </Button>
                </ButtonGroup>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>

      {/* Modal */}
      {showModal && (
        <FinancialTransactionsModal
          closeModal={closeModal}
          editingTransaction={editingTransaction}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </PageContainer>
  );
}

export default FinancialTransactions;
