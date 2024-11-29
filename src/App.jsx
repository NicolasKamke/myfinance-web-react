// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import FinancialTransactions from './pages/FinancialTransactions/FinancialTransactions';
import AccountPlan from './pages/AccountPlan/AccountPlan';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AccountPlan" element={<AccountPlan />} />
        <Route
          path="/FinancialTransactions"
          element={<FinancialTransactions />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
