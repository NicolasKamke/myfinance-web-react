import React, { useState, useEffect } from 'react';
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
import getAccountTransactions from '../../functions/GetTransactions/GetTransactions';
import getAllAccountPlans from '../../functions/GetAllPlans/GetAllPlans';
import updateAccountTransaction from '../../functions/UpdateTransaction/UpdateTransaction';
import addAccountTransaction from '../../functions/AddTransaction/AddTransaction';
import deleteAccountTransaction from '../../functions/DeleteTransaction/DeleteTransaction';
import Pagination from '../../components/Pagination/Pagination';
function FinancialTransactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0); // Total de registros
  const [pageSize] = useState(10); // Itens por página
  const [showModal, setShowModal] = useState(false);
  const [accountPlans, setAccountPlans] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    description: '',
    type: '',
    value: '',
    date: '',
  });
  const [records, setRecords] = useState([]);

  const updateScreen = async (page = 1) => {
    try {
      const plans = await getAccountTransactions(page, pageSize);
      const filteredTypes = plans?.data?.map((item) => {
        return {
          id: item?.id,
          description: item?.description,
          plan: {
            id: item?.accountPlan?.id,
            name: item?.accountPlan?.name,
            type: {
              id: item?.accountPlan?.accountType?.id,
              shortName: item?.accountPlan?.accountType?.shortName,
              fullName: item?.accountPlan?.accountType?.fullName,
              description: item?.accountPlan?.accountType?.description,
            },
          },
          value: item?.value,
          date: new Date(item?.dateTime),
        };
      });
      setRecords(filteredTypes);
      setCurrentPage(plans?.page);
      setTotalRecords(plans?.totalCount);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    updateScreen(currentPage);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const plans = await getAllAccountPlans();
        const filteredTypes = plans?.map((item) => {
          return {
            id: item?.id,
            name: item?.name,
            type: {
              id: item?.accountType?.id,
              name: item?.accountType?.fullName,
            },
          };
        });
        setAccountPlans(filteredTypes);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

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

  const handleSubmit = async (data) => {
    console.log(data);
    if (data?.description && data?.value && data?.date && data?.plan?.id) {
      if (data?.id) {
        await updateAccountTransaction({
          id: data.id,
          description: data.description,
          value: data.value,
          dateTime: data.date,
          accountPlan: {
            id: data.plan.id,
          },
        });
      } else {
        await addAccountTransaction({
          description: data.description,
          value: data.value,
          dateTime: data.date,
          accountPlan: {
            id: data.plan.id,
          },
        });
      }

      closeModal();
      await updateScreen(currentPage);
    } else {
      alert('Preencha todos os campos antes de salvar.');
    }
  };

  const onDelete = async (id) => {
    try {
      if (typeof id !== 'undefined' && id != null) {
        await deleteAccountTransaction(id);
        await updateScreen(currentPage);
      }
    } catch {
      alert('Erro ao deletar o registro.');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateScreen(page);
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
            <TableHeader>Descrição</TableHeader>
            <TableHeader>Tipo</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {records.map((transaction) => (
            <TableRow key={transaction?.id}>
              <TableData>{transaction?.description}</TableData>
              <TableData>{transaction?.plan?.type?.shortName}</TableData>
              <TableData>R$ {transaction?.value?.toFixed(2)}</TableData>
              <TableData>
                {transaction?.date?.toLocaleDateString('pt-BR')}
              </TableData>
              <TableData>
                <ButtonGroup>
                  <Button action="edit" onClick={() => openModal(transaction)}>
                    Editar
                  </Button>
                  <Button
                    action="delete"
                    onClick={() => onDelete(transaction.id)}
                  >
                    Excluir
                  </Button>
                </ButtonGroup>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalRecords / pageSize)}
        onPageChange={handlePageChange}
      />

      {/* Modal */}
      {showModal && (
        <FinancialTransactionsModal
          closeModal={closeModal}
          editingTransaction={editingTransaction}
          formData={formData}
          handleInputChange={handleInputChange}
          accountPlans={accountPlans}
          handleSubmit={handleSubmit}
        />
      )}
    </PageContainer>
  );
}

export default FinancialTransactions;
