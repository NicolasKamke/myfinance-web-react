import React from 'react';
import PropTypes from 'prop-types';
import { PaginationContainer, PaginationButton } from './Pagination.styles';

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Anterior
      </PaginationButton>
      {[...Array(totalPages)].map((_, index) => (
        <PaginationButton
          key={index}
          active={currentPage === index + 1}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Próximo
      </PaginationButton>
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
