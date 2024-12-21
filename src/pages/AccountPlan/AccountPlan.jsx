import React, { useState, useEffect } from 'react';
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
import getAccountTypes from '../../functions/GetTypes/GetTypes';
import addAccountPlan from '../../functions/AddPlan/AddPlan';
import getAccountPlans from '../../functions/GetPlans/GetPlans';
import deleteAccountPlan from '../../functions/DeletePlan/DeletePlan';
import updateAccountPlan from '../../functions/UpdatePlan/UpdatePlan';
import Pagination from '../../components/Pagination/Pagination';
function AccountPlan() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Itens por página
  const [totalRecords, setTotalRecords] = useState(0); // Total de registros
  const [accountTypes, setAccountTypes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingRecord, setEditingRecord] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    type: '',
  });
  const [records, setRecords] = useState([]);

  const updateScreen = async (page = 1) => {
    try {
      const plans = await getAccountPlans(page, pageSize);
      const filteredTypes = plans?.data?.map((item) => {
        return {
          id: item?.id,
          name: item?.name,
          type: {
            id: item?.accountType?.id,
            name: item?.accountType?.fullName,
          },
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
        const types = await getAccountTypes();
        const filteredTypes = types?.map((item) => {
          return { id: item.id, name: item.fullName };
        });
        setAccountTypes(filteredTypes);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  const openModal = (record = null) => {
    if (record) {
      setEditingRecord(true);
    }

    if (record) {
      setFormData({
        id: String(record.id),
        name: record.name,
        type: {
          id: String(record.type.id),
          name: record.type.name,
        },
      });
    } else {
      setFormData({ id: null, name: '', type: null });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingRecord(false);
  };

  const onDelete = async (id) => {
    try {
      if (typeof id !== 'undefined' && id != null) {
        await deleteAccountPlan(id);
        await updateScreen(currentPage);
      }
    } catch {
      alert('Erro ao deletar o registro.');
    }
  };

  const handleSubmit = async (data) => {
    if (data?.name && data?.type) {
      if (data?.id) {
        await updateAccountPlan({
          id: Number(data.id),
          name: data.name,
          accountType: {
            id: Number(data.type),
          },
        });
      } else {
        await addAccountPlan({
          name: data.name,
          accountType: {
            id: Number(data.type),
          },
        });
      }

      closeModal();
      await updateScreen(currentPage);
    } else {
      alert('Preencha todos os campos antes de salvar.');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateScreen(page);
  };

  return (
    <TableContainer>
      <Title>📋 Plano de Contas</Title>
      <Button action="create" onClick={() => openModal()}>
        Criar item de plano de conta
      </Button>
      {records.length > 0 ? (
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Tipo</TableHeader>
              <TableHeader>Ações</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableData>{record.id}</TableData>
                <TableData>{record.name}</TableData>
                <TableData>{record.type.name}</TableData>
                <TableData>
                  <ButtonGroup>
                    <Button action="edit" onClick={() => openModal(record)}>
                      Editar
                    </Button>
                    <Button
                      action="delete"
                      onClick={() => onDelete(record?.id)}
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

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalRecords / pageSize)}
        onPageChange={handlePageChange}
      />

      {showModal && (
        <AccountPlanModal
          closeModal={closeModal}
          editingRecord={editingRecord}
          formData={formData}
          handleSubmit={handleSubmit}
          accountTypes={accountTypes}
        />
      )}
    </TableContainer>
  );
}

export default AccountPlan;
